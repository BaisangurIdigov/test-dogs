import React, { memo, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { MenuItem, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchPagination } from "../redux/features/dogReduсer";
import { fetchBreeds } from '../redux/features/breedReduсer'

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
  },
  select: {
    width: 200,
  },
  input: {
    width: 300,
  },
}));

function Header() {
  const [breed, setBreed] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  const breeds = useSelector((state) => state.breeds.items);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPagination({ search, breed }));
  }, [search,breed]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleChangeBreeds = (e) => {
    setBreed(e.target.value);
  };
  return (
    <div className={classes.header}>
      <TextField
        id="outlined-basic"
        label="Поиск"
        variant="outlined"
        className={classes.input}
        onChange={handleChange}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Порода"
        className={classes.select}
        value={breed}
        onChange={handleChangeBreeds}
      >
        <MenuItem value="">
          <em>Не указан</em>
        </MenuItem>
        {breeds.map((item) => (
          <MenuItem key={item._id} value={item._id}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default memo(Header);
