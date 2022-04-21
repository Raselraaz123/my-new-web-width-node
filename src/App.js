import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])
  
  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
 
    const user = { name, email}
    
    // post data to server

    
fetch("http://localhost:5000/user", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
    const newUser = [...users, data]
    setUsers(newUser)
    // console.log("Success:", data);
  });
}


  return (
    <div className="App">
      <h1>My own data {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Name' required /><br />
        <input type="email" name="email" id="" placeholder='Email' required /><br />

        <input type="submit" value="Add User" />
      </form>
      <div className='user-style'>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
}

export default App;
