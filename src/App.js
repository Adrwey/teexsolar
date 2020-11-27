import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Button,
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Calculator from "./Calculator";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
});

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#475F94",
      },
      secondary: {
        main: "#FDDC5C",
      },
    },
  });

  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Teex Solar
                </Typography>
                <Button color="inherit">
                  <Link
                    style={{ color: "#FDDC5C", textDecoration: "none" }}
                    to="/"
                  >
                    Início
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link
                    style={{ color: "#FDDC5C", textDecoration: "none" }}
                    to="calculadora"
                  >
                    Calculadora Solar
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link
                    style={{ color: "#FDDC5C", textDecoration: "none" }}
                    to="sobre"
                  >
                    Sobre
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link
                    style={{ color: "#FDDC5C", textDecoration: "none" }}
                    to="contato"
                  >
                    Contato
                  </Link>
                </Button>
              </Toolbar>
            </AppBar>

            {/* <Calculator /> */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculadora" element={<Calculator />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
