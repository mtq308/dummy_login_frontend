import React, { useState } from "react";
import userData from "../data/userData";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Successful login
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
    } else {
      // Failed login
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
