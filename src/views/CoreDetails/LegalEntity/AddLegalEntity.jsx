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
import { addLegalEntityNext } from '../../../actions/userAction';



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

class AddLegalEntity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{ name: "BILLING/ENROLLMENT", value: 1 }, { name: "COMMISSIONS", value: 2 }, { name: "RETENTION", value: 3 },
            { name: "SALES", value: 4 }, { name: "UNDERWRITING", value: 5 }, { name: "LIFE CLAIMS", value: 6 }, { name: "NON-LIFE CLAIMS", value: 7 },
            { name: "FIL ADDRESS ", value: 11 }, { name: "CDS", value: 10 }, { name: "APPEALS", value: 9 }, { name: "REBATE READY", value: 8 },
            { name: "CUSTOMER SERVICE", value: 12 }, { name: "CLIENT SERVICES", value: 13 }, { name: "NEW CASE IMPLEMENTATION", value: 15 },
            { name: "PLEASE MAIL ALL PAYMENTS TO:", value: 18 }, { name: "LICENSING", value: 17 }, { name: "CLAIMS", value: 16 }
            ],
            // stateOptions: [
            //     "AL", "AK", "AZ", "AR", "CA",
            //     "CO", "CT", "DE", "FL", "GA",
            //     "HI", "ID", "IL", "IN", "IA",
            //     "KS", "KY", "LA", "ME", "MD",
            //     "MA", "MI", "MN", "MS", "MO",
            //     "MT", "NE", "NV", "NH", "NJ",
            //     "NM", "NY", "NC", "ND", "OH",
            //     "OK", "OR", "PA", "RI", "SC",
            //     "SD", "TN", "TX", "UT", "VT",
            //     "VA", "WA", "WV", "WI", "WY"
            // ],

            stateOptions : [
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
            carrierAccIndOptions: ['Yes', 'No'],
            // validationStatus : false,
            legalEntity: '',
            name: '',
            LegalEntityName: '',
            legalEntityNameError: false,
            legalEntityNameErrorText: '',
            Address1: '',
            add1Error: false,
            add1ErrorText: '',
            Address2: '',
            City: '',
            cityError: false,
            cityErrorText: '',
            stateSelected: '',
            stateError: false,
            ZipCode: '',
            zipError: false,
            zipErrorText: '',
            PhoneNumber: '',
            phoneNumberError: false,
            phoneNumberErrorText: '',
            Email: '',
            emailError: false,
            emailErrorText: '',
            BankName: '',
            bankNameError: false,
            bankNameErrorText: '',
            AccNo: '',
            accNoError: false,
            accNoErrorText: '',
            BankNoCode: '',
            bankNoCodeError: false,
            bankNoCodeErrorText: '',
            BatchComId: '',
            batchComIdError: false,
            batchComIdErrorText: '',
            BatchComName: '',
            batchComNameError: false,
            batchComNameErrorText: '',
            BatchDes: '',
            batchDesError: false,
            batchDesErrorText: '',
            TypeCode: '',
            typeCodeError: false,
            typeCodeErrorText: '',
            CarrierAccInd: '',
            carrierAccIndError: false


        };

    }

    //  handleChange =() => {
    // LegalEntityName, options, Address1 , Address2, City, stateSelected, ZipCode, PhoneNumber, Email, BankName, AccNo,
    // BankNoCode, BatchComId, BatchComName, BatchDes, TypeCode, CarrierAccInd
    // }

    handleChange = event => {
        console.log("event", event.target.name, event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    // componentDidMount = () => {
    //     this.setState({
    //         validationStatus : true
    //     })
    // }

    handleSubmit = () => {

        // this.setState({
        //     validationStatus : true
        // })
        var validationStatus = true
        //validation for LegalEntityName
        if (this.state.LegalEntityName === '' || this.state.LegalEntityName === undefined) {
            console.log("validationStatus", validationStatus);
            this.setState({
                legalEntityNameError: true,
                legalEntityNameErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.LegalEntityName.length > 50) {
            this.setState({
                legalEntityNameError: true,
                legalEntityNameErrorText: 'Max 50 letters are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                legalEntityNameError: false,
                legalEntityNameErrorText: ''
            })
        }

        //validation for Address1
        if (this.state.Address1 === '' || this.state.Address1 === undefined) {
            this.setState({
                add1Error: true,
                add1ErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.Address1.length > 50) {
            this.setState({
                add1Error: true,
                add1ErrorText: 'Max 50 letters are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                add1Error: false,
                add1ErrorText: ''
            })
        }

        //validation for City
        if (this.state.City === '' || this.state.City === undefined) {
            this.setState({
                cityError: true,
                cityErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.City.length > 30) {
            this.setState({
                cityError: true,
                cityErrorText: 'Max 30 letters are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                cityError: false,
                cityErrorText: ''
            })
        }

        //validation for State
        if (this.state.stateSelected === undefined || this.state.stateSelected === '') {
            this.setState({
                stateError: true,
            })
            validationStatus = false
        }
        else {
            this.setState({
                stateError: false,
            })
        }

        //validation for Zip
        if (this.state.ZipCode === '' || this.state.ZipCode === undefined) {
            this.setState({
                zipError: true,
                zipErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.ZipCode.length > 5) {
            this.setState({
                zipError: true,
                zipErrorText: 'Max 5 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                zipError: false,
                zipErrorText: ''
            })
        }

        //validation for Phone Number
        if (this.state.PhoneNumber === '' || this.state.PhoneNumber === undefined) {
            this.setState({
                phoneNumberError: true,
                phoneNumberErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.PhoneNumber.length > 50) {
            this.setState({
                phoneNumberError: true,
                phoneNumberErrorText: 'Max 50 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                phoneNumberError: false,
                phoneNumberErrorText: ''
            })
        }

        //validation for Email
        if (this.state.Email === '' || this.state.Email === undefined) {
            this.setState({
                emailError: true,
                emailErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.Email.length > 128) {
            this.setState({
                emailError: true,
                emailErrorText: 'Max 50 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                emailError: false,
                emailErrorText: ''
            })
        }

        //validation for BankName
        if (this.state.BankName === '' || this.state.BankName === undefined) {
            this.setState({
                bankNameError: true,
                bankNameErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.BankName.length > 125) {
            this.setState({
                bankNameError: true,
                bankNameErrorText: 'Max 125 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                bankNameError: false,
                bankNameErrorText: ''
            })
        }

        //validation for AccNo
        if (this.state.AccNo === '' || this.state.AccNo === undefined) {
            this.setState({
                accNoError: true,
                accNoErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.AccNo.length > 15) {
            this.setState({
                accNoError: true,
                accNoErrorText: 'Max 15 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                accNoError: false,
                accNoErrorText: ''
            })
        }

        //validation for BankNoCode
        if (this.state.BankNoCode === '' || this.state.BankNoCode === undefined) {
            this.setState({
                bankNoCodeError: true,
                bankNoCodeErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.BankNoCode.length > 5) {
            this.setState({
                bankNoCodeError: true,
                bankNoCodeErrorText: 'Max 5 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                bankNoCodeError: false,
                bankNoCodeErrorText: ''
            })
        }
        //validation for BatchComId
        if (this.state.BatchComId === '' || this.state.BatchComId === undefined) {
            this.setState({
                batchComIdError: true,
                batchComIdErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.BatchComId.length > 10) {
            this.setState({
                batchComIdError: true,
                batchComIdErrorText: 'Max 10 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                batchComIdError: false,
                batchComIdErrorText: ''
            })
        }
        //validation for BatchComName
        if (this.state.BatchComName === '' || this.state.BatchComName === undefined) {
            this.setState({
                batchComNameError: true,
                batchComNameErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.BatchComName.length > 16) {
            this.setState({
                batchComNameError: true,
                batchComNameErrorText: 'Max 16 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                batchComNameError: false,
                batchComNameErrorText: ''
            })
        }
        //validation for batchDes
        if (this.state.BatchDes === '' || this.state.BatchDes === undefined) {
            this.setState({
                batchDesError: true,
                batchDesErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.BatchDes.length > 10) {
            this.setState({
                batchDesError: true,
                batchDesErrorText: 'Max 10 numbers are allowed',
            })
            validationStatus = false
        }
        else {
            this.setState({
                batchDesError: false,
                batchDesErrorText: ''
            })
        }
        //validation for TypeCode
        if (this.state.TypeCode === '' || this.state.TypeCode === undefined) {
            this.setState({
                typeCodeError: true,
                typeCodeErrorText: 'Please fill the required fields',
            })
            validationStatus = false
        }
        else if (this.state.TypeCode.length > 1) {
            this.setState({
                typeCodeError: true,
                typeCodeErrorText: 'Max 1 letter is allowed',
            })
            validationStatus = false
        }
        else if (this.state.TypeCode !== 'E') {
            if (this.state.TypeCode !== 'F') {
                if (this.state.TypeCode !== 'Z') {
                    this.setState({
                        typeCodeError: true,
                        typeCodeErrorText: 'Valid value is either "E" = Credit Card Bank Account or "F" = EFT Bank Account or "Z" = Master',
                    })
                    validationStatus = false
                }
            }

        }
        else {
            this.setState({
                typeCodeError: false,
                typeCodeErrorText: ''
            })
        }

        //validation for CarrierAccInd
        if (this.state.CarrierAccInd === undefined || this.state.CarrierAccInd === '') {
            this.setState({
                carrierAccIndError: true,
            })
            validationStatus = false
        }
        else {
            this.setState({
                carrierAccIndError: false,
            })
        }

        if (validationStatus) {
            console.log("this.state.validationStatus", this.state.validationStatus, this.state.LegalEntityName === '');
            var obj = {
                LegalEntityName: this.state.LegalEntityName, options: this.state.options, Address1: this.state.Address1, Address2: this.state.Address2,
                City: this.state.City, stateSelected: this.state.stateSelected, ZipCode: this.state.ZipCode, PhoneNumber: this.state.PhoneNumber, Email: this.state.Email,
                BankName: this.state.BankName, AccNo: this.state.AccNo, BankNoCode: this.state.BankNoCode, BatchComId: this.state.BatchComId,
                BatchComName: this.state.BatchComName, BatchDes: this.state.BatchDes, TypeCode: this.state.TypeCode, CarrierAccInd: this.state.CarrierAccInd
            }
            this.props.addLegalEntityNext(obj)
            this.props.history.push(`/rtl/legalentity`);

        }
        else {
            console.error("validationStatus", validationStatus);

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
                                <h4 className={classes.cardTitleWhite}>Add Legal Entity</h4>
                                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>


                                        {/* <Select
                                            value={this.state.age}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-simple',
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>  */}


                                        <CustomInput
                                            labelText="Name of Legal Entity *"
                                            id="legal-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'LegalEntityName',
                                                id: 'LegalEntityName',
                                                value: this.state.LegalEntityName
                                            }}
                                            error={this.state.legalEntityNameError} errorText={this.state.legalEntityNameErrorText}
                                        />

                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Code of Legal Entity"
                                            id="code-name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer style={{ paddingTop: "40px" }}>
                                    {/* <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText=" "
                    id=""
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem> */}
                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA", fontWeight: "500" }}>Address</InputLabel>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        {/* <Dropdown label="Legal Entities" name="legalEntities" value="something" options={this.state.options}
                                            handleChange={this.handleChange} style={{ width: "100%" }} /> */}
                                        <div style={{ marginTop: "20px  " }}>
                                            <InputLabel>Select Address Type</InputLabel>

                                            <Select
                                                value={this.state.legalEntity}
                                                onChange={this.handleChange}
                                                inputProps={{
                                                    name: 'legalEntity',
                                                    id: 'legal-entity',
                                                }}
                                                style={{ width: "100%" }}
                                            >
                                                {this.state.options.map((element, key) => <MenuItem key={key} value={element.value}>{element.name}</MenuItem>)}

                                            </Select>
                                        </div>

                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput labelText="Address Line 1 *" formControlProps={{ fullWidth: true }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'Address1',
                                                id: 'Address-1',
                                                value: this.state.Address1
                                            }}
                                            error={this.state.add1Error} errorText={this.state.add1ErrorText} />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Address Line 2"
                                            id="address2"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'Address2',
                                                id: 'Address-2',
                                                value: this.state.Address2
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
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'City',
                                                id: 'city',
                                                value: this.state.City
                                            }}
                                            error={this.state.cityError} errorText={this.state.cityErrorText}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>

                                        <div style={{ marginTop: "20px  " }}>
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
                                            {this.state.stateError ? <span style={{ color: "red" }}>Please select any State</span> : null}
                                            {/* need to add validation */}
                                        </div>

                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Zip Code *"
                                            id="ZipCode"
                                            onChange={this.handleChange}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: 'ZipCode',
                                                id: 'ZipCode',
                                                value: this.state.ZipCode
                                            }}
                                            error={this.state.zipError} errorText={this.state.zipErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Enter a Phone number *"
                                            id="phoneNo"
                                            onChange={this.handleChange}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: 'PhoneNumber',
                                                id: 'PhoneNumber',
                                                value: this.state.PhoneNumber
                                            }}
                                            error={this.state.phoneNumberError} errorText={this.state.phoneNumberErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Enter a email address *"
                                            id="emailId"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'Email',
                                                id: 'email',
                                                value: this.state.Email
                                            }}
                                            error={this.state.emailError} errorText={this.state.emailErrorText}
                                        />
                                    </GridItem>
                                </GridContainer>
                                {/* <Button fullWidth={true} color="primary">Add Address</Button> */}

                                {/* Bank details */}

                                <GridContainer style={{ paddingTop: "40px" }}>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA", fontWeight: "500" }}>Bank Details</InputLabel>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Bank Name *"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'BankName',
                                                id: 'BankName',
                                                value: this.state.BankName
                                            }}
                                            error={this.state.bankNameError} errorText={this.state.bankNameErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Account Number *"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'AccNo',
                                                id: 'AccNo',
                                                value: this.state.AccNo
                                            }}
                                            error={this.state.accNoError} errorText={this.state.accNoErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Bank Num Code *"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'BankNoCode',
                                                id: 'BankNoCode',
                                                value: this.state.BankNoCode
                                            }}
                                            error={this.state.bankNoCodeError} errorText={this.state.bankNoCodeErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Batch Company ID *"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'BatchComId',
                                                id: 'BatchComId',
                                                value: this.state.BatchComId
                                            }}
                                            error={this.state.batchComIdError} errorText={this.state.batchComIdErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Batch Company Name *"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'BatchComName',
                                                id: 'batchComName',
                                                value: this.state.BatchComName
                                            }}
                                            error={this.state.batchComNameError} errorText={this.state.batchComNameErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Batch Description *"
                                            id="batchDes"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'BatchDes',
                                                id: 'batchDes',
                                                value: this.state.BatchDes
                                            }}
                                            error={this.state.batchDesError} errorText={this.state.batchDesErrorText}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Type Code *"
                                            id="barchGrpCode"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'TypeCode',
                                                id: 'typeCode',
                                                value: this.state.TypeCode
                                            }}
                                            error={this.state.typeCodeError} errorText={this.state.typeCodeErrorText}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Site Code"
                                            id="siteCode"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>



                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <div style={{ marginTop: "20px  " }}>
                                            <InputLabel>Use Carrier Account Indicator *</InputLabel>

                                            <Select
                                                value={this.state.CarrierAccInd}
                                                onChange={this.handleChange}
                                                inputProps={{
                                                    name: 'CarrierAccInd',
                                                    id: 'carrierAccInd',
                                                }}
                                                style={{ width: "100%" }}
                                            >
                                                {this.state.carrierAccIndOptions.map((element, key) => <MenuItem key={key} value={element}>{element}</MenuItem>)}

                                            </Select>
                                            {this.state.carrierAccIndError ? <span style={{ color: "red" }}>Please select Yes or No</span> : null}
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Merchant ID"
                                            id="merchantid"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Security key"
                                            id="securitykey"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Security Exp Date (DD-MM-YYYY)"
                                            id="secExpDate"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                {/* <Button fullWidth={true} color="primary">Add Bank Details</Button> */}
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

        addLegalEntityNext: (obj) => {
            dispatch(addLegalEntityNext(obj));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddLegalEntity));
