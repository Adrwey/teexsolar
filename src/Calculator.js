import React from "react";
import Brightness5RoundedIcon from "@material-ui/icons/Brightness5Rounded";
// import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
// import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import PowerRoundedIcon from "@material-ui/icons/PowerRounded";
import EvStationRoundedIcon from "@material-ui/icons/EvStationRounded";
// import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import EvStationIcon from "@material-ui/icons/EvStation";
import "./App.css";
import styles from "./Calculator.module.css";
import { Switch, TextField, Button, Typography } from "@material-ui/core";

function Calculator() {
  const [consumo, setConsumo] = React.useState("");

  const [monofasico, setMonofasico] = React.useState(true);
  const [trifasico, setTrifasico] = React.useState(false);
  // const [tarifa, setTarifa] = React.useState("");
  const [radiacao, setRadiacao] = React.useState("");
  const [potencia, setPotencia] = React.useState("");
  const [paineis, setPaineis] = React.useState(null);
  const [ps, setPs] = React.useState(null);

  // const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleResult() {
    setPaineis(null);
    setPs(null);
  }

  function handleClick() {
    const fase = monofasico ? 30 : 100;
    const c1 = (consumo - fase) / 30;
    let c2 = c1 / radiacao;
    const c3 = c2 / (potencia / 1000);
    c2 = Number.parseFloat(c2).toFixed(2);
    setPs(c2);
    setPaineis(Math.ceil(c3));
  }

  return (
    <>
      <section className={styles.page}>
        {!paineis && !ps && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Typography
              style={{ fontWeight: "bolder" }}
              variant="h3"
              align="center"
              color="primary"
            >
              CALCULADORA SOLAR
            </Typography>

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
          </form>
        )}
        {paineis && ps && (
          <div className={styles.response}>
            <Typography
              style={{ fontWeight: "bolder" }}
              variant="h3"
              color="primary"
            >
              RESULTADO DA SIMULAÇÃO
            </Typography>

            <Typography className={styles.ppp} variant="h4">
              Você precisará de {paineis} painéis{" "}
              <ClearAllIcon fontSize="large" color="primary" />
            </Typography>
            <Typography
              className={styles.ppp}
              style={{ paddingBottom: "0px", marginBottom: "-20px" }}
              variant="h4"
            >
              Potência do sistema: {ps}{" "}
              <EvStationIcon fontSize="large" color="primary" />
            </Typography>
            <p>
              <br />
            </p>
            <Button
              onClick={handleResult}
              size="large"
              variant="contained"
              color="primary"
            >
              {" "}
              FAZER OUTRA SIMULAÇÃO{" "}
            </Button>
          </div>
        )}
      </section>
    </>
  );
}

export default Calculator;
