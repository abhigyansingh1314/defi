import * as msal from "@azure/msal-node";
import { getUserFromToken } from "./user.js";


const msalConfig = {
  auth: {
    clientId: process.env.AZURE_CLIENT_ID,
    authority:
      `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
    clientSecret: process.env.AZURE_CLIENT_SECRET,
  },
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

export const login = (req, res) => {
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: "http://localhost:5000/redirect",
  };

  cca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
    })
    .catch((error) => {
      console.error("Error generating auth code URL:", error);
      res.status(500).send("Error initiating login process");
    });
};

export const redirect = async (req, res) => {
  try {
    const tokenRequest = {
      code: req.query.code,
      scope: "user.read",
      redirectUri: "http://localhost:5000/redirect",
    };


    const response = await cca.acquireTokenByCode(tokenRequest);
    const accessToken = response.accessToken;

    
    const user = await getUserFromToken(accessToken);
    console.log(user,'he;;p');
    res.cookie('user',user,{
      maxAge:3074388,
      secure:false,
      expires:new Date(Date.now()+3073600),
      httpOnly:false,
    })
    console.log(user);
  //  console.log(accessToken);

    res.redirect('http://localhost:3000/logged');
  //  res.send('Login Successful!');
  } catch (error) {
    console.error("Error during redirect:", error);
    res.status(500).send("Error during login process");
  }
};

export const logout = (req, res) => {
  try {
    res.redirect("https://login.microsoftonline.com/common/oauth2/v2.0/logout");

    res.send("Logout Successfully");
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).send("Error during logout");
  }
};