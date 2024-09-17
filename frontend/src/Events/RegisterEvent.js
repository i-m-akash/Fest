import React, { useState } from 'react';
import axios from 'axios';

const RegisterEvent = () => {
  const [eventId, setEventId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [otherUsers, setOtherUsers] = useState([{ name: '', email: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/register', {
      eventId,
      userName,
      userEmail,
      otherUsers,
    })
    .then(response => {
      alert(response.data.message);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  const handleOtherUserChange = (index, e) => {
    const { name, value } = e.target;
    const users = [...otherUsers];
    users[index][name] = value;
    setOtherUsers(users);
  };

  const addUser = () => {
    setOtherUsers([...otherUsers, { name: '', email: '' }]);
  };

  return (
    <div className="container">
      <h1>Register for Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event ID:
          <input type="text" value={eventId} onChange={(e) => setEventId(e.target.value)} required />
        </label>
        <label>
          Your Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </label>
        <label>
          Your Email:
          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
        </label>
        <div>
          <h3>Other Users</h3>
          {otherUsers.map((user, index) => (
            <div key={index}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) => handleOtherUserChange(index, e)}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => handleOtherUserChange(index, e)}
                  required
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={addUser}>Add Another User</button>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterEvent;
