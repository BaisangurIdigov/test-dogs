import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";
import Body from "./Body";

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
