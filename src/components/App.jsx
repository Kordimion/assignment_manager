import { Grid } from "@material-ui/core";
import Assignments from "./Assignments";
import Navbar from "./Navbar";

function App() {
  
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Assignments />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
