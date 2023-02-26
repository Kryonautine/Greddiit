import React, {useState} from "react";

export const Register = () => {

	const [name, setName] = useState('')
	const [pass, setPass] = useState('')
	const [email, setEmail] = useState('')

	const handleSubmit = async (e) => {

		e.preventDefault()

		const user = {name, pass, email}
		
		const response = await fetch('/api/user', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
		}
		if (response.ok) {
			setName('')
			setPass('')
			setEmail('')
			setError(null)
			console.log('new user added', json)
		}
	}

	return (
    <form className="form" id="registerform" onSubmit={handleSubmit}>
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
          refs="pass"
          type="text"
          className="input"
          id="pass"
          placeholder="Password"
		  onChange={(e) => setPass(e.target.value)}
		  value={pass}
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
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}