import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";
import Body from "./Body";
import { fetchBreeds } from "../redux/breedReduser";

const theme = createTheme();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
