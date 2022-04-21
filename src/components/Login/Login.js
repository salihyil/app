import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { adminData } from "../../service/User/api";

const Login = ({ setUserName }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let data = await adminData();
      setUserName(data[0].name);
      setPassword(data[0].email);
    };

    fetchData();
  }, [setUserName]);

  const hangleLogin = () => {
    if (email === password.toLowerCase()) {
      navigate("/home");
    } else {
      alert("Email is incorrect");
    }
  };

  return (
    <div className="App-header">
      <input
        type="text"
        placeholder="email gir:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={hangleLogin}>Giriş Yap</button>
    </div>
  );
};

export default Login;
