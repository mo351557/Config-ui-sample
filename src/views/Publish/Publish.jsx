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
// import Divider from '@material-ui/core/Divider';

// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Dropdown from 'components/Select/Select.jsx'
import StatusIndicator from 'components/StatusIndicator/StatusIndicator.jsx'

import CustomTableFinance from "components/Table/TableForFinance.jsx";
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

function Publish(props) {
    const { classes } = props;
    // const addBtn = (
    //     <Button color="primary" onClick={() => { handleLink('/addlegalentity') }}>
    //         Add
    //   </Button>
    // )
    // const splitBtn = (
    //     <Button color="primary" >
    //         Split
    //   </Button>
    // )
    // const select = (
    //     <Dropdown />
    // )

    // var handleLink = (path) => {
    //     console.log("handlelink", path);
    //     props.history.push(`/rtl${path}`);
    // }

    var handleSubmit = () => {
        alert("Submitted");
    }
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Publish</h4>
                        {/* <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p> */}
                    </CardHeader>
                    <CardBody>

                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Task 1", ""]}
                            tableData={[
                                ["Config available put dependent information not updated", <StatusIndicator color="white" />],
                                ["Config ready to update", <StatusIndicator color="yellow" />],
                                ["Config updated", <StatusIndicator color="green" />],
                                ["Issue with Config updation", <StatusIndicator color="orange" />],
                                ["Config mismatch with backend", <StatusIndicator color="red" />]
                            ]}
                        />
                        {/*tableHead={["       ","       ","      ","       ","","","DEV", "QUA", "","SIT","", "UAT","TRN", "PROD"]} */}
                        <div name="tableLeftAlign">
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["       ", "       ", "      ", "       ", "", "", "", "", "DEV", "", "QUA", "", "", "SIT", "", "", "UAT", "", "TRN", "", "PROD", "", ""]}
                                tableData={[

                                ]}
                            />
                        </div>



                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Core", "", "", "", "", "", ""]}
                            tableData={[
                                ["Carrier Details", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Business Details", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Line of Business", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Legal Entity", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Invoice Remit To", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["EDI Registration", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />]
                            ]}
                        />

                        <CustomTableFinance
                            tableHeaderColor="primary"
                            tableHead={[]}
                            tableData={[
                                ["Finance and Billing", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Online Services", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Plans and Rates", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Policy Administration", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />],
                                ["Exchange Link", <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />, <StatusIndicator />]
                            ]}
                        />
                    </CardBody>
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
                    {/* <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Legal Entities", "Address"]}
                            tableData={[
                                ["Legal Entity 1", "3421, North Street, Wasington, USA"],
                                ["Legal Entity 2", "3421, North Street, Wasington, USA"],
                                ["Legal Entity 3", "3421, North Street, Wasington, USA"]
                            ]}
                        />
                    </CardBody> */}
                    <CardFooter>
                        <Button color="primary" onClick={handleSubmit}>Submit</Button>
                    </CardFooter>
                </Card>
            </GridItem>

        </GridContainer>
    );
}

export default withStyles(styles)(Publish);
