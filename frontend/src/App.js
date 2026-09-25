import './styles/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn.js'
import LoggedIn from './Pages/logged.js'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUserByid } from './api/userApi.js';
function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [loginUser,setLoginUser]=useState([])
  useEffect(() => {
    // Fetch user details from cookie when component mounts
    const userName = Cookies.get('user');

    if (userName) {
      const decodedCookieValue = decodeURIComponent(userName.slice(2));

      const user = JSON.parse(decodedCookieValue);
      setUserDetails(user);
    }
  }, []); // Empty dependency array ensures this effect runs only once
  useEffect(() => {
    const fetchUser = async () => {
      if (userDetails && userDetails.rollNumber) {
        try {
          const data = await getUserByid(userDetails.rollNumber);
          setLoginUser(data)
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };
  
    fetchUser();
  }, [userDetails]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/logged" element={<LoggedIn loginUser={loginUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
