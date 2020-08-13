import React from "react";
// import ReactDOM from 'react-dom';
// nodejs library that concatenates classes
// import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

// core components


import customTabsStyle from "assets/jss/material-dashboard-react/components/customTabsStyle.jsx";


// const styles = theme => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     formControl: {
//         margin: theme.spacing.unit,
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing.unit * 2,
//     },
// });

class Dropdown extends React.Component {
    state = {
        age: '',
        name: this.props.name,
        value: this.props.value
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { classes,label,handleChange,options } = this.props;
        
        // const cardTitle = classNames({
        //   [classes.cardTitle]: true,
        //   [classes.cardTitleRTL]: rtlActive
        // });
      function handle(){
            console.log("handle")
        }
        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">{label}</InputLabel>
                    <Select
                        value={this.state.value}
                        onChange={handleChange}
                        onChange={handle}
                        name={this.state.name}
                        className={classes.selectEmpty}
                    >
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                        {options.map((element,key)=><MenuItem value={element.value} key={key}>{element.name}</MenuItem>)}
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                    {/* <FormHelperText>Without label</FormHelperText> */}
                </FormControl>
            </form>
        );
    }
}

Dropdown.propTypes = {
    headerColor: PropTypes.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary"
    ]),
    title: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default withStyles(customTabsStyle)(Dropdown);
