import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { CoPresent } from "@mui/icons-material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Weather() {
  const [query, setQuery] = useState(""); //whenever someone types
  const [user, setUser] = useState("");
  const [lusaka, setLusaka] = useState("");
  // const [livingStone, setLivingStone] = useState("");

  const fetchWeather = async (query) => {
    let weatherResponse = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=42e6202c53c94387b0d82647232012&q=${query}`
    );
    let res = await weatherResponse.json();
    return res;
  };
  useEffect(() => {
    async function fetchData() {
      // let lusaka = await fetchWeather("Lusaka");
      // setLusaka(lusaka);
    }
    fetchData();
  });

  function handleChange(e) {
    setQuery(e.target.value);
  }
  async function handleClick() {
    try {
      let user = await fetchWeather(query);
      setUser(user);
    } catch (error) {
      console.log({ message: "error fetching for an api", error });
    }
  }

  //automatic send details when a user presses, Enter.
  // useEffect(() => {
  //   const handlePress = async (e) => {
  //     if (e.key === "Enter") {
  //       await handleClick();
  //     }
  //   };
  //   document
  //     .getElementById("input-box")
  //     .addEventListener("keypress", handlePress);
  // }, []); //Empty dependency array ensures this effect only runs once

  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography align="center" padding={5}>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          placeholder="search location"
          id="input-box"
        />
        <button
          onClick={handleClick}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          search
        </button>
      </Typography>

      {/* ******************************** */}

      {/* ***************************************** */}
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 3, pb: 4 }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          weather check
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          {user && (
            <div>
              Location : {user.location.name}
              <br /> Current temp is : {user.current.temp_c} *C
              <br /> Feels like : {user.current.feelslike_c}
              <br /> Condition is : {user.current.condition.text} :
              <img src={user.current.condition.icon} alt="loading" />
            </div>
          )}
        </Typography>
      </Container>
      {/* End hero unit */}
    </ThemeProvider>
  );
}
