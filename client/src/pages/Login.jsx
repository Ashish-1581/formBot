import { useState } from 'react';
import { login } from '../api/userApi';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const[showLoginRedirect,setShowLoginRedirect]=useState(false)
const navigate=useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await login({ email, password });
            if (response.status == 200) {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
                
                setShowLoginRedirect(true);
            }
            
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSubmit}>Login</button>
            <p>{message}</p>
            {showLoginRedirect && navigate('/dashboard')}
        </div>
    );
};

export default Login;