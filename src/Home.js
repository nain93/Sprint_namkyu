import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logIn, logOut, signIn } from "./action";

function Home() {
  const state = useSelector((state) => {
    return state.loginReducer;
  });
  const [inputs, setInputs] = useState({
    user_id: "",
    user_password: "",
  });
  const dispatch = useDispatch();

  const { user_id, user_password } = inputs;
  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    await axios.post(
      "https://back.exitgift.shop:4000/signin",
      {
        user_email: user_id,
        user_password: user_password,
      },
      {
        withCredentials: true,
      }
    );
    setInputs({});
    const token = await axios.get(
      "https://back.exitgift.shop:4000/refreshtokenrequest",
      {
        withCredentials: true,
      }
    );
    const userUuid = token.data.data.userInfo.uuid;
    const userData = await axios.get(
      `https://back.exitgift.shop:4000/user/${userUuid}`,
      {
        withCredentials: true,
      }
    );
    dispatch(signIn(userData.data));
    localStorage.setItem("token", token.data.data.accessToken);
    localStorage.setItem("user", JSON.stringify(userData.data));
    if (localStorage.getItem("token")) {
      dispatch(logIn());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logOut());
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(logIn());
      const user = localStorage.getItem("user");
      dispatch(signIn(JSON.parse(user)));
      return;
    }
    dispatch(logOut());
    return;
  }, [dispatch]);

  return (
    <>
      <Nav />
      <h1 style={{ textAlign: "center" }}>구남규 코딩테스트</h1>
      <section className="login-section">
        {state.isLogin ? (
          <>
            <h1>Welcome {state.nick}</h1>
            <span>{state.avatar}</span>
            <button className="logout-btn" onClick={handlLogOut}>
              LogOut
            </button>
          </>
        ) : (
          <>
            <form className="login-form" onSubmit={handleSubmit}>
              <div>
                <span>Id</span>
                <input
                  type="id"
                  required
                  placeholder="nain93"
                  name="user_id"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                ></input>
              </div>
              <div>
                <span>Password</span>
                <input
                  type="password"
                  required
                  placeholder="1234"
                  name="user_password"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                ></input>
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
          </>
        )}
      </section>
    </>
  );
}

export default Home;
