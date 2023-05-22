import  {  useState, useContext} from 'react';
import { redirect} from "react-router";
import {auth} from '../../Firebase/Config';
import { AuthContext } from '../../Auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate} from 'react-router-dom';

const Login = ({history}) => {

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const navigate= useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userLogin) => {
            
            navigate("/");
          })
          .catch((err) => console.log(err.message));
      };

        const currentUser = useContext(AuthContext);
        if(currentUser){
            return redirect("/")
        }

        return (
            <div>
               <h1>Sign Up</h1>
               <form onSubmit={handleSignIn}>
                   <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name='email' placeholder='Email' />
                   <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name='password' placeholder='Password' />
                   <button type='submit'>Login</button>
              </form> 
            </div>
            )


            
        }    
        
        
        
        
        
        
        
   
export default Login