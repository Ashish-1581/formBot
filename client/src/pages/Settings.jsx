import React, { useState } from 'react'
import { updateUserDetails } from '../api/userApi'
function Settings() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage('');
      setError('');
  
      try {
        const response = await updateUserDetails({ username, email, oldPassword, newPassword });
        setMessage(response.message);
      } catch (err) {
        setError('Error updating email or password');
      }
    };
  
    return (
      <div className="update-user-details">
        <h2>Update Email and Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>New Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    );
}

export default Settings