import { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    if (email === "user@client.com" && password === "password") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  const checkLogout = => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

};

export default Login;
