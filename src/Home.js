import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import bg from "./assets/bg.jpg";
import i1 from "./assets/i1.svg";
import i2 from "./assets/i2.svg";
// import i3 from "./assets/i3.svg";
import i4 from "./assets/i4.svg";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          style={{
            background: `url(${bg}) #333 no-repeat center top`,
          }}
        >
          <div
            className={classes.paper}
            style={{
              height: "820px",
              background: "rgba(0,0,0, 0.4)",
              marginTop: "-12px",
            }}
          >
            <Typography
              variant="h2"
              align="center"
              style={{
                paddingTop: "250px",
                paddingBottom: "100px",

                fontWeight: "bolder",
              }}
              className="title"
            >
              COMECE A ECONOMIZAR AGORA MESMO
            </Typography>
            <Button
              // onClick={handleClick}
              size="large"
              variant="contained"
              color="secondary"
              className="buttonAction"
            >
              <Link
                style={{
                  textDecoration: "none",
                  padding: "20px 30px",
                  fontSize: "20px",
                  color: "#475F94",
                }}
                to="calculadora"
              >
                FAZER SIMULAÇÃO
              </Link>
            </Button>
            <p className="subtitle">
              Entenda o processo de instalação e conheça as vantagens de usar
              energia solar
            </p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{
              paddingTop: "80px",
              paddingBottom: "10px",
              fontWeight: "bolder",
            }}
          >
            CONHEÇA ALGUNS BENEFÍCIOS DE USAR ENERGIA SOLAR
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            padding: "40px",
            paddingTop: "120px",
            marginLeft: "200px",
            textAlign: "center",
          }}
          className="pc"
        >
          <img src={i1} style={{ width: "70%" }} alt="" />
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{ padding: "30px" }}
          >
            Sustentabilidade
          </Typography>

          <Typography variant="body1" align="center">
            A energia solar é considerada limpa (em oposição aos combustíveis
            fósseis), pois não gera resíduos poluentes e gases causadores do
            efeito estufa.
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ padding: "100px", textAlign: "center" }}
          className="pc"
        >
          <img src={i2} style={{ width: "70%" }} alt="" />
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{ padding: "30px" }}
          >
            Valorização do Imóvel
          </Typography>
          <Typography variant="body1" align="center">
            O possível comprador vai contabilizar toda a economia que terá ao
            longo dos anos em relação aos seus gastos anteriores com energia.
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            padding: "50px",
            paddingTop: "150px",
            textAlign: "center",
          }}
          className="pc"
        >
          <img src={i4} style={{ width: "70%" }} alt="" />
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{ padding: "30px" }}
          >
            Custo / Benefício Satisfatório
          </Typography>
          <Typography variant="body1" align="center">
            Os ganhos econômicos que esse sistema proporciona, em comparação com
            o convencional, representam uma redução na fatura de energia
            elétrica de até 98%.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            padding: "40px",
            textAlign: "center",
          }}
          className="mob"
        >
          <img src={i1} style={{ width: "70%" }} alt="" />
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{ padding: "30px" }}
          >
            Sustentabilidade
          </Typography>

          <Typography variant="body1" align="center">
            A energia solar é considerada limpa (em oposição aos combustíveis
            fósseis), pois não gera resíduos poluentes e gases causadores do
            efeito estufa.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ padding: "20px", textAlign: "center" }}
          className="mob"
        >
          <img src={i2} style={{ width: "70%" }} alt="" />
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{ padding: "30px" }}
          >
            Valorização do Imóvel
          </Typography>
          <Typography variant="body1" align="center">
            O possível comprador vai contabilizar toda a economia que terá ao
            longo dos anos em relação aos seus gastos anteriores com energia.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
          }}
          className="mob"
        >
          <img src={i4} style={{ width: "70%" }} alt="" />
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{ padding: "30px" }}
          >
            Custo / Benefício Satisfatório
          </Typography>
          <Typography variant="body1" align="center">
            Os ganhos econômicos que esse sistema proporciona, em comparação com
            o convencional, representam uma redução na fatura de energia
            elétrica de até 98%.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
