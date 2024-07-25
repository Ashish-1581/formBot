import { useState } from 'react';
import { register } from '../api/userApi';
import { login } from '../api/userApi';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const[showLoginRedirect,setShowLoginRedirect]=useState(false)

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await register({ username, email, password, confirmPassword });
            if (response.status == 200) {
                const loginResponse = await login({ email, password });
                localStorage.setItem('token', loginResponse.data.token);
              
                setShowLoginRedirect(true);
                
               
            }
           
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
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
            <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <button onClick={handleSubmit}>Register</button>

            <p>{message}</p>
            {showLoginRedirect && navigate('/dashboard')}
        </div>
    );
};

export default Register;