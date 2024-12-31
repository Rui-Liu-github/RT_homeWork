import React, { useRef } from "react";
import "../../styles/hw.css";

function Login_useRef() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleLoginEvent = (e: any) => {
    e.preventDefault();

    // Access input values
    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      // get usename and pwd, then the create login logic here
      console.log("username", username);
      console.log("password", password);

      // Clear the input
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      console.log("not fill all inputs");
    }
  };
  return (
    <div
      className="contentBox"
      style={{ padding: "20px", border: "1px solid pink", borderRadius: "4px" }}
    >
      <h2>Login</h2>
      <form>
        <div className="takeInputs">
          <label
            htmlFor="username"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Username:
          </label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            placeholder="Enter your username"
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>
        <div className="takeInputs">
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Password:
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Enter your password"
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>
        <button
          onClick={handleLoginEvent}
          style={{
            padding: "10px 15px",
            background: "green",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login_useRef;
