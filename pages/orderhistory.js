import React from "react";
import Layout from "../components/layout";
import Subscribe from '../components/Subscribe';
import Title from '../components/Title';
import "./orderhistory.scss";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from "@material-ui/core";

const OrderHistory = () => {

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      maxWidth: 890,
    },
  });

  function createData(number, date, status, price, view) {
    return { number, date, status, price, view };
  }

  const rows = [
    createData('#437627362874', "03/02/2018", "Compleated", "$21.0 For 1 Item", "View"),
    createData('#532523536433', "03/02/2018", "Compleated", "$21.0 For 1 Item", "View"),
    createData('#532564236263', "03/02/2018", "Compleated", "$21.0 For 1 Item", "View"),
    createData('#634634534527', "03/02/2018", "Compleated", "$21.0 For 1 Item", "View"),
    createData('#436284346242', "03/02/2018", "Compleated", "$21.0 For 1 Item", "View"),
  ];

  const classes = useStyles();

  return (
    <Layout>
      
    <div className="first-container-order">
        <Title text="Order " boldText="History"/>
    </div>

    <TableContainer component="order-history">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell aling="left">Order number</TableCell>
            <TableCell align="center">Order date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell className="view-link" align="right">{row.view}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <div className="subscribe-container">
      <Subscribe />
    </div>

    </Layout>
  );
};

export default OrderHistory;
