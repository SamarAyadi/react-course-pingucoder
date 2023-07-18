import { useState } from "react"

const MyForms = () => {
    // const[nameInput, setNameInput] = useState("")
    // const[EmailInput, setEmailInput] = useState("")

    const [formInputs, setFormInput] = useState({name: "", email: ""})
  return (
      <form onSubmit={(event) => {
          event.preventDefault() // prevent form submission to refresh the page

      }} >
          <label >Name:</label>
          <input value={formInputs.name} onChange={(event) => setFormInput({ name: event.target.value })}/>
          <hr />
          <label >Email:</label>
          <input value={formInputs.email} onChange={(event) => setFormInput({ name: event.target.value }) } />
          <hr />
          <button>Submit</button>
    </form>
  )
}

export default MyForms