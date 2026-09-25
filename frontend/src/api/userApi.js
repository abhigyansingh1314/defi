import axios from "axios"

export const getUserByid=async (id)=>{
    const response=await axios.get(`http://localhost:5000/api/user/${id}`);
    console.log(response.data);
    return response.data;

}