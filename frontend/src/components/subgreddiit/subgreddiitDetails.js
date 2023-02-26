const SubgreddiitDetails = ({subgreddiit}) => {
	return (
		<div className="Subgreddiits">
			<h4>{subgreddiit.name}</h4>
			<p><strong>Description: </strong>{subgreddiit.description}</p>
			<p><strong>Tags: </strong>{subgreddiit.tags}</p>
			<p><strong>Banned Keywords: </strong>{subgreddiit.banned_keywords}</p>
		</div>
	)
}

export default SubgreddiitDetails;