import { useState } from "react";
import { register, login } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import pSemi from "../assets/authImg/pSemi.png";
import ySemi from "../assets/authImg/ySemi.png";
import tri2 from "../assets/authImg/tri2.png";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Enter same Password in both fields";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await register({
        username,
        email,
        password,
        confirmPassword,
      });
      if (response.status === 200) {
        const loginResponse = await login({ email, password });
        if (loginResponse.status === 200) {
          localStorage.setItem("token", loginResponse.data.token);
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#18181B",
          gap: "20px",
          color: "white",
        }}
      >
      <Link to="/" style={{ position: 'absolute', top: '40px', left: '100px', color: 'white' }}>
            <FaArrowLeft size={26} />
  </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            gap: "15px",
          }}
        >
          <label>Username</label>
          <input
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: `1px solid ${errors.username ? "red" : "#808080"}`,
              outline: "none",
              background: "none",
              width: "300px",
            }}
            type="text"
            placeholder="Enter a Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prev) => ({ ...prev, username: "" }));
            }}
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            gap: "15px",
          }}
        >
          <label>Email</label>
          <input
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: `1px solid ${errors.email ? "red" : "#808080"}`,
              outline: "none",
              background: "none",
              width: "300px",
            }}
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            gap: "15px",
          }}
        >
          <label>Password</label>
          <input
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: `1px solid ${errors.password ? "red" : "#808080"}`,
              outline: "none",
              background: "none",
              width: "300px",
            }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            gap: "15px",
          }}
        >
          <label>Confirm Password</label>
          <input
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: `1px solid ${errors.confirmPassword ? "red" : "#808080"}`,
              outline: "none",
              background: "none",
              width: "300px",
            }}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }}
          />
          {errors.confirmPassword && (
            <span style={{ color: "red" }}>{errors.confirmPassword}</span>
          )}
        </div>

        <button
          style={{
            background: "#1A5FFF",
            color: "white",
            boxShadow: "none",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            width: "300px",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <div>
          <span>Already have an account? </span>
          <Link to="/login" style={{ color: "#1F51FF",textDecoration:"none" }}>
            Login
          </Link>
        </div>
      </div>

      <img
        src={tri2}
        alt="tri2"
        style={{
          position: "absolute",
          top: "150px",
          left: "0",
          height: "300px",
          width: "300px",
        }}
      />
      <img
        src={pSemi}
        alt="pSemi"
        style={{
          position: "absolute",
          top: "100px",
          right: "0",
          height: "300px",
          width: "150px",
        }}
      />
      <img
        src={ySemi}
        alt="ySemi"
        style={{
          position: "absolute",
          bottom: "0",
          right: "200px",
          height: "150px",
          width: "300px",
        }}
      />
    </div>
  );
};

export default Register;