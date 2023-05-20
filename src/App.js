import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Suspense, lazy } from "react";
import Loading from "./Components/Loading";
const Navbar = lazy(() => import("./Components/Navbar"))
const SliderSelect = lazy(() => import("./Components/SliderSelect"))
const TenureSelect = lazy(() => import("./Components/TenureSelect"))
const Result = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/Result")), 5000);
  });
})


function App() {
  const defaultValue = 3000;

  const [data, setData] = useState({
    homeValue: defaultValue,
    downPayment: defaultValue * 0.2,
    loanAmount: defaultValue * 0.8,
    loanTerm: 1,
    interestRate: 6,
    // monthlyPayment: 0,
  });

  // console.log(data)

  return (
    <div className="App">
      <Suspense fallback={
        <Loading />
      }>

        <Navbar />
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData} />
              <TenureSelect data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Result data={data} />
            </Grid>
          </Grid>
        </Container>

      </Suspense>
    </div>
  );
}

export default App;