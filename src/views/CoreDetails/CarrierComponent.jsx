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

// import avatar from "assets/img/faces/marc.jpg";


//Redux
import { connect } from 'react-redux';
import { carrierNext } from '../../actions/userAction';

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


class CarrierComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error : false,
            errorText : ''

        };

    }


    handleName = (e) => {
        this.setState({
            name : e.target.value
        })     
        console.log("e", e.target.value, this.state.name);
    }

    handleSubmit = () => {
       
        var status;
        if (this.state.name.length > 50) {
            this.setState({   
            error : true,
            errorText : 'Carrier Name cannot be greater than 50 words'
            })
        }
        else if (this.state.name === undefined || this.state.name === '' || this.state.name === null) {
            this.setState({                
            error : true,
            errorText : 'Carrier Name cannot be Empty'
            })
        }
        else {
            status = 'success'
        }

        //page routing
        if (status === 'success') {

            const res = this.props.carrierNext(this.state.name);
            console.log("res",res);

            this.props.history.push(`/rtl/businessdetails`);
        }
        else {
            console.error("failed to route");
        }
    }
// this.props.user.documents.businessDetails[0]
    render() {
        const { classes } = this.props;

        return (

            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Carrier Details</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    {/* <GridItem xs={12} sm={12} md={5}>
                  <CustomInput labelText="Company (disabled)" id="company-disabled" formControlProps={{fullWidth: true}}
                    inputProps={{disabled: true}}/>
                </GridItem> */}
                                    <GridItem xs={6} sm={6} md={6}>
                                        <CustomInput
                                            labelText="Name of the Carrier"
                                            id="nameOfCarrier"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            onChange={this.handleName}
                                            error={this.state.error}
                                            errorText={this.state.errorText}
                                            inputProps ={{value: this.state.name}}
                                        />
                                    </GridItem>

                                </GridContainer>

                                <GridContainer style={{ paddingTop: "35px" }}>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA" }}>Carrier Logo</InputLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA", fontSize: "14px" }}>Select files to upload</InputLabel>
                                    </GridItem>
                                    {/* <GridItem xs={6} sm={6} md={6} style={{marginTop: "-25px", marginBottom: "-50px"
 }}>
                                    <CustomInput style={{marginTop: "-20px"}}
                                        labelText="Select files to upload"
                                        id="fileSelector"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            disabled: true,
                                            multiline: true,
                                            rows: 5
                                        }}
                                    />
                                </GridItem> */}

                                    <GridItem xs={12} sm={12} md={12}>
                                        {/* <label for="file-upload">
                                        Upload the file here
                                    </label> */}
                                        <input style={{ marginTop: "15px" }} id="file-upload" type="file" />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" onClick={this.handleSubmit}>Next</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    {/* Avatar profile */}
                    {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
                </GridContainer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        carrierNext: (name) => {
            dispatch(carrierNext(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CarrierComponent));
