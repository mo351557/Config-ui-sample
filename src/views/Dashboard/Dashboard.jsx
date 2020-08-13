import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import Table from "components/Table/Table.jsx";
// import Tasks from "components/Tasks/Tasks.jsx";
// import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
// import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

import logo from "../../assets/Logo_horizontal_web.png";

// import { bugs, website, server } from "variables/general.jsx";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="white">
                <span style={{ color: "black" }}>Task 1</span>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>something here</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
                <div style={{ float: "right", width: "41%", height: "auto", marginTop: "-50px", marginRight: "-25px" }}>
                  <img src={logo} alt="logo" className={classes.img} style={{
                    "WebkitFilter": "drop-shadow(0.3pt 0em 0px white) drop-shadow(1.2px -1px 0px white)", "zIndex": 0,
                    opacity: 10, width: "85%", height: "auto"
                  }} />
                </div>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Edited 3 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card chart>
              <CardHeader color="yellow">
                <span>Task 2</span>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Task Info</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
                <div style={{ float: "right", width: "41%", height: "auto", marginTop: "-50px", marginRight: "-25px" }}>
                  <img src={logo} alt="logo" className={classes.img} style={{
                    "WebkitFilter": "drop-shadow(0.3pt 0em 0px white) drop-shadow(1.2px -1px 0px white)", "zIndex": 0,
                    opacity: 10, width: "85%", height: "auto"
                  }} />
                </div>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Edited 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4}>
            <Card chart>
              <CardHeader color="success">
                <span>Task 3</span>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Task Completed</h4>
                <p className={classes.cardCategory}>
                  Still in pending
                </p>
                <div style={{ float: "right", width: "41%", height: "auto", marginTop: "-50px", marginRight: "-25px" }}>
                  <img src={logo} alt="logo" className={classes.img} style={{
                    "WebkitFilter": "drop-shadow(0.3pt 0em 0px white) drop-shadow(1.2px -1px 0px white)", "zIndex": 0,
                    opacity: 10, width: "85%", height: "auto"
                  }} />
                </div>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Edited 1 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4}>
            <Card chart>
              <CardHeader color="warning">
                {/* <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                /> */}
                <span>Task 4</span>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Task Pending</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
                <div style={{ float: "right", width: "41%", height: "auto", marginTop: "-50px", marginRight: "-25px" }}>
                  <img src={logo} alt="logo" className={classes.img} style={{
                    "WebkitFilter": "drop-shadow(0.3pt 0em 0px white) drop-shadow(1.2px -1px 0px white)", "zIndex": 0,
                    opacity: 10, width: "85%", height: "auto"
                  }} />
                </div>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Edited 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                {/* <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                /> */}
                <span>Task 5</span>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>something here</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
                <div style={{ float: "right", width: "41%", height: "auto", marginTop: "-50px", marginRight: "-25px" }}>
                  <img src={logo} alt="logo" className={classes.img} style={{
                    "WebkitFilter": "drop-shadow(0.3pt 0em 0px white) drop-shadow(1.2px -1px 0px white)", "zIndex": 0,
                    opacity: 10, width: "85%", height: "auto"
                  }} />
                </div>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Edited 3 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>


        </GridContainer>
        <Button color="primary" style={{ width: "12%" }} onClick={() => { this.props.history.push(`/rtl/carrier`); }}>+ New Task</Button>
        {/* </GridContainer> 
         <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer> */}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
