import React from "react";
import Brightness5RoundedIcon from "@material-ui/icons/Brightness5Rounded";
// import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
// import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import PowerRoundedIcon from "@material-ui/icons/PowerRounded";
import EvStationRoundedIcon from "@material-ui/icons/EvStationRounded";
// import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";

// import "./App.css";
import {
  Switch,
  TextField,
  Container,
  Button,
  // createMuiTheme,
  // makeStyles,
  // IconButton,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },

//   title: {
//     flexGrow: 1,
//   },
// });

function Calculator() {
  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: "#015F6B",
  //     },
  //     secondary: {
  //       main: "#FDE166",
  //     },
  //   },
  // });

  const [consumo, setConsumo] = React.useState("");

  const [monofasico, setMonofasico] = React.useState(true);
  const [trifasico, setTrifasico] = React.useState(false);
  // const [tarifa, setTarifa] = React.useState("");
  const [radiacao, setRadiacao] = React.useState("");
  const [potencia, setPotencia] = React.useState("");
  const [paineis, setPaineis] = React.useState(false);
  const [ps, setPs] = React.useState(false);

  // const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick() {
    const fase = monofasico ? 30 : 100;
    const c1 = (consumo - fase) / 30;
    const c2 = c1 / radiacao;
    const c3 = c2 / (potencia / 1000);
    setPs(c2);
    setPaineis(Math.ceil(c3));
  }

  return (
    <>
      <Container
        style={{
          marginTop: "60px",
        }}
        maxWidth="xs"
      >
        <form onSubmit={handleSubmit}>
          <h1 style={{ margin: "20px", color: "#015F6B", fontSize: "40px" }}>
            CALCULADORA SOLAaaaR
          </h1>

          <TextField
            value={consumo}
            onChange={(e) => setConsumo(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PowerRoundedIcon color="primary" />
                </InputAdornment>
              ),
            }}
            margin="normal"
            id="filled-basic"
            label="Consumo de Energia (kWh)"
            variant="filled"
          />
          <br />
          {/* <TextField
            value={tarifa}
            onChange={({ target }) => setTarifa(target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MonetizationOnRoundedIcon color="primary" />
                </InputAdornment>
              ),
            }}
            margin="normal"
            id="filled-basic"
            label="Tarifa:"
            variant="filled"
          />
          <br /> */}

          <TextField
            value={radiacao}
            onChange={({ target }) => setRadiacao(target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Brightness5RoundedIcon color="primary" />
                </InputAdornment>
              ),
            }}
            margin="normal"
            id="filled-basic"
            label="Radiação Solar:"
            variant="filled"
          />

          <br />

          <TextField
            value={potencia}
            onChange={({ target }) => setPotencia(target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EvStationRoundedIcon color="primary" />
                </InputAdornment>
              ),
            }}
            margin="normal"
            id="filled-basic"
            label="Potência de Módulo:"
            variant="filled"
          />
          <p>
            Monofásico:
            <Switch
              color="primary"
              checked={monofasico}
              onChange={() => {
                setMonofasico(!monofasico);
                setTrifasico(!trifasico);
              }}
              name="monofasico"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Trifásico:
            <Switch
              color="primary"
              checked={trifasico}
              onChange={() => {
                setMonofasico(!monofasico);
                setTrifasico(!trifasico);
              }}
              name="trifasico"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </p>

          <Button
            onClick={handleClick}
            fullWidth
            size="large"
            variant="contained"
            color="primary"
          >
            CALCULAR
          </Button>
          {paineis && ps && (
            <div>
              <p>
                Número de paineis que você vai precisar: {paineis} <br />
                Potência do sistema: {ps}
              </p>
            </div>
          )}
        </form>
      </Container>
    </>
  );
}

export default Calculator;
