import React from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function register(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", {
        username,
        password,
      });
      if (response.status == 200) {
        setLoading(false);
        alert("You've Registered Successfully");

        navigate("/login");
      }
    } catch (err) {
      setLoading(false);
      alert("The registration falied try again later");
    }
  }
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <form action="" className="register" onSubmit={register}>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Register</button>
        </form>
      )}
    </>
  );
};

export default RegisterPage;
