import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
// import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import CheckIcon from '@material-ui/icons/Check';
// import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[500],
    },
  },
  // buttonSuccess: {
  //   backgroundColor: green[500]
  // },
  buttonYellow: {
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[500],
    },    
  },
  buttonWhite: {
    backgroundColor: "#fff",
    '&:hover': {
      backgroundColor:"#fff",
    },   
  },
  buttonOrange: {
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[500],
    }, 
  },
  buttonRed: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[500],
    }, 
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class StatusIndicator extends React.Component {
  state = {
    loading: false,
    success: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (this.state.loading === false) {
      this.setState(
        {
          success: true,
          loading: false,
        }
        // () => {
        //   this.timer = setTimeout(() => {
        //     this.setState({
        //       loading: false,
        //       success: true,
        //     });
        //   }, 2000);
        // },
      );
    }
    if (this.state.loading === true) {
      this.setState(
        {
          success: false,
          loading: true,
        }
      );
    }
  };

  render() {
    // const { loading, success } = this.state;
    const { classes, color } = this.props;
    var buttonClassname;

    if(color === "red"){
       buttonClassname = classNames({
        [classes.buttonRed]: true,
        [classes.buttonYellow]: false,        
      });
    }
    else if(color === "yellow"){
      buttonClassname = classNames({
        [classes.buttonSuccess]: false,        
        [classes.buttonYellow]: true,
      });
    }
    else if(color === "green"){
      buttonClassname = classNames({
        [classes.buttonSuccess]: true,        
        [classes.buttonYellow]: false,
      });
    }
      else if(color === "orange"){
        buttonClassname = classNames({
          [classes.buttonSuccess]: false,        
          [classes.buttonYellow]: false,
          [classes.buttonOrange]: true          
        });
      }
      else{
        buttonClassname = classNames({
          [classes.buttonSuccess]: false,        
          [classes.buttonYellow]: false,
          [classes.buttonOrange]: false,
          [classes.buttonWhite]: true          
        });
      }
     
    // const buttonClassname = classNames({
    //   [classes.buttonSuccess]: success,
    // });

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fab style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}  className={buttonClassname}>
            {/* {success ? <CheckIcon /> : <SaveIcon />} */}
          </Fab>
          {/* {loading && <CircularProgress size={68} className={classes.fabProgress} />} */}
        </div>
        {/* <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={this.handleButtonClick}
          >
            
          </Button>
           {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div> */}
      </div>
    );
  }
}

StatusIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
};

export default withStyles(styles)(StatusIndicator);