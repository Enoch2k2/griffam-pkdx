import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../slices/authSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login(formData))
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <TextField name="username" label="Username" variant="standard" onChange={ handleChange} />
        </div>
        <div style={{marginBottom: "12px"}}>
        <TextField name="password" label="Password" type="password" variant="standard" onChange={ handleChange} />
        </div>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      <p>Don't have an account yet? Click <Link to="/signup">here</Link> to create an account!</p>
    </div>
  )
}

export default Login