import { useNavigate, Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedIn } = useSelector(store => store.authReducer);

  const handleLogout = async () => {
    await dispatch(logout()).unwrap()
    navigate("/login")
  }

  const loggedInLinks = (<>
    <Button color="inherit" to="/login" component={ Link }>Pokedex</Button>
    <Button color="inherit" to="/signup" component={ Link }>Caught Pokemon</Button>
    <Button color="inherit" onClick={ handleLogout }>Logout</Button>
  </>)

  const loggedOutLinks = (<>
    <Button color="inherit" to="/login" component={ Link }>Login</Button>
    <Button color="inherit" to="/signup" component={ Link }>Signup</Button>
  </>)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>Griffam Pokedex</Link>
          </Typography>
          {
            loggedIn ? loggedInLinks : loggedOutLinks
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar