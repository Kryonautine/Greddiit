import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

export const Register = () => {

	const navigate = useNavigate();

	const [name, setName] = useState('')
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState('')
	const [phone, setPhone] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async (e) => {

		e.preventDefault()
    console.log('Default prevented')

    if ((!name) || (!password) || (!email)) {

      const user = {firstname, lastname, name, password, email, age, phone}
      
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
        setFirstname('')
        setLastname('')
        setPassword('')
        setAge('')
        setEmail('')
        setPhone('')
        setError(null)

        console.log('new user added', json)
        navigate('/profile');
      }
    }
    else {
      setError(1);
      console.log("Full details not added")
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
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
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
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
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
          onChange={(e) => setAge(e.target.value)}
          value={age}
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
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </label>
      <br />
      <input type="button" className="button" onClick={handleSubmit}></input>
      {error && <label id="errorMessage"> Name, Email and Password must be filled</label>}
    </form>
  );
}