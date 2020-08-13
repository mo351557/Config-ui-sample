import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// import Divider from '@material-ui/core/Divider';

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
import { addEdiRegistrationNext } from '../../../actions/userAction';

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

class AddEdiRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            CarrierShortName: '',
            carrierShortNameError: false,
            carrierShortNameErrorText: '',
            CarrierInitials : '',
            carrierInitialsError : false,
            carrierInitialsErrorText : '',
            TradingPartnerId : '',
            tradingPartnerIdError : false,
            tradingPartnerIdErrorText : '',
            HiosId : '',
            hiosIdError : false,
            hiosIdErrorText : '',
            Qhp : '',
            qhpError : false,
            qhpErrorText : '',
            TaxId : '',
            taxIdError : false,
            taxIdErrorText : '',
            PayeeId : '',
            payeeIdError : false,
            payeeIdErrorText : ''

        };

    }

    handleChange = event => {
        console.log("event", event.target.name, event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
            var validationStatus = true;
                //validation for CarrierShortName
                if (this.state.CarrierShortName === '' || this.state.CarrierShortName === undefined) {
                    this.setState({
                        carrierShortNameError: true,
                        carrierShortNameErrorText: 'Please fill the required fields'
                    })
                    validationStatus = false
                }
                else if (this.state.CarrierShortName.length > 2) {
                    this.setState({
                        carrierShortNameError: true,
                        carrierShortNameErrorText: 'Max 2 letters are allowed'
                    })
                    validationStatus = false                    
                }
                else {
                    this.setState({
                        carrierShortNameError: false,
                        carrierShortNameErrorText: ''
                    })
                }
                 //validation for CarrierInitials
                 if (this.state.CarrierInitials === '' || this.state.CarrierInitials === undefined) {
                    this.setState({
                        carrierInitialsError: true,
                        carrierInitialsErrorText: 'Please fill the required fields'
                    })
                    validationStatus = false
                }
                else if (this.state.CarrierInitials.length > 3) {
                    this.setState({
                        carrierInitialsError: true,
                        carrierInitialsErrorText: 'Max 3 letters are allowed'
                    })
                    validationStatus = false
                }
                else {
                    this.setState({
                        carrierInitialsError: false,
                        carrierInitialsErrorText: ''
                    })
                }

                 //validation for HiosId
                 if (this.state.HiosId === '' || this.state.HiosId === undefined) {
                    this.setState({
                        hiosIdError: true,
                        hiosIdErrorText: 'Please fill the required fields'
                    })
                    validationStatus = false
                }
                else if (this.state.HiosId.length > 50) {
                    this.setState({
                        hiosIdError: true,
                        hiosIdErrorText: 'Max 50 letters are allowed'
                    })
                    validationStatus = false
                }
                else {
                    this.setState({
                        hiosIdError: false,
                        hiosIdErrorText: ''
                    })
                }

                //validation for TradingPartnerId
                if (this.state.TradingPartnerId === '' || this.state.TradingPartnerId === undefined) {
                    this.setState({
                        tradingPartnerIdError: true,
                        tradingPartnerIdErrorText: 'Please fill the required fields'
                    })
                    validationStatus = false
                }
                else if (this.state.TradingPartnerId.length > 5) {
                    this.setState({
                        tradingPartnerIdError: true,
                        tradingPartnerIdErrorText: 'Max 5 letters are allowed'
                    })
                    validationStatus = false
                }
                else {
                    this.setState({
                        tradingPartnerIdError: false,
                        tradingPartnerIdErrorText: ''
                    })
                }

                //validation for Qhp
                if (this.state.Qhp === '' || this.state.Qhp === undefined) {
                    this.setState({
                        qhpError: true,
                        qhpErrorText: 'Please fill the required fields'
                    })
                    validationStatus = false
                }
                else if (this.state.Qhp.length > 10) {
                    this.setState({
                        qhpError: true,
                        qhpErrorText: 'Max 10 letters are allowed'
                    })
                    validationStatus = false
                }
                else {
                    this.setState({
                        qhpError: false,
                        qhpErrorText: ''
                    })
                }

                //validation for TaxId
                if (this.state.TaxId === '' || this.state.TaxId === undefined) {
                    this.setState({
                        taxIdError: true,
                        taxIdErrorText: 'Please fill the required fields'
                    })
                    validationStatus = false
                }
                else if (this.state.TaxId.length > 15) {
                    this.setState({
                        taxIdError: true,
                        taxIdErrorText: 'Max 15 letters are allowed'
                    })
                    validationStatus = false
                }
                else {
                    this.setState({
                        taxIdError: false,
                        taxIdErrorText: ''
                    })
                }

                //validation for PayeeId
                if (this.state.PayeeId === '' || this.state.PayeeId === undefined) {
                    this.setState({
                        payeeIdError: true,
                        payeeIdErrorText: 'Please fill the required fields'
                    })
                    validationStatus = false
                }
                else if (this.state.PayeeId.length > 8) {
                    this.setState({
                        payeeIdError: true,
                        payeeIdErrorText: 'Max 8 letters are allowed'
                    })
                    validationStatus = false
                }
                else {
                    this.setState({
                        payeeIdError: false,
                        payeeIdErrorText: ''
                    })
                }

                if(validationStatus){
                    console.log("this.state.validationStatus",validationStatus);
                    var obj = { 
                        
                    }
                    this.props.addEdiRegistrationNext(obj)
                    this.props.history.push(`/rtl/ediregistration`);
                    
                }
                else{
                    console.error("validationStatus",validationStatus);
                    
                    // alert("falied")
        
                }
            }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Add EDI Registraion Information</h4>
                                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Carrier Short Name *"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'CarrierShortName',
                                                id: 'CarrierShortName',
                                                value: this.state.CarrierShortName
                                            }}
                                            error={this.state.carrierShortNameError} errorText={this.state.carrierShortNameErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Carrier Initials *"
                                            id="code-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'CarrierInitials',
                                                id: 'CarrierInitials',
                                                value: this.state.CarrierInitials
                                            }}
                                            error={this.state.carrierInitialsError} errorText={this.state.carrierInitialsErrorText}
                                        />
                                    </GridItem>

                                </GridContainer>

                                <GridContainer style={{ paddingTop: "40px" }}>

                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA", fontWeight: "500" }}>EDI Registration *</InputLabel>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Trading Partner ID*"
                                            id="code-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'TradingPartnerId',
                                                id: 'TradingPartnerId',
                                                value: this.state.TradingPartnerId
                                            }}
                                            error={this.state.tradingPartnerIdError} errorText={this.state.tradingPartnerIdErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="HIOS ID *"
                                            id="address2"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'HiosId',
                                                id: 'HiosId',
                                                value: this.state.HiosId
                                            }}
                                            error={this.state.hiosIdError} errorText={this.state.hiosIdErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="QHP Lookup *"
                                            id="city"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'Qhp',
                                                id: 'Qhp',
                                                value: this.state.Qhp
                                            }}
                                            error={this.state.qhpError} errorText={this.state.qhpErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Tax ID *"
                                            id="city"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'TaxId',
                                                id: 'TaxId',
                                                value: this.state.TaxId
                                            }}
                                            error={this.state.taxIdError} errorText={this.state.taxIdErrorText}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Payee ID *"
                                            id="ZipCode"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'PayeeId',
                                                id: 'PayeeId',
                                                value: this.state.PayeeId
                                            }}
                                            error={this.state.payeeIdError} errorText={this.state.payeeIdErrorText}

                                        />
                                    </GridItem>

                                </GridContainer>

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
       
        addEdiRegistrationNext: (obj) => {
          dispatch(addEdiRegistrationNext(obj));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddEdiRegistration));

