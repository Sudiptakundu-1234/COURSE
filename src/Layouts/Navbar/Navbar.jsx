import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          
        <Typography component="div" sx={{ flexGrow: 1 }}>
        <Link to='/'>
              Online Course
        </Link>
            </Typography>
          
          <Link to="/login">
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
