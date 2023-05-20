import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useState } from "react";
import { linkData } from '../data'

const creator = {
  display: 'flex',
  justifyContent: 'space-between'
}

const Navbar = () => {

  const [hovering, sethovering] = useState(false);

  const mouseHover = () => {
    sethovering(true);
  }
  const mouseLeave = () => {
    sethovering(false);
  }

  const link = {
    color: '#fff',
    textDecoration: hovering ? 'underline' : 'none'
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={creator}>
        <Toolbar>
          <Typography variant="h5">Mortage Calculator</Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h7">Created and managered by <span onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>
            <a href={linkData} target='_blank' rel='noreferrer' style={link}>Parth Dudhatra</a>
          </span></Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;