import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "../../../lib/axios";
import Avatar from '@material-ui/core/Avatar';
import BeersServices from "../../../services/beersServices";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableListBeers() {

  const [beersFetched, setBeersFetched] = useState([]);

  const classes = useStyles();

  useEffect(async () => {
    let result = null
    result = await BeersServices.getBeers('https://api.punkapi.com/v2/beers')
    setBeersFetched(result)
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Beer Name</TableCell>
            <TableCell align="right">Motto</TableCell>
            <TableCell align="right">ABV</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beersFetched.map((beer, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {beer.name}
              </TableCell>
              <TableCell align="right">{beer.tagline}</TableCell>
              <TableCell align="right">{beer.abv}</TableCell>
              <TableCell align="right">
                <Avatar alt="Remy Sharp" src={beer.image_url} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableListBeers
