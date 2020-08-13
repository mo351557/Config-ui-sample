import React from "react";
// import { withRouter } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Dropdown from 'components/Select/Select.jsx'
import CardFooter from "components/Card/CardFooter.jsx";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

function InvoiceRemitTo(props) {
    const { classes } = props;

    
    
    const addBtn = (
        <Button color="success" onClick={() => { handleLink('/addinvoiceremit') }}>
            Add
      </Button>
    )
    const splitBtn = (
        <Button color="danger" >
            Split
      </Button>
    )
    // const select = (
    //     <Dropdown />
    // )

    const tableData = [
        ["XC", "TX", "A", "HealthPlan Service", "HealthPlan Service", addBtn, splitBtn],
        ["XC", "TX", "A", "HealthPlan Service", "HealthPlan Service", addBtn, splitBtn],
        ["XC", "TX", "A", "HealthPlan Service", "HealthPlan Service", addBtn, splitBtn],
        ["XC", "TX", "A", "HealthPlan Service", "HealthPlan Service", addBtn, splitBtn],
        ["XC", "TX", "A", "HealthPlan Service", "HealthPlan Service", addBtn, splitBtn]
    ]

    var handleLink = (path) => {
        console.log("handlelink", path);
        props.history.push(`/rtl${path}`);
    }

    var handleSubmit = () => {
        // const res = props.carrierNext(name);
        var status = 'success'
        // console.log("state",res)

        //page routing
        if (status === 'success') {
            //   var obj = {
            //     indvOnButton: this.state.indvOnButton, indvOffButton: this.state.indvOffButton,
            //     indvGrpButton: this.state.indvGrpButton, LineOfBussiness: this.state.LineOfBussiness, states: this.state.states,
            //     ProductType: this.state.ProductType
            //   }
            //   this.props.lineOfBusinessNext(obj)

            props.history.push(`/rtl/ediregistration`);
        }
        else {
            console.error("failed to route");
        }
    }

    return (

        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Invoice Remit To</h4>
                        {/* <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p> */}
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Carrier Code", "State", "Product Type", "Payable To Name", "Remit Name", "Actions", ""]}
                            tableData={tableData}
                        />
                    </CardBody>
                    <CardFooter>
                        <Button color="primary" onClick={handleSubmit}>Next</Button>
                    </CardFooter>
                </Card>
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Legal Entities", "Address"]}
                  tableData={[
                    ["Legal Entity 1", "3421, North Street, Wasington, USA"],
                    ["Legal Entity 2", "3421, North Street, Wasington, USA"],
                    ["Legal Entity 3", "3421, North Street, Wasington, USA"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem> */}

        </GridContainer>
    );
}

export default withStyles(styles)(InvoiceRemitTo);
