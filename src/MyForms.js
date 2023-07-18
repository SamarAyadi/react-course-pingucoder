import { useState } from "react";

const MyForms = () => {
  // const[nameInput, setNameInput] = useState("")
  // const[EmailInput, setEmailInput] = useState("")

  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: "",
  });

  function handleCheckBoxChanged(event) {
    setFormInput({ ...formInputs, isStudent: event.target.checked });
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // prevent form submission to refresh the page
        console.log(formInputs);
      }}
    >
      <label>Name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          // const newFormInput = {...formInputs };

          // newFormInput.email = event.target.value
          // setFormInput(newFormInput);
          setFormInput({ ...formInputs, name: event.target.value });
        }}
      />
      <hr />
      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) =>
          setFormInput({ ...formInputs, email: event.target.value })
        }
      />
      <hr />
      <label>Age:</label>
      <input
        value={formInputs.age}
        onChange={(event) =>
          setFormInput({
            ...formInputs,
            age: event.target.value,
          })
        }
      />
      <hr />
      <label>Gender:</label>
      <input
        value={formInputs.gender}
        onChange={(event) =>
          setFormInput({
            ...formInputs,
            gender: event.target.value,
          })
        }
      />
      <hr />
      <div>
        <input
          value="student"
          type="radio"
          name="status"
          checked={formInputs.status == "student"}
          onChange={(event) =>
            setFormInput({
              ...formInputs,
              status: event.target.value,
            })
          }
        />
        Student
        <input
          value="teacher"
          type="radio"
          name="status"
          checked={formInputs.status == "teacher"}
          onChange={(event) =>
            setFormInput({
              ...formInputs,
              status: event.target.value,
            })
          }
        />
        Teacher
      </div>

      <hr />
      <select
        value={formInputs.country}
        onChange={(event) =>
          setFormInput({
            ...formInputs,
            country: event.target.value,
          })
        }
      >
        <option>Finland</option>
        <option>Canada</option>
        <option>Azerbaijan</option>
      </select>
      <label>General Info</label>
      <hr />

      <hr />
      <label> Are you student</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handleCheckBoxChanged}
      />
      <hr />
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInput({ ...formInputs, generalInfo: event.target.value });
        }}
      />

      <button>Submit</button>
    </form>
  );
};

export default MyForms;
