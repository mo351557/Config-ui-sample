/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Navbar from "components/Navbars/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import SubtabsSidebar from "components/Sidebar/SubtabsSidebar.jsx";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import routes from "routesTab.js";

import rtlStyle from "assets/jss/material-dashboard-react/layouts/rtlStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "../assets/Logo_horizontal_web.png";

//Redux
import { connect } from 'react-redux';
import { carrierNext } from '../actions/userAction';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/rtl") {
        console.log("normal route", prop.extras);

        // if (prop.extras) {
        //   console.log("extras route", prop.extras);
        //   prop.extras.map((props, key) => {
        //     console.log("inside route", props.path);
        //     return (
        //       <Route path={props.layout + props.path} component={props.component} key={key+8} />
        //     );
        //   })
        // }

        return (
          <Route path={prop.layout + prop.path} component={prop.component} key={key} />
        );
      }

      if (prop.layout === "/subtabs") {
        console.log("mohd route", prop.path);
        return (
          <Route path={"/rtl" + prop.path} component={prop.component} key={key} />
        );
      }
      if (prop.layout === "/subtabs/legalentity") {
        console.log("add route", prop.path);
        return (
          <Route path={"/rtl" + prop.path} component={prop.component} key={key} />
        );
      }

    })}
  </Switch>
);

class RTL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "blue",
      hasImage: true,
      fixedClasses: "dropdown show",
      mobileOpen: false,
      open: true
    };
  }

  testClick = () => {
    console.log("test click");
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/admin/maps";
  }
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <SubtabsSidebar
          routes={routes}
          logoText={"HealthPlan Services"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          openCollapse={this.state.open}
          handleClick={this.handleClick}
          /* nextStep = {(arg)=>this.props.carrierNext(arg)} */
          nextStep = {this.testClick}
          {...rest}

        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest} 
          />
          {/* <button onClick={() => this.props.carrierNext("Abu")}>Click me</button> */}
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
              <div className={classes.map}>{switchRoutes}</div>
            )}
          {this.getRoute() ? <Footer /> : null}

        </div>
      </div>
    );
  }
}

RTL.propTypes = {
  classes: PropTypes.object.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(rtlStyle)(RTL));
