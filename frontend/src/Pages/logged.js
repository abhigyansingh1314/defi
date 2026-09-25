import { useState } from 'react';
import logo from "../images/WhatsApp Image 2024-02-07 at 19.42.05_efcd37c1.jpg";
import axios from "axios";
// import { redirect } from '../../../backend/auth';
function LoggedIn({ loginUser }) {
    const [selectedSemester, setSelectedSemester] = useState("");
    const [cpi, setCPI] = useState('');
    const [spi, setSPI] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [generatedBlob, setGeneratedBlob] = useState(null); 
    const [prompt, setPrompt] = useState("");
    const [cid,setCid]=useState("");
    const [transaction,setTransaction]=useState("");
    const [receiverAddress, setReceiverAddress] = useState("");

    const starton = axios.create({
        baseURL: "https://api.starton.io/v3",
        headers: {
            "x-api-key": process.env.REACT_APP_STARTON_API_KEY,
        },
      })
    async function uploadToIPFS(imageBlob) {
        const formData = new FormData();
        formData.append("file", imageBlob);
    
        const ipfsImg = await starton.post("/ipfs/file", formData);
    
        return ipfsImg.data;
    }
    
    const handleSemesterChange = (event) => {
        const selectedSemesterIndex = event.target.value;
        setSelectedSemester(selectedSemesterIndex);

        if (loginUser && loginUser.length > 0) {
            const semesterData = loginUser[0].sems[selectedSemesterIndex - 1];
            if (semesterData) {
                setCPI(semesterData.cpi);
                setSPI(semesterData.spi);
                setPrompt(`
                You are a developer who has developed several miniature pictures which are quite creative and innovative.
                You now take some inputs from user and generate pictures that somehow relate to the given data
                and which look quite innovative and appealing.The user is an engineer who has just graduated. Now, create
                an image based on following data which belong to the user, which is present within the double quotes : 
                
                "Branch: ${loginUser[0].branch}
                Semester:${selectedSemesterIndex}
                Grades (out of 10):${semesterData.cpi} "
                `);   

            }
        }
    };

    const generateImage = async () => {
        try {
            const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0", {
                headers: { Authorization: `Bearer ${process.env.REACT_APP_HF_TOKEN}` },
                method: "POST",
                body: JSON.stringify({ "inputs": prompt })
            });
            const blob = await response.blob();
            const imageURL = URL.createObjectURL(blob);
            setGeneratedImage(imageURL);
            setGeneratedBlob(blob);
        } catch (error) {
            console.error("Failed to generate or upload to IPFS:", error);
        }
    };

    const mintNFT = async () => { 
        const SMART_CONTRACT_NETWORK = "polygon-mumbai";
        const SMART_CONTRACT_ADDRESS = "0x7721A8769e9c5b7F1fbd40b0ed0a6c56D913728B";
        const WALLET_IMPORTED_ON_STARTON = "0x05923AAA784766D232Ed5f1C6c39d2CC011abEE2";

        if (!generatedBlob) {
            alert("Please generate an image first.");
            return;
        }

        try {
            const ipfsResponse = await uploadToIPFS(generatedBlob);
            console.log("IPFS Upload Success:", ipfsResponse.cid);
            setCid(ipfsResponse.cid);

            const nft = await starton.post(`https://api.starton.io/v3/smart-contract/${SMART_CONTRACT_NETWORK}/${SMART_CONTRACT_ADDRESS}/call`, {
                functionName: "mint",
                signerWallet: WALLET_IMPORTED_ON_STARTON,
                speed: "low",
                params: [receiverAddress, ipfsResponse.cid],
            });

            console.log("NFT Minted:", nft.data.transactionHash);
            setTransaction(nft.data.transactionHash);

            alert("NFT Minted successfully!");
        } catch (error) {
            console.error("Failed to mint NFT:", error);
        }
    };

    return (
        <div className="logged_in">
            <div className="navbar_logged">
                <img src={logo} alt="" className="logo_logged" />
                <div className="login_details">
                    {loginUser && loginUser.length > 0 && (
                        <div className="welcome_logged">
                            <div>{loginUser[0].Name}</div>
                            <div>{loginUser[0].roll_no}</div>
                        </div>
                    )}
                    <div className="log_out">
                        <button onClick={() => { window.location.href='http://localhost:5000/logout'  }} >
                            Log out
                        </button>
                    </div>
                </div>
            </div>
            <div className="logged_details">
                <div className="first_box">
                    <div className="result">
                        <div className="semester_name">SEMESTER {selectedSemester}</div>
                        {loginUser && loginUser.length > 0 && (
                            <div className='details'>
                                <div className="result_name">{loginUser[0].Name}</div>
                                <div className="result_roll">{loginUser[0].roll_no}</div>
                                <div className="cpi">CPI:{cpi}</div>
                            <div className="spi">SPI:{spi}</div>
                            </div>
                        )}
                        
                    </div>
                    <div className="semester">
                        <select id="fruits" value={selectedSemester} onChange={handleSemesterChange}>
                            <option value="" disabled>Select Semester</option>
                            {loginUser && loginUser.length > 0 && loginUser[0].sems && loginUser[0].sems.map((semester, index) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                        <button className="generate" onClick={generateImage}>Generate Image</button>
                        
                        </div>
                        <input placeholder='Wallet address' className='Wallet' value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} />
                </div>
                <div className="second_box">
                    <div className="nft_image">
                        {generatedImage && <img src={generatedImage} className="generated_image" alt="Generated Image" />}

                    </div>
                    <button className="mint_nft" onClick={mintNFT}>MINT NFT</button>
                </div>
                <div className="third_box">
                    <div className="nft_image">
                        {cid && <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} className="generated_image" alt="Generated Image" />}
                    </div>
                    {transaction && <a className="transaction_website" href={`https://mumbai.polygonscan.com/tx/${transaction}`} target="_blank">Click here to see transaction Details</a>}
                                
                </div>
            </div>
        </div>
    );
}

export default LoggedIn;