import { useState } from "react";
import Button from "./Button";
import SearchCharacter from "./SearchCharacter";

const textLogin = {
  btnLogout: "Logout",
  btnLogin: "Login",
};

const centerInputBtn: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "#2d3748",
  color: "white",
  padding: "0.75rem",
  borderRadius: "0.25rem",
  border: "none",
  marginBottom: "0.5rem",
  width: "40%",
};

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

  const checkLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (isLoggedIn) {
    return (
      <div style={centerInputBtn}>
        <Button onClick={checkLogout}>{textLogin.btnLogout}</Button>
        <SearchCharacter />
      </div>
    );
  } else {
    return (
      <div style={centerInputBtn}>
        <input
          style={inputStyle}
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(mail) => setEmail(mail.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
        />
        <Button onClick={checkLogin}>{textLogin.btnLogin}</Button>
      </div>
    );
  }
};

export default Login;
