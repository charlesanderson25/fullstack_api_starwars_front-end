import { useState } from "react";
import Button from "./Button";
import SearchCharacter from "./SearchCharacter";

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
      <div>
        <Button onClick={checkLogout}>Logout</Button>
        <SearchCharacter />
      </div>
    );
  } else {
    return (
      <div>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(mail) => setEmail(mail.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
        />
        <Button onClick={checkLogin}>Login</Button>
      </div>
    );
  }
};

export default Login;
