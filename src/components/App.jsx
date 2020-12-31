import { Grid } from "@material-ui/core";
import Assignments from "./Assignments";

function App() {
  
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Assignments />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
