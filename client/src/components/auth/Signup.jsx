import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <TextField name="username" label="Username" variant="standard" onChange={ handleChange} />
        </div>
        <div style={{marginBottom: "12px"}}>
        <TextField name="password" label="Password" type="password" variant="standard" onChange={ handleChange} />
        </div>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      <p>Already have an account? Click <Link to="/login">here</Link> to login!</p>
    </div>
  )
}

export default Signup