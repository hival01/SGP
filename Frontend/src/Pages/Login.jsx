import React, { useState } from "react";
import { ErrorToast } from "../Components/ErrorToast";
import api from "../api/users";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const style = {
    border: "2px solid black",
  };

  let initState = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  props.userInfo && (initState = props.userInfo);

  let [state, setState] = useState(initState);
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");

  const updateState = (obj) => {
    setState((prevState) => {
      return { ...prevState, ...obj };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await api.get(`/${state.email}`);

    const user = res.data.user;

    // if (!user) {
    //   setDesc(
    //     "Account with provided email or username doesn't exists, please create a new account."
    //   );
    //   return setShow(true);
    // }
    if (user) {
      if (state.password !== user.password) {
        setDesc("Password doesn't match, please try again");
        return setShow(true);
      }
      props.setInfo({
        email: user.email,
        password: user.password,
      });
      navigate("/");
    } else {
      res = await api.post(`/`, state);
      if (res.data.user) {
        props.setInfo(state);
        navigate("/");
      }
    }
  };

  return (
    <>
      <ErrorToast desc={desc} show={show} setShow={setShow} />
      <section className="loginpage">
        <div className="container d-flex min-vh-100 justify-content-center align-item-center">
          <form className="card p-3" style={style} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={state.email}
                onChange={(e) => updateState({ email: e.target.value })}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={state.password}
                onChange={(e) => updateState({ password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
