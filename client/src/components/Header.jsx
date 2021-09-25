import React, { memo, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { MenuItem, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchPagination } from "../redux/dogReduser";

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

function Header({ setBreeds, breed }) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  const breeds = useSelector((state) => state.breeds.items);

  useEffect(() => {
    dispatch(fetchPagination({ search }));
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleChangeBreeds = (e) => {
    setBreeds(e.target.value);
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
          <MenuItem key={item._id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default memo(Header);
