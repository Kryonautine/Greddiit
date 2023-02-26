import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

export const Register = () => {

	const navigate = useNavigate();

	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async (e) => {

		e.preventDefault()
    console.log('Default prevented')

		const user = {name, password, email}
		
		const response = await fetch('/api/user/', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		})
    console.log('Response acquired')
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
      console.log(error);
		}
		if (response.ok) {
      localStorage.setItem('login', JSON.stringify(user))
			setName('')
			setPassword('')
			setEmail('')
			setError(null)
			console.log('new user added', json)
			navigate('/profile');
		}
	}

	return (
    <form className="form" id="registerform">
      <label htmlFor="firstname" className="field">
        First name:{" "}
        <input
          refs="firstname"
          type="text"
          className="input"
          id="firstname"
          placeholder="First Name"
        />
      </label>
      <br />
      <label htmlFor="lastname" className="field">
        Last name:{" "}
        <input
          refs="lastname"
          type="text"
          className="input"
          id="lastname"
          placeholder="Last Name"
        />
      </label>
      <br />
      <label htmlFor="name" className="field">
        Username:{" "}
        <input
          refs="name"
          type="text"
          className="input"
          id="name"
          placeholder="Username"
		  onChange={(e) => setName(e.target.value)}
		  value={name}
        />
      </label>
      <br />
      <label htmlFor="pass" className="field">
        Password:{" "}
        <input
          refs="password"
          type="text"
          className="input"
          id="password"
          placeholder="Password"
		  onChange={(e) => setPassword(e.target.value)}
		  value={password}
        />
      </label>
      <br />
      <label htmlFor="email" className="field">
        E-mail:{" "}
        <input
          refs="email"
          type="text"
          className="input"
          id="email"
          placeholder="name@email.com"
		  onChange={(e) => setEmail(e.target.value)}
		  value={email}
        />
      </label>
      <br />
      <label htmlFor="age" className="field">
        Age:{" "}
        <input
          refs="age"
          type="text"
          className="input"
          id="age"
          placeholder="22"
        />
      </label>
      <br />
      <label htmlFor="phone" className="field">
        Phone Number:{" "}
        <input
          refs="phone"
          type="text"
          className="input"
          id="phone"
          placeholder="123456789"
        />
      </label>
      <br />
      <input type="button" className="button" onClick={handleSubmit}>Submit</input>
    </form>
  );
}