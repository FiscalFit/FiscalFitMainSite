import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [action, setAction] = useState("Sign up");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Логіка перевірки логіну та пароля тут

    // При умові успішного входу, викликаємо onLogin, який змінить стан isLoggedIn в батьківському компоненті
    onLogin();
    navigate("/bills"); // Переход на головну сторінку після успішного входу
  };

  return (
    <div className="container">
      <div className="login-header">
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
            if (action === "Login") {
              handleLogin();
            }
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
