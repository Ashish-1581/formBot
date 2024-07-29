import { useState } from 'react';
import { login } from '../api/userApi';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import pSemi from "../assets/authImg/pSemi.png";
import ySemi from "../assets/authImg/ySemi.png";
import tri2 from "../assets/authImg/tri2.png";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        if (!password) newErrors.password = "Password is required";

        return newErrors;
    };

    const handleSubmit = async () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await login({ email, password });
            if (response.status === 200) {
                localStorage.setItem('user',response.data.user.username);
                localStorage.setItem('token', response.data.token);
                toast.success("Loged In successfully!");

              
                navigate('/dashboard');
            }
            else{

                toast.error(response.message);
                
               
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
                    Login
                </button>
                <div>
                    <span>Don't have an account? </span>
                    <Link to="/register" style={{ color: "#1F51FF",textDecoration:"none" }}>
                        Register now
                    </Link>
                </div>

                {errors.message && ( <span style={{ color: "red" }}>{errors.message}</span> )}
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

export default Login;
