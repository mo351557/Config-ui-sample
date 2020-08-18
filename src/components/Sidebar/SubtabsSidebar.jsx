// import React from "react";
// import classNames from "classnames";
// import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";

// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
// import Collapse from '@material-ui/core/Collapse';
// import LocationOn from "@material-ui/icons/LocationOn";

// // core components
// import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.jsx";
// import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.jsx";

// import CoreCarrierPage from '../Sidebar/coreCarrierPage'
// import Maps from "../../views//Maps/Maps.jsx";

// import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

// const SubtabsSidebar = ({ ...props }) => {
//   // verifies if routeName is the one active (in browser input)
//   function activeRoute(routeName) {
//     return props.location.pathname.indexOf(routeName) > -1 ? true : false;
//   }
//   const { classes, color, image, logo, logoText, routes,openCollapse, handleClick } = props;
//   var links = (
//     <List className={classes.list}>
//     {/* <CoreCarrierPage  
//           logoText={"HealthPlan Service"}
//           logo={logo}
//           image={image}
//           color={color}
//           openCollapse = {openCollapse}
//           handleClick={handleClick}
//           /> */}
//        {routes.map((prop, key) => {
//         var activePro = " ";
//         var listItemClasses;
//         // if (prop.path === "/upgrade-to-pro") {
//         //   activePro = classes.activePro + " ";
//         //   listItemClasses = classNames({
//         //     [" " + classes[color]]: true
//         //   });
//         // } else {
//           if(routes){
//             console.log("routes",routes);
//           }

//         listItemClasses = classNames({
//           [" " + classes[color]]: activeRoute(prop.layout + prop.path)
//         });

//         const whiteFontClasses = classNames({
//           [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
//         });
//         return (
//           <NavLink
//             to={prop.layout + prop.path}
//             className={activePro + classes.item}
//             activeClassName="active"
//             key={key}
//           >
//           <ListItem button className={classes.itemLink + listItemClasses}>
//           {typeof prop.icon === "string" ? (
//             <Icon
//               className={classNames(classes.itemIcon, whiteFontClasses, {
//                 [classes.itemIconRTL]: props.rtlActive
//               })}
//             >
//               {prop.icon}
//             </Icon>
//           ) : (
//               <prop.icon
//                 className={classNames(classes.itemIcon, whiteFontClasses, {
//                   [classes.itemIconRTL]: props.rtlActive
//                 })}
//               />
//             )}
//           <ListItemText
//             primary={
//               props.rtlActive ? prop.rtlName : prop.name
//             }
//             className={classNames(classes.itemText, whiteFontClasses, {
//               [classes.itemTextRTL]: props.rtlActive
//             })}
//             disableTypography={true}
//           />
//             {openCollapse ? <ExpandLess /> : <ExpandMore />} 
//                <Collapse in={openCollapse} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {/* <ListItem button className={classes.nested}> */}
//                     {/* <ListItemIcon>
//                       <StarBorder />
//                     </ListItemIcon>
//                     <ListItemText inset primary="Starred" /> */}
//                     <CoreCarrierPage  
//           logoText={"HealthPlan Service"}
//           logo={logo}
//           image={image}
//           color={color}
//           openCollapse = {openCollapse}
//           handleClick={handleClick}
//           /> 
//                   {/* </ListItem> */}
//                 </List>
//               </Collapse> 
//         </ListItem>


//           </NavLink>
//         );
//       })} 


//     </List>
//   );




//   var brand = (
//     <div className={classes.logo}>
//       <a
//         href="http://localhost:3001"
//         className={classNames(classes.logoLink, {
//           [classes.logoLinkRTL]: props.rtlActive
//         })}
//       >
//         <div className={classes.logoImage}>
//           <img src={logo} alt="logo" className={classes.img} />
//         </div>
//       </a>
//     </div>
//   );
//   return (
//     <div>
//       {/* <Hidden mdUp implementation="css">
//         <Drawer
//           variant="temporary"
//           anchor={props.rtlActive ? "left" : "right"}
//           open={props.open}
//           classes={{
//             paper: classNames(classes.drawerPaper, {
//               [classes.drawerPaperRTL]: props.rtlActive
//             })
//           }}
//           onClose={props.handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true // Better open performance on mobile.
//           }}
//         >
//           {brand}
//           <div className={classes.sidebarWrapper}>
//             <AdminNavbarLinks />
//             {links}
//           </div>
//           {image !== undefined ? (
//             <div
//               className={classes.background}
//               style={{ backgroundImage: "url(" + image + ")" }}
//             />
//           ) : null}


//         </Drawer>
//       </Hidden> */}
//       <Hidden smDown implementation="css">
//         <Drawer
//           anchor={props.rtlActive ? "right" : "left"}
//           variant="permanent"
//           open
//           classes={{
//             paper: classNames(classes.drawerPaper, {
//               [classes.drawerPaperRTL]: props.rtlActive
//             })
//           }}
//         >
//           {brand}
//           <div className={classes.sidebarWrapper}>{links}</div>
//          {image !== undefined ? (
//             <div
//               className={classes.background}
//               style={{ backgroundImage: "url(" + image + ")" }}
//             />
//           ) : null} 
//         </Drawer>
//       </Hidden>


//     </div>
//   );
// };

// SubtabsSidebar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(sidebarStyle)(SubtabsSidebar);





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
import Icon from "@material-ui/core/Icon";

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// core components
// import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.jsx";
// import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.jsx";
// import CoreCarrierPage from '../Sidebar/coreCarrierPage'


import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle.jsx";



// const SubtabsSidebar = ({ ...props }) => {
  class SubtabsSidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: "blue",
        hasImage: true,
        fixedClasses: "dropdown show",
        mobileOpen: false,
        open: true,
        some: 'Hiiii'
      };
  
    }
  
    handleClick = (routeName) => {
  // alert(routeName);
      if(routeName === 'Core Carrier'){
      this.setState(state => ({ open: !state.open }));
      }
    };
  
    handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    };
  
    // verifies if routeName is the one active (in browser input)
     activeRoute = (routeName) => {
      console.log("aciveRoute",routeName,this.props.location.pathname,this.props.location.pathname.indexOf(routeName));      
      return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }
  
     handleLink = (path) => {
      console.log("handlelink", path);
      this.props.history.push(`/rtl${path}`);
    }
  
    
  
    render() {
      const { classes, color, image, logo,  routes } = this.props;
  
      // const { classes, ...rest } = this.props;
      // eslint-disable-next-line to the line before.
     const links = (
      <List className={classes.list}>
         {/* eslint-disable-next-line */}
        {routes.map((prop, key) => {
          if(prop.layout !== '/subtabs'){
            // eslint-disable-next-line
          var activePro = " ";
          //var listItemClasses;
  
          //console.log("routes", prop);
          //console.log("extras", prop.extras);
          //listItemClasses = classNames({
           // [" " + classes[color]]: this.activeRoute(prop.layout + prop.path)
          //});
  
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]: this.activeRoute(prop.layout + prop.path)
          });
          
          return (
            <div key={key}>
              <NavLink to={prop.layout + prop.path} className={activePro + classes.item} activeClassName="active" key={key} onClick={()=>this.handleClick(prop.name)}>
                <ListItem button  style={{display: "inline-flex"}}>
                  {typeof prop.icon === "string" ? (
                    <Icon className={classNames(classes.itemIcon, whiteFontClasses, { [classes.itemIconRTL]: this.props.rtlActive })}>
                      {prop.icon}
                    </Icon>
                  ) : (
                      <prop.icon className={classNames(classes.itemIcon, whiteFontClasses, { [classes.itemIconRTL]: this.props.rtlActive })} />
                    )}
                  <ListItemText primary={this.props.rtlActive ? prop.rtlName : prop.name} className={classNames(classes.itemText, whiteFontClasses, 
                      {[classes.itemTextRTL]: this.props.rtlActive })} disableTypography={true} style={{paddingLeft: "15px !important"}}/>
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
  
  
              </NavLink>
  
              <Collapse in={this.state.open} timeout="auto" unmountOnExit style={{marginLeft: "30px"}}>
  
                <List>
                  {/* <NavLink
                to={prop.extras.layout + prop.extras.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
              </NavLink>  */}
  
                  {/* <ListItem button className={classes.itemLink + listItemClasses}>
                  {typeof prop.extras.icon === "string" ? null : (
                      <prop.icon
                        className={classNames(classes.itemIcon, whiteFontClasses, {
                          [classes.itemIconRTL]: props.rtlActive
                        })}
                      />
                    )}
                  <ListItemText
                    primary={
                      props.rtlActive ? prop.extras.name : prop.extras.name
                    }
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive
                    })}
                    disableTypography={true}
                  />
  
                </ListItem> */}
  
                  {prop.extras.length > 0 ? prop.extras.map((proper, key) => {
                     var activePro = " ";
                    var listItemClassesSubTab;
            
                    //console.log("routes", prop);
                    //console.log("extras", prop.extras);
                    listItemClassesSubTab = classNames({
                      [" " + classes[color]]: this.activeRoute(prop.layout + proper.path)
                    });
            
                    const whiteFontClassesSubTab = classNames({
                      [" " + classes.whiteFont]: this.activeRoute(prop.layout + proper.path)
                    });
                    return (
                      <NavLink to={proper.layout + proper.path} className={activePro + classes.item} activeClassName="active" key={key}>
                      <ListItem button className={classes.itemLink + listItemClassesSubTab} style={{ marginRight: "30px"}}>
                        {/* <proper.icon
                        className={classNames(classes.itemIcon, whiteFontClasses, {
                          [classes.itemIconRTL]: props.rtlActive
                        })}
                  /> */}
  
                        <ListItemText primary={this.props.rtlActive ? proper.name : proper.name} className={classNames(classes.itemText, whiteFontClassesSubTab, {
                            [classes.itemTextRTL]: this.props.rtlActive})} disableTypography={true} onClick={()=>{this.handleLink(proper.path)}} />
  
                         </ListItem>
                         </NavLink>
                    )
                  }) : null}
  
  
                </List>
              </Collapse>
  
  
            </div>
          );
        }
        })}
      </List>
    );
    const brand = (
      <div className={classes.logo}>
        <a
          href="http://localhost:3000/admin/dashboard"
          className={classNames(classes.logoLink, {
            [classes.logoLinkRTL]: this.props.rtlActive
          })}
        >
          <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img} style={{"WebkitFilter": "drop-shadow(0.3pt 0em 0px white) drop-shadow(1.2px -1px 0px white)","zIndex": 0,
      opacity: 10}}/>
          </div>
        </a>
      </div>
    );
    return (
      <div>
        <Hidden smDown implementation="css">
          <Drawer 
            variant="permanent"
            anchor={this.props.rtlActive ? "left" : "right"}
            open={true}
            classes={{
              paper: classNames(classes.drawerPaper, {
                [classes.drawerPaperRTL]: this.props.rtlActive
              })
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              {links}
            </div>
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
  }
  };

SubtabsSidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(SubtabsSidebar);




