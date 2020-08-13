import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// import Btn from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// import avatar from "assets/img/faces/marc.jpg";

//Redux
import { connect } from 'react-redux';
import { lineOfBusinessNext } from '../../actions/userAction';

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

class LineOfBusiness extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indvOnButton: false,
      indvOffButton: false,
      indvGrpButton: false,
      states: [
        { name: "AL", active: false }, { name: "AK", active: false }, { name: "AZ", active: false }, { name: "AR", active: false }, { name: "CA", active: false },
        { name: "CO", active: false }, { name: "CT", active: false }, { name: "DE", active: false }, { name: "FL", active: false }, { name: "GA", active: false },
        { name: "HI", active: false }, { name: "ID", active: false }, { name: "IL", active: false }, { name: "IN", active: false }, { name: "IA", active: false },
        { name: "KS", active: false }, { name: "KY", active: false }, { name: "LA", active: false }, { name: "ME", active: false }, { name: "MD", active: false },
        { name: "MA", active: false }, { name: "MI", active: false }, { name: "MN", active: false }, { name: "MS", active: false }, { name: "MO", active: false },
        { name: "MT", active: false }, { name: "NE", active: false }, { name: "NV", active: false }, { name: "NH", active: false }, { name: "NJ", active: false },
        { name: "NM", active: false }, { name: "NY", active: false }, { name: "NC", active: false }, { name: "ND", active: false }, { name: "OH", active: false },
        { name: "OK", active: false }, { name: "OR", active: false }, { name: "PA", active: false }, { name: "RI", active: false }, { name: "SC", active: false },
        { name: "SD", active: false }, { name: "TN", active: false }, { name: "TX", active: false }, { name: "UT", active: false }, { name: "VT", active: false },
        { name: "VA", active: false }, { name: "WA", active: false }, { name: "WV", active: false }, { name: "WI", active: false }, { name: "WY", active: false }
      ],

      LineOfBussiness: [{ name: "Health", active: false }, { name: "Dental", active: false }, { name: "Ped Dental", active: false }, { name: "Vision", active: false }, { name: "Short Term Life", active: false }, { name: "AD & O", active: false }],
      productSelected: '',
      productOptions : [{ name: "A,B,C", value: 1 }, { name: "D,F,G", value: 2 }, { name: "1,2,3", value: 3 }, { name: "4,5,6", value: 4 }]
    };

  }

  handleClickBTIndvOn = () => {
    this.setState({
      indvOnButton: !this.state.indvOnButton
    })
  }

  handleClickBTIndvOff = () => {
    this.setState({
      indvOffButton: !this.state.indvOffButton
    })
  }

  handleClickBTGrp = () => {
    if (this.state.indvGrpButton === false) {
      this.setState({
        indvOnButton: false,
        indvOffButton: true
      })
    }
    this.setState({
      indvGrpButton: !this.state.indvGrpButton
    })
  }

  handleClickLnB = (index) => {
    console.log("clicked", index);
    const items = this.state.LineOfBussiness;
    items[index].active = !items[index].active;
    this.setState({
      LineOfBussiness: items
    })
  }

  handleClickStates = (index) => {
    console.log("clicked", index);
    const items = this.state.states;
    items[index].active = !items[index].active;
    this.setState({
      states: items
    })
  }

  handleSelectAll = () => {
    var items = this.state.states;
    for (let i = 0; i < items.length; i++) {
      items[i].active = true;
    }
    this.setState({
      states: items
    })
    console.log(this.state.states)
  }

  handleClearAll = () => {
    const items = this.state.states;
    for (let i = 0; i < items.length; i++) {
      items[i].active = false;
    }
    this.setState({
      states: items
    })
  }

  handleClickprod = (index) => {
    console.log("clicked", index);
    const items = this.state.ProductType;
    items[index].active = !items[index].active;
    this.setState({
      ProductType: items
    })
  }

  handleChange = event => {
    console.log("event", event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
};

  handleSubmit = () => {
    // const res = props.carrierNext(name);
    var status = 'success'
    // console.log("state",res)

    //page routing
    if (status === 'success') {
      var obj = {
        indvOnButton: this.state.indvOnButton, indvOffButton: this.state.indvOffButton,
        indvGrpButton: this.state.indvGrpButton, LineOfBussiness: this.state.LineOfBussiness, states: this.state.states,
        ProductType: this.state.ProductType
      }
      this.props.lineOfBusinessNext(obj)

      this.props.history.push(`/rtl/legalentity`);
    }
    else {
      console.error("failed to route");
    }
  }

  // componentDidMount = () => {
  //   let length = this.props.user.documents.businessDetails.length;
  //   this.setState({
  //     indvOnButton: this.props.user.documents.businessDetails[length - 1].exchButton,
  //     indvOffButton: this.props.user.documents.businessDetails[length - 1].offExchButton,
  //     indvGrpButton: this.props.user.documents.businessDetails[length - 1].groupButton
  //   })
  // }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Line of Business</h4>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <Card profile style={{ height: "800px" }}>
              <CardHeader color="primary" style={{ height: "0px" }}>
                <h4 className={classes.cardTitleWhite} style={{ marginTop: "-12px", fontSize: "initial" }}>Business Type</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
              <CardBody profile>
                <div style={{ marginBottom: "45%", marginLeft: "-10px" }}>
                  {this.state.indvOnButton ? <Button color="primary" fullWidth="true" onClick={this.handleClickBTIndvOn}>Individual On Exchange</Button>
                    :
                    <Button variantBtn="outlined" fullWidth="true" onClick={this.handleClickBTIndvOn}>Individual On Exchange</Button>}

                </div>
                {/* <Btn variant="outlined" style={{ marginBottom: "45%", textTransform: "none" }}>Individual on Exchange</Btn> */}
                {/* <Button fullWidth="true" color="primary"  style={{marginBottom: "45%"}}>Individual off Exchange</Button> */}
                <div style={{ marginBottom: "45%", marginLeft: "-10px" }}>
                  {this.state.indvOffButton ? <Button color="primary" fullWidth="true" onClick={this.handleClickBTIndvOff}>Individual Off Exchange</Button>
                    :
                    <Button variantBtn="outlined" fullWidth="true" onClick={this.handleClickBTIndvOff}>Individual Off Exchange</Button>}
                </div>
                {/* <Btn variant="outlined" style={{ marginBottom: "45%", textTransform: "none" }}>Individual off Exchange</Btn> */}
                {/* <Button fullWidth="true" color="primary">Group</Button> */}
                <div style={{ marginBottom: "45%", marginLeft: "-10px" }}>
                {this.state.indvGrpButton ? <Button color="primary" fullWidth="true" onClick={this.handleClickBTGrp}>Group </Button>
                  :
                  <Button variantBtn="outlined" fullWidth="true" onClick={this.handleClickBTGrp}>Group</Button>}
                {/* <Btn fullWidth={true} variant="outlined" style={{ textTransform: "none" }}>Group</Btn> */}
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <Card profile style={{ height: "800px" }}>
              <CardHeader color="primary" style={{ height: "0px" }}>
                <h4 className={classes.cardTitleWhite} style={{ marginTop: "-12px", fontSize: "initial" }}>Line of Business</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
              <CardBody profile>
                {this.state.LineOfBussiness.map((element, key) =>
                  <div style={{ marginBottom: "25px" }}>
                    {element.active ? <Button key={key} color="primary" fullWidth={true} onClick={() => this.handleClickLnB(key)}>{element.name}</Button>
                      :
                      <Button key={key} variantBtn="outlined" fullWidth={true} onClick={() => this.handleClickLnB(key)}>{element.name}</Button>}
                    {/* <Btn key={key} fullWidth={true} variant="outlined" style={{ textTransform: "none", marginBottom: "25px" }}>{element.name}</Btn> */}
                  </div>
                )}
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={4} sm={4} md={4}>
            <Card profile style={{ height: "800px" }}>
              <CardHeader color="primary" style={{ height: "0px" }}>
                <h4 className={classes.cardTitleWhite} style={{ marginTop: "-12px", fontSize: "initial" }}>States</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
              <CardBody profile>
                <GridContainer>
                  {this.state.states.map((element, key) =>
                    <GridItem xs={3} sm={3} md={3} key={key}>
                      {element.active ? <Button key={key} color="primary" fullWidth={true} onClick={() => this.handleClickStates(key)}>{element.name}</Button>
                        :
                        <Button key={key} variantBtn="outlined" fullWidth={true} onClick={() => this.handleClickStates(key)}>{element.name}</Button>}

                      {/* <Btn key={key} fullWidth={true} variant="outlined" style={{ textTransform: "none" }}>{element}</Btn> */}
                    </GridItem>
                  )}
                  <div style={{ marginLeft: "70px", marginTop: "25px" }}>
                    <Button color="warning" round={true} onClick={this.handleSelectAll}>Select All</Button>
                    <Button color="danger" round={true} onClick={this.handleClearAll}>Clear All</Button>
                  </div>

                </GridContainer>

              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={2} sm={2} md={2}>
            <Card profile style={{ height: "800px" }}>
              <CardHeader color="primary" style={{ height: "0px" }}>
                <h4 className={classes.cardTitleWhite} style={{ marginTop: "-12px", fontSize: "initial" }}>Product Type</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
              <CardBody profile>
                {/* {this.state.ProductType.map((element, key) =>
                  <div>
                    {element.active ? <Button key={key} color="primary" fullWidth={true} onClick={() => this.handleClickprod(key)}>{element.name}</Button>
                      :
                      <Button key={key} variantBtn="outlined" fullWidth={true} onClick={() => this.handleClickprod(key)}>{element.name}</Button>}
                  </div>
                )} */}

                <div style={{ marginTop: "20px  " }}>
                  <InputLabel>Select a Product</InputLabel>

                  <Select
                    value={this.state.productSelected}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'productSelected',
                      id: 'productSelected',
                    }}
                    style={{ width: "100%" }}
                  >
                    {this.state.productOptions.map((element, key) => <MenuItem key={key} value={element.value}>{element.name}</MenuItem>)}

                  </Select>
                  {this.state.stateError ? <span style={{ color: "red" }}>Please select any State</span> : null}
                  {/* need to add validation */}
                </div>

              </CardBody>
            </Card>
          </GridItem>
          <CardFooter>
            <Button color="primary" onClick={this.handleSubmit}>Next</Button>
          </CardFooter>
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
    lineOfBusinessNext: (obj) => {
      dispatch(lineOfBusinessNext(obj));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LineOfBusiness));

