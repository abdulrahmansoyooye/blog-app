import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context";
const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const username = userInfo?.username;
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3001/profile", {
          headers: {
            Authorization: token,
          },
        });
        setUserInfo(response.data.username);
      } catch (err) {
        console.log(err);
      }
    };
    if (token) fetch();
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <header>
      <a href="/" className="logo">
        {username ? (
          `${username.charAt(0).toUpperCase() + username.slice(1)}'s Blog`
        ) : (
          <>Blog</>
        )}
      </a>
      <nav>
        {username && (
          <>
            <Link to="/create" className="login">
              Create new post
            </Link>

            <a onClick={logout}> Log out</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/register" className="register">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
