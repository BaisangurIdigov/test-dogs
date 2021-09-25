import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchDogs } from "../redux/dogReduser";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";
import Body from "./Body";
import { fetchBreeds } from "../redux/breedReduser";

const theme = createTheme();

function App() {
  const [value, setValue] = useState("");
  const [breed, setBreeds] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header setValue={setValue} setBreeds={setBreeds} breed={breed} />
        <Body value={value} breed={breed} />
      </div>
    </ThemeProvider>
  );
}

export default App;
