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
import logo from "./assets/logo.png";
import { Height } from "@material-ui/icons";

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
        main: "#FCFC81",
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
                <div className={classes.title}>
                  <Link
                    style={{ color: "#FCFC81", textDecoration: "none" }}
                    to="/"
                  >
                    <img
                      style={{
                        maxHeight: "80px",
                        margin: "20px",
                        marginLeft: "60px",
                      }}
                      src={logo}
                      alt=""
                    />
                  </Link>
                </div>

                <Link
                  style={{
                    color: "#FCFC81",
                    textDecoration: "none",
                    marginRight: "30px",
                  }}
                  to="/"
                >
                  INÍCIO
                </Link>

                <Link
                  style={{
                    color: "#FCFC81",
                    textDecoration: "none",
                    marginRight: "30px",
                  }}
                  to="calculadora"
                >
                  CALCULADORA SOLAR
                </Link>

                {/* <Link
                  style={{
                    color: "#FCFC81",
                    textDecoration: "none",
                    marginRight: "30px",
                  }}
                  to="dicas"
                >
                  DICAS
                </Link> */}

                <Link
                  style={{
                    color: "#FCFC81",
                    textDecoration: "none",
                    marginRight: "100px",
                  }}
                  to="contato"
                >
                  CONTATO
                </Link>
              </Toolbar>
            </AppBar>

            {/* <Calculator /> */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculadora" element={<Calculator />} />
              <Route path="/dicas" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
