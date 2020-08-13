import React, { Component } from 'react';
import logo from '../assets/Logo_horizontal_web.png';
import './LoginPage.css';
// import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';
// import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomLoginInput from "components/CustomInput/CustomLoginInput.jsx";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import classNames from 'classnames';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { withStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';

class LoginPage extends Component {

  state = {
    username:'',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    error: false
  };

  handleChange = prop => event => {
    console.log("prop",prop,event.target.value)
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  // handleChangePass = prop => event => {
  //   console.log("password",event.target.value)
  //   this.setState({ [prop]: event.target.value })
  // };
  handleChangeCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleClick = () => {
    console.log("clcik");
    if(this.state.username === "hps" && this.state.password === "hps"){
      // alert("logged in");
     this.props.history.push(`/admin`);
    }
    else{
      this.setState({error: true})
      console.error("Login failed");
    }
  }

  render() {
    // const { classes } = this.props;

    return (
      <div className="App">
        <div name="logo" >
          <img className="App-logo imgBgDesign" src={logo} alt="logo" />
        </div>

        <div>
          <h1 className="App-header">Configurator</h1>
        </div>

        <div name="firstDiv" className="App-userName userField">
          {/* <TextField
            id="standard-name"
            label="Username"
            value=""
            margin="normal"
            fullWidth
          /> */}
      {this.state.error?<span style={{color:"red"}}>Invalid Credentials. Please Check</span>:null}
          <CustomLoginInput
            labelText="Username"
            id="username"
            formControlProps={{
              fullWidth: true,
            }}
            onChange={this.handleChange("username")}
          />

          {/* <div >
            <Grid container={true}  alignItems="flex-end" className="userIcon" name="AccCir">
              <Grid item >
                <AccountCircle />
              </Grid>
              <Grid item name="textName" className="userText">
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div> */}

        </div>
        <div name="secDiv" className="App-password userField">
          {/* <TextField
            id="standard-name"
            label="What's your password?" 
            value=""
            margin="normal"
          /> */}

          {/* password with eye */}


          {/* <FormControl >
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> */}

          <CustomLoginInput
            labelText="Password"
            id="password"
            type="password"
            formControlProps={{
              fullWidth: true
            }}
            onChange={this.handleChange('password')}
          />
          {/* <InputAdornment position="end" name="eye">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment> */}


          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeCheck('checkedB')}
                  value="checkedB"
                  color="secondary"
                />
              }
              label="Remember Me"
            />
          </FormGroup>

        </div>

        <div name="loginBtn" className="loginBtnDiv">
          <Button variant="contained" color="primary" className="loginBtn" onClick={this.handleClick}>
            Login
      </Button>
        </div>


        <div name="footer" className="App-footer">
        <span>&copy;</span>
        <span className="ftrSpn2">2019 HealthPlan Services. All Rights Reserved</span>
        </div>
      </div>
    );
  }
}

export default LoginPage;
