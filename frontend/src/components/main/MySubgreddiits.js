import React, {useState, useEffect} from 'react'
import SubgreddiitDetails from '../subgreddiit/subgreddiitDetails'

const MySubgreddiits = () => {

	const [subgreddiits, setSubgreddiits] = useState(null)
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [tags, setTags] = useState('')
	const [banned, setBanned] = useState('')
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchSubgreddiits = async () => {
			const response = await fetch('/api/subgreddiit')
			const json = await response.json()

			if (response.ok) {
				setSubgreddiits(json)
				console.log(json)
			}
		}

		fetchSubgreddiits()
	}, [])

	const CreateSubgreddiit = async (e) => {

		e.preventDefault()
		console.log('Default prevented')

		if (name) {

			const subgreddiit = {name, desc, tags, banned}
			
			const response = await fetch('/api/subgreddiit/', {
				method: 'POST',
				body: JSON.stringify(subgreddiit),
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
				setName('')
				setOpen(false)
				setDesc('')
				setTags('')
				setBanned('')
				setError(null)

				console.log('new subgreddiit added', json)
			}
		}
		else {
			setError(1);
			console.log("Full details not added")
		}
	}

	return (
		<>
		<button id="create" onClick={() => setOpen(!open)}>Add a New Subgreddiit</button>
		{open && 
			<form>
				<label>Name:
					<input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
				</label><br />
				<label>Description:
					<input type="text" onChange={(e) => setDesc(e.target.value)} value={desc}></input>
				</label><br />
				<label>Tags:
					<input type="text" onChange={(e) => setTags(e.target.value)} value={tags}></input>
				</label><br />
				<label>Banned Keywords:
					<input type="text" onChange={(e) => setBanned(e.target.value)} value={banned}></input>
				</label><br />
				<input type="submit" onClick={CreateSubgreddiit}></input>
			</form>
		}
		<div className='Subgreddiits'>
			{subgreddiits && subgreddiits.map((subgreddiit) => (
				<SubgreddiitDetails key={subgreddiit._id} />
			))}
		</div>
		</>
	)
}

export default MySubgreddiits;