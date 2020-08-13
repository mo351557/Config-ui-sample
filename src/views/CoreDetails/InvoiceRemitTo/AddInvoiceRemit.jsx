import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
// import Dropdown from 'components/Select/Select.jsx'

// import avatar from "assets/img/faces/marc.jpg";

//Redux
import { connect } from 'react-redux';
import { addInvoiceRemitNext } from '../../../actions/userAction';

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

class AddInvoiceRemit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateOptions: [
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
            stateSelected: ''
        };
    }

    handleChange = event => {
        console.log("event", event.target.name, event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        var obj = { 

        }
        this.props.addInvoiceRemitNext(obj)
        this.props.history.push(`/rtl/invoiceremitto`);
    }
    
    // function AddInvoiceRemit(props) {
    render() {
        const { classes } = this.props;
        // var options = [{ name: "one", value: 1 }, { name: "two", value: 2 }, { name: "three", value: 3 }]

        // function handleChange(e) {
        //     this.setState({ stateSelected: e.target.value })
        //     console.log("clicked", this.state.stateSelected);
        // }
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Add Invoice Remit To Address</h4>
                                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Owning Carrier Code *"
                                            id="legal-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Bill Logo Code *"
                                            id="code-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>

                                </GridContainer>
                                <GridContainer style={{ paddingTop: "40px" }}>

                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA", fontWeight: "500" }}>Remit Name *</InputLabel>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Carrier Name*"
                                            id="code-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>

                                </GridContainer>
                                <GridContainer style={{ paddingTop: "40px" }}>

                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA", fontWeight: "500" }}>Address</InputLabel>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Address Line 1 *"
                                            id="address1"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Address Line 2"
                                            id="address2"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="City *"
                                            id="city"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6} style={{ marginTop: "42px" }}>
                                        {/* <Dropdown label="State" name="state" value={this.state.stateSelected} options={options} handleChange={handleChange} style={{width:"100%"}}/> */}
                                        <div style={{ marginTop: "-23px" }}>
                                            <InputLabel>Select State</InputLabel>

                                            <Select
                                                value={this.state.stateSelected}
                                                onChange={this.handleChange}
                                                inputProps={{
                                                    name: 'stateSelected',
                                                    id: 'state-selected',
                                                }}
                                                style={{ width: "100%" }}
                                            >
                                                {this.state.stateOptions.map((element, key) => <MenuItem key={key} value={element.name}>{element.name}</MenuItem>)}

                                            </Select>
                                            {/* need to add validation */}
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Zip Code *"
                                            id="ZipCode"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Enter a Phone number *"
                                            id="phoneNo"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Enter a email address *"
                                            id="emailId"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <Button fullWidth={true} color="primary">Add Address</Button>

                            </CardBody>
                            <CardFooter>
                                <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
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
       
        addInvoiceRemitNext: (obj) => {
          dispatch(addInvoiceRemitNext(obj));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddInvoiceRemit));

