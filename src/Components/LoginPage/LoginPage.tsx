import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [action, setAction] = useState("Sign up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="login" />
        </div>
        {action === "Login" ? (
          <div />
        ) : (
          <div className="input">
            <input type="email" placeholder="e-mail" />
          </div>
        )}
        <div className="input">
          <input type="password" placeholder="password" />
        </div>
        {action === "Login" ? (
          <div />
        ) : (
          <div className="input">
            <input type="password" placeholder="confirm password" />
          </div>
        )}
      </div>
      {action === "Sign up" ? (
        <div />
      ) : (
        <div className="forgot-password">Forgot Password?</div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
