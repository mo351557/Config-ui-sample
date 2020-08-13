import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Divider from '@material-ui/core/Divider';
// import Btn from '@material-ui/core/Button';

// import avatar from "assets/img/faces/marc.jpg";


//Redux
import { connect } from 'react-redux';
import { carrierNext, businessDetailsNext } from '../../actions/userAction';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class BusinessDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        indvButton : false,
        exchButton : false,
        offExchButton: false,
        groupButton: false,
        carrierCode : '',
        grpCarrierCode : '',
        indvError : false,
        indvErrorText : '',
        grpError: false,
        grpErrorText : ''

      };
  
    }

    handleClick = () => {
       this.setState({
        indvButton : !this.state.indvButton
      })
     
    }

    handleClickExc = () => {
      this.setState({
        exchButton : !this.state.exchButton
      })
    }

    handleClickOffExc= () => {
      this.setState({
        offExchButton : !this.state.offExchButton
      })
    }

    handleClickGroup= () => {
      if(this.state.groupButton === false){
        this.setState({
          exchButton : false,
          offExchButton : true
        })
      }
      this.setState({
        groupButton : !this.state.groupButton,
      })
      
    }

    handleCarrierCode = (e) => {
      console.log("handleCarrierCode",e.target.value);
      this.setState({
        carrierCode : e.target.value
      })
    }

    handleGrpCarrierCode = (e) => {
      this.setState({
        grpCarrierCode : e.target.value
      })
    }

    handleSubmit = () => {
      // const res = props.carrierNext(name);
      var status;
      //validation
      if(this.state.carrierCode.length > 2){
        this.setState({
          indvError : true,
          indvErrorText : 'Carrier Codes for Individual should not be greater than 2'      
        })
      }
      else if(this.state.grpCarrierCode.length > 2){
        this.setState({
          grpError : true,
          grpErrorText : 'Carrier Codes for Group should not be greater than 2'      
        })
      }

     else if(this.state.carrierCode === this.state.grpCarrierCode){
        this.setState({
          indvError : true,
          grpError : true,
          indvErrorText : 'Carrier Codes for Individual and Group cannot be the same value',      
          grpErrorText : 'Carrier Codes for Individual and Group cannot be the same value'      
          
        })
      }
      else{
        status = 'success'
      }
 
      // console.log("state",res)
  
      //page routing
      if(status === 'success'){
        var obj = { indvButton: this.state.indvButton, exchButton: this.state.exchButton,
          offExchButton: this.state.offExchButton, groupButton: this.state.groupButton, 
          carrierCode: this.state.carrierCode, grpCarrierCode: this.state.grpCarrierCode
        }
          this.props.businessDetailsNext(obj)
          this.props.history.push(`/rtl/lineofbusiness`);
      }
      else{
          console.error("failed to route");
      }
  }

  render(){
    
  const { classes } = this.props;

 

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Business Details</h4>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
        
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Business Type</InputLabel>
                 
                </GridItem>
                <GridItem xs={12} sm={12} md={12} style={{ marginBottom: "20px"}}>
                  {this.state.indvButton ? <Button color="primary" onClick={this.handleClick}>Individual</Button>
                  :
                  <Button  variantBtn="outlined" onClick={this.handleClick}>Individual</Button>}
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>On or off exchange?</InputLabel>
                </GridItem>
                <GridItem xs={2} sm={2} md={2}>
                  {/* <Button color="primary">On Exchange</Button> */}
                  {this.state.exchButton ? <Button color="primary" onClick={this.handleClickExc}>On Exchange</Button>
                  :
                  <Button  variantBtn="outlined" onClick={this.handleClickExc}>On Exchange</Button>}
                  {/* <Btn  variant="outlined" style={{textTransform:"none"}}>On Exchange</Btn> */}
                </GridItem>
                <GridItem xs={2} sm={2} md={2}>
                  {/* <Button color="primary">Off Exchange</Button> */}

                  {this.state.offExchButton ? <Button color="primary" onClick={this.handleClickOffExc}>Off Exchange</Button>
                  :
                  <Button  variantBtn="outlined" onClick={this.handleClickOffExc}>Off Exchange</Button>}

                  {/* <Btn  variant="outlined" style={{textTransform:"none"}}>Off Exchange</Btn> */}
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={12}>
                <InputLabel style={{ color: "#AAAAAA" }}>Carrier code for individual</InputLabel>
                </GridItem> */}
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput labelText="Carrier code for Individual" id="carrier-code" formControlProps={{}}
                   onChange={this.handleCarrierCode} inputProps={{value:this.state.carrierCode}} error={this.state.indvError} 
                   errorText={this.state.indvErrorText}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  {/* <Button color="primary">Group</Button> */}
                  {this.state.groupButton ? <Button color="primary" onClick={this.handleClickGroup}>Group</Button>
                  :
                  <Button  variantBtn="outlined" onClick={this.handleClickGroup}>Group</Button>}
                  {/* <Btn variant="outlined" style={{textTransform:"none"}}>Group</Btn> */}
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput labelText="Carrier code for Group" id="carrier-code-group" formControlProps={{}}
                   onChange={this.handleGrpCarrierCode} inputProps={{value:this.state.grpCarrierCode}}
                   error={this.state.grpError}  errorText={this.state.grpErrorText}/>
                </GridItem>
              </GridContainer>
            </CardBody>
            <Divider variant="middle" />
            <CardFooter>
              <Button color="primary" onClick={this.handleSubmit}>Next</Button>
            </CardFooter>
          </Card>
        </GridItem>
       
      </GridContainer>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
      user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      carrierNext: (name) => {
          dispatch(carrierNext(name));
      },
      businessDetailsNext: (obj) => {
        dispatch(businessDetailsNext(obj));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BusinessDetails));

