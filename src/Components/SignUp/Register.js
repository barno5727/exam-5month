import  { useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase/Config';
import { useNavigate} from 'react-router-dom';


const Register = ({ history}) => {
    const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate= useNavigate()
  
  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={createUser}>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name='email' placeholder='Email' />
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )

            
}

export default Register