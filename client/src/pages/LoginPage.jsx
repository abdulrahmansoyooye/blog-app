import React, { useState } from "react";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { username, password } = userData;
  const navigate = useNavigate();
  async function login(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(token);
        setLoading(false);
        alert("Logged in");
      }

      navigate("/");
    } catch (err) {
      setLoading(false);
      alert("Login Falied Try another Time");
    }
  }
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <form action="" className="login" onSubmit={login}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button>Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
