import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('username',user);
        localStorage.setItem('password',password);
       navigate('/')
    }
    function handleChange(e){
        let id=e.target.id;
        if(id==='user'){
            setUser(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" id="user" placeholder='username'  onChange={handleChange}/>
        <input type="password" name="pass" id="pass" placeholder='password' onChange={handleChange} />
        <button>login</button>
      </form>
    </div>
  )
}
