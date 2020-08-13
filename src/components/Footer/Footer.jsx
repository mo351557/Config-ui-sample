import React from "react";
// import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import ListItem from "@material-ui/core/ListItem";
// import List from "@material-ui/core/List";
// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  // const { classes } = props;
  return (
    <footer name="AbuFooter">
      <div name="footer" style={{textAlign: "center"}}>
        <span className="ftrSpn3">&copy;</span>
        <span className="ftrSpn3">2019 HealthPlan Services. All Rights Reserved</span>
      </div>
    </footer>
  );
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(footerStyle)(Footer);
