function SignIn(){

    return (
    <div className="sign_in">
        <div className="navbar">
            {/* <img src="" alt="" className="logo" /> */}
            {/* <div className="project_title"><p>MintSem</p> </div> */}
            <div className="logo"></div>
            <div className="signin_button"><button onClick={()=>{window.location.href='http://localhost:5000/login'}}>Sign In Using Outlook</button></div>
        </div>
        <div className="description">
        <div className="sign_in_details">
            <p>Our project leverages blockchain technology, artificial intelligence, and web development to create a unique system that fetches student academic details, including Semester Performance Index (SPI) and Cumulative Performance Index (CPI). With this information, our system generates Non-Fungible Tokens (NFTs) that represent the student's academic performance. By integrating blockchain, we ensure the security and immutability of these digital assets, while AI assists in analyzing the data and generating personalized NFTs.</p>
            <div className="signin_button"><button onClick={()=>{window.location.href='http://localhost:5000/login'}}>Sign In Using Outlook</button></div>
        </div>
        <div className="img">
        </div>
        </div>
    </div>
       
    );
}

export default SignIn;