import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
// import Collapse from '@material-ui/core/Collapse';
// import LocationOn from "@material-ui/icons/LocationOn";

// core components
// import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.jsx";
// import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.jsx";

import coreRoutes from "routes.coreCarrier.js";

// import Maps from "../../views//Maps/Maps.jsx";

import sidebarStyleCoreCarrier from "assets/jss/material-dashboard-react/components/sidebarStyleCoreCarrier.jsx";

const CoreCarrierPage = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    // return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    return false;
  }
  const { classes, color, image, logo, handleClick } = props;
  var links = (
    <List className={classes.list}>
      {coreRoutes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
      
        
        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path)
        });

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses} onClick={handleClick}>
             {/*} {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon,  {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon,whiteFontClasses , {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )} */}
              <ListItemText
                primary={
                  props.rtlActive ? prop.rtlName : prop.name
                }
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
              {/* {openCollapse ? <ExpandLess /> : <ExpandMore />} */}
              {/* <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Starred" />
                  </ListItem>
                </List>
              </Collapse> */}

            </ListItem>


          </NavLink>
        );
      })}


    </List>
  );

 


  var brand = (
    <div className={classes.logo}>
      <a
        href="http://localhost:3000/admin/dashboard"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
      </a>
    </div>
  );
  return (
    <div>
      {/* <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}

          
        </Drawer>
      </Hidden> */}
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
         {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null} 
        </Drawer>
      </Hidden>

     
    </div>
  );
};

CoreCarrierPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyleCoreCarrier)(CoreCarrierPage);
