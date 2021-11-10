import {useState} from "react"

function Show(props) {
  const id = props.match.params.id
  const cheese = props.cheese
  const cheesey = cheese.find((singleCheese) => {
    return singleCheese._id === id
  })

  const [editForm, setEditForm] = useState(cheesey)

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCheese(editForm, cheesey._id)
    props.history.push("/")
  }
  // remove function to delte a person
  const removeCheese = () => {
    props.deleteCheese(cheesey._id)
    props.history.push("/")
  }
  return (
    <div className="cheesey">
      <h1>{cheesey.name}</h1>
      <h2>{cheesey.countryOfOrigin}</h2>
      <img src={cheesey.image} alt={cheesey.name} />
      <button id="delete" onClick={removeCheese}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.countryOfOrigin}
        name="countryOfOrigin"
        placeholder="Country Of Origin"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="image URL"
        onChange={handleChange}
        />
        
        <input
        type="submit"
        value="Update The Cheese"
        />
      </form>
    </div>
  )
}

export default Show