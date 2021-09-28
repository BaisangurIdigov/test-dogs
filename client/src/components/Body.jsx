import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/styles";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import Footer from "./Footer";
import { fetchDogs } from '../redux/dogReduser'

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
}));

export default function Body() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const dogs = useSelector((state) => state.dogs.items)

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  return (
    <div className={classes.body}>
      <Paper sx={{ width: "50%" }}>
        <TableContainer sx={{ maxHeight: "100%" }}>
          <Table sx={{ minWidth: 300 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3>Картинка</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Заголовок</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Порода</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dogs.map((item) => (
                <TableRow key={item._id}>
                  <TableCell component="th" scope="row">
                    <Avatar
                      alt="Remy Sharp"
                      src={`https://images.dog.ceo/breeds/${item.breedId.name}/${item.name}.jpg`}
                      sx={{ width: 100, height: 100 }}
                    />
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.breedId.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <caption>
              <Footer />
            </caption>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
