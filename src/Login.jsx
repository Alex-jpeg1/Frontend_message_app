import {useState} from 'react';
import {loginUser} from './handleLogin';

function Login{
	const [username, setUsername] = setState('');
	const [password, setPassword] = setState('');

	const function handleSubmit = async() => {
		try{
			const response = await loginUser(username, password);
			console.log("Server response: ",response);
		}catch(err)
		{
			console.log("Login failed: ", err);
		}
	};

	return(
	<div>
		<input
		 type = "text"
		 placeholder = "Username"
		 value = {username}
		 onChange = {(e) => setUsername(e.target.value)}/>
		 
		<input
	    type = "password"
	    placeholder = "Password"
	    value = {password}
	    onChange = {(e) => setPassword(e.target.value)}/>

	   <button onClick{handleSubmit}> Login </button>
	</div>
	);  
}

default export Login;
