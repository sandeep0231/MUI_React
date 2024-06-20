import './App.css';
import { Box, Button, ButtonGroup, Checkbox, Container, Grid, MenuItem, Radio, Select, Slide, Slider, Switch, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import ErrorBoundary from './ErrorBoundary.jsx';
import User1 from './Components/User1.jsx';
import User2 from './Components/USer2.jsx';
import User3 from './Components/USer3.jsx';
function App() {
  const [ar, setAr] = useState([]);
  const [gen, SetGen] = useState("male");
  const [val, setVal] = useState([40, 100]);
  const [Course, setCourse] = useState("");
  const mark = [
    {
      value: 0,
      lable: "start"
    },
    {
      value: 100,
      lable: "middle"

    },
    {
      value: 200,
      lable: "end"

    },
  ]
  const getValue = (e) => {
    let data = ar;
    data.push(e.target.value);
    console.log(data);
    throw new Error("ERROR HAPPEN");
  }

  const getCheck = (e) => {
    SetGen(e.target.value);

  }
  const updateVal = (e, itm) => {
    setVal(itm);
  }

  const updateSelect = (e, itm) => {
    setCourse(e.target.value);
  }
  const TxtFun = (e, itm) => {
    console.log(e.target.value);
  }

  const SwitchFun = (e, val) => {
    console.log(val);
  }
  return (
    <>
       <hr />
       <h5>HOC COMPONENTS</h5>
       <hr />
      <User1></User1>
      <User2></User2>
       <User3></User3>
       <hr />
       <hr />
      <h3>Reract - MUI</h3>

      <h6>1. Simple button</h6>
      <button>click</button> &nbsp;
      &nbsp;&nbsp;<Button variant="contained" size='small' color="error" startIcon={<DeleteIcon />} >Click MUI</Button>
      &nbsp;&nbsp;<Button variant="outlined" size='small' color="primary" endIcon={<SendIcon />} >Click MUI</Button>
      <br />
      <hr />
      {/* button group  */}
      <h6>2. Grouping of button</h6>
      <ButtonGroup color='secondary' variant='contained' orientation='vertical'>
        <Button>First</Button>
        <Button>Secound</Button>
        <Button>Third</Button>
      </ButtonGroup>
      {/* button group  */}
      <hr />
      {/* MUI Checkbox */}
      <h6>3. MUI Checkbox</h6>
      <ErrorBoundary>
      <Checkbox color='primary' value="checkbox value1" onChange={(e) => { getValue(e); }} />
      </ErrorBoundary>

      <Checkbox color='default' value="checkbox value2" onChange={(e) => { getValue(e); }} />
      <Checkbox color='success' value="checkbox value3" onChange={(e) => { getValue(e); }} />
      <Checkbox color='secondary' indeterminate value="indeterminate" onChange={(e) => { getValue(e); }} />
      <Checkbox color='error' value="Favorite" onChange={(e) => { getValue(e); }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox color='error' oncke value="Favorite" onChange={(e) => { getValue(e); }} icon={<FavoriteBorder />} checkedIcon={<FavoriteBorder />} />
      {/* MUI Checkbox */}
      <hr />
      {/* Radio button */}
      <h6>4. MUI Radio</h6>
      <Radio color='primary' value="male" onChange={(e) => { getCheck(e); }} checked={gen === "male"} /><span>Male</span>
      <Radio color='secondary' value="female" onChange={(e) => { getCheck(e); }} checked={gen === "female"} /><span>Female</span>
      {/* Radio button */}
      <hr />

      {/* Slider in MUI */}
      <h6>5. MUI Slider</h6>
      <div style={{ width: 300, marginLeft: "40px" }}>
        <Slider color='success'
          defaultValue={100}
          size="small"
          step={5}
          max={200}
          marks={mark}
          valueLabelDisplay='auto'
        />
      </div>
      {/* Slider in MUI */}
      <hr />
      {/* Range Slider in MUI */}
      <h6>6. MUI  Range Slider</h6>
      <div style={{ width: 300, margin: 30 }}>
        <Slider
          color='secondary'
          size="small"
          value={val}
          max={200}
          valueLabelDisplay='auto'
          onChange={updateVal}
        />
      </div>
      {/* Range Slider in MUI */}
      <hr />
      {/* SElect box or select */}
      <h6>7. MUI  Select box or select </h6>
      <div style={{ width: 300, marginLeft: 90 }}>
        <Select value={Course}
          onChange={updateSelect}
          displayEmpty>
          <MenuItem value="">--Select--</MenuItem>
          <MenuItem value="JavaScript">JavaScript</MenuItem>
          <MenuItem value="NodeJs">NodeJs</MenuItem>
          <MenuItem value="ReactJs">ReactJs</MenuItem>
          <MenuItem value="ExpressJs">ExpressJs</MenuItem>
          <MenuItem value="NextJs">NextJs</MenuItem>
          <MenuItem value="NestJs">NestJs</MenuItem>
          <MenuItem value="AnguralJs">AnguralJs</MenuItem>
          <MenuItem value="VueJs">VueJs</MenuItem>
          <MenuItem value="TypeScript">TypeScript</MenuItem>
        </Select>
      </div>
      {/* SElect box or select */}
      <hr />

      {/* TextField MUI */}
      <h6>8. MUI  TextField </h6>
      <div style={{ width: 300, marginLeft: 90 }}>
        <TextField color='secondary'
          label="Enter name..."
          variant='standard'
          onChange={TxtFun}
        // type='password'
        />
      </div>

      {/* TextField MUI */}
      <hr />

      {/* Switch MUI */}
      <h6>9. MUI Switch  </h6>
      <div style={{ width: 300, marginLeft: 90 }}>

        <Switch
          color='success'
          size='small'
          onChange={SwitchFun}
        />
      </div>
      {/* Switch MUI */}
      <hr />

      {/* Layout box MUI */}
      <h6>9. MUI Layout Box  </h6>
      <div style={{ width: 300, marginLeft: 90 }}>
        <Box component="span" style={{ color: "red" }} clone="true" m={20}>
          <Button>MU</Button>
        </Box>

      </div>
      {/* Layout box MUI */}
      <hr />

      {/* Container Layout   MUI */}
      <h6>10. Container Layout   MUI  </h6>
      <Container maxWidth="xs" style={{ backgroundColor: "green", color: "white" }}>
        <h1>Container Layout   MUI 1</h1>
      </Container>
      <Container maxWidth="sm" style={{ backgroundColor: "skyblue", color: "white" }}>
        <h1>Container Layout   MUI 1</h1>
      </Container>
      <Container maxWidth="md" style={{ backgroundColor: "gray", color: "white" }}>
        <h1>Container Layout   MUI 1</h1>
      </Container>
      <Container maxWidth="lg" style={{ backgroundColor: "orange", color: "white" }}>
        <h1>Container Layout   MUI 1</h1>
      </Container>

      <Container fixed style={{ backgroundColor: "lightgreen", color: "white" }}>
        <h1>Container Layout   MUI 1</h1>
      </Container>
      {/* Container Layout   MUI*/}

      <hr />
      {/* Grid For responsive Layout MUI  */}
      <h6>11. Grid For responsive Layout MUI  </h6>
      <Grid item lg={12} container spacing={2}>
        <Grid item lg={3} sm={6} xs={12}><h2 style={{ backgroundColor: "green", color: "white" }}>Block A</h2></Grid>
        <Grid item lg={3} sm={6} xs={12}><h2 style={{ backgroundColor: "green", color: "white" }}>Block B</h2></Grid>
        <Grid item lg={3}  sm={6} xs={12}><h2 style={{ backgroundColor: "green", color: "white" }}>Block C</h2></Grid>
        <Grid item lg={3} sm={6} xs={12}><h2 style={{ backgroundColor: "green", color: "white" }}>Block D</h2></Grid>
      </Grid>
      {/* Grid For responsive Layout MUI  */}
      <hr />
      {/* Hidden in MUI */}
      <h6>12. Hidden in MUI  </h6>
       
      {/* Hidden in MUI */}
      <hr />
    
    </>
  );
}

export default App;
