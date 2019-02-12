import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const Header = props => (
  <div className="row" style={{ marginTop: "10px", alignItems: "center", marginLeft:"75px", marginRight:"75px", marginTop:"10px", color:'white', background:"#464545" }}>
    <div className="col-md-6">
      <span>Reddit Clone by Kartik</span>
    </div>
    <div className="col-md-6">
    <TextField
          id="standard-select-currency-native"
          select
          label="Select subreddit"
          onChange={props.changeSub}
          SelectProps={{
            native: true,
            // MenuProps: {
            //   className: classes.menu,
            // },
          }}
          margin="normal"
        >
        {props.subs.map((option, value) => (
            <option key={value} value={option}>
              {option}
            </option>
          ))}
          </TextField>
    </div>
  </div>
);
export default Header;
