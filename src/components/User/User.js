import React from 'react';
import './user.css'
const User = ({ user }) => {
  console.log(user)
  const{age,name,phone ,id,email}=user
  return (
    <div className='use-style'>
      <h1>id : { id}</h1>
      <h1>Name : {name}</h1>
      <p>age : {age}</p>
      <p>phone : {phone}</p>
      <p>Email : { email}</p>
    </div>
  );
};

export default User;