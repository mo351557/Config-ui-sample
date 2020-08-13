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
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import Dropdown from 'components/Select/Select.jsx'
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



function LegalEntity(props) {
    const { classes } = props;
    var options = [{ name: "one", value: 1 }, { name: "two", value: 2 }, { name: "three", value: 3 }]
    var value = "something"

    const addBtn = (
        <Button color="success" onClick={() => { handleLink('/addlegalentity') }}>
            Add
      </Button>
    )
    const splitBtn = (
        <Button color="danger" >
            Split
      </Button>
    )

    var handleChange = () => {
        console.log("handleChange");
    }

    const select = (
        <Dropdown label="Legal Entities" name="legalEntities" value={value} options={options} handleChange={handleChange} style={{ width: "100%" }} />
    )

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
    
          props.history.push(`/rtl/invoiceremitto`);
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
                        <h4 className={classes.cardTitleWhite}>Legal Entity</h4>
                        {/* <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p> */}
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Business Type", "Line of Business", "State", "Product Type", "Legal Entities", "Actions", ""]}
                            tableData={[
                                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738", select, addBtn, splitBtn],
                                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789", select, addBtn, splitBtn],
                                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142", select, addBtn, splitBtn],
                                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735", select, addBtn, splitBtn],
                                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542", select, addBtn, splitBtn],
                                ["Mason Porter", "Chile", "Gloucester", "$78,615", select, addBtn, splitBtn]
                            ]}
                        />
                    </CardBody>
                    <CardFooter>
                        <Button color="primary" onClick={handleSubmit}>Next</Button>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Card plain>
                    {/* <CardHeader plain color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Table on Plain Background
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p>
              </CardHeader> */}
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
            </GridItem>

        </GridContainer>
    );
}

export default withStyles(styles)(LegalEntity);
