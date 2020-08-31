import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TkfLlwr4rCOCHRkXmZqIdAHaCL%26pid%3DApi&f=1"
          alt="Slack logo"
        ></img>
        <h1>Sign in to Slack</h1>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
