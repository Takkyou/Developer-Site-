import * as React from "react"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import CardBox from "../components/CardBox"

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 2,
    textAlign: "center",
    color: "blue",
  },
}
//the InnerGrid component will be a collection of multiple Grid items
function InnerGrid() {
  return (
    <>
      <Grid item xs={4}>
        <CardBox></CardBox>
      </Grid>
      <Grid item xs={4}>
        <CardBox></CardBox>
      </Grid>
      <Grid item xs={4}>
        <CardBox></CardBox>
      </Grid>
    </>
  )
}
export default function HomePage() {
  return (
    <div style={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={30} spacing={3}>
          <InnerGrid />
        </Grid>
        <Grid container item xs={30} spacing={3}>
          <InnerGrid />
        </Grid>
        <Grid container item xs={30} spacing={3}>
          <InnerGrid />
        </Grid>
      </Grid>
    </div>
  )
}
