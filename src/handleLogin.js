export async function handle loginUser{
	const payload = {username, password};

	const res = await fetch('http://localhost:5173/login',{
									method: 'POST',
									headers: ('Content - Type': 'application/json'),
									body: JSON.stringify(payload)
									});
	if(!res.ok)
	{	
		throw new error("Login Failed");
	}
	else return res.json();
}
