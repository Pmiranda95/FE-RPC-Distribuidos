import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData( calories, fat, carbs, protein) {
  return {  calories, fat, carbs, protein };
}

const rows = [
  createData(159, "Cafeina", 24, 4.0),
  createData( 237, "Pepa", 37, 4.3),
  createData( 262, 'Marihuana', 24, 6.0),
  createData( 305, "Coca", 67, 4.3),
  createData( 356, "La del Diego", 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ListaMedicamentos(props) {
  const classes = useStyles();
  const {lista} = props;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Codigo numerico</StyledTableCell>
            <StyledTableCell align="center">Codigo alfabetico</StyledTableCell>
            <StyledTableCell align="center">Droga</StyledTableCell>
            <StyledTableCell align="center">Tipo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((row) => (
            <StyledTableRow key={row.CodigoAlfabetico}>
              <StyledTableCell align="center">{row.Nombre}</StyledTableCell>
              <StyledTableCell align="center">{row.CodigoNumerico}</StyledTableCell>
              <StyledTableCell align="center">{row.CodigoAlfabetico}</StyledTableCell>
              <StyledTableCell align="center">{row.Droga}</StyledTableCell>
              <StyledTableCell align="center">{row.TipoMedicamento}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}