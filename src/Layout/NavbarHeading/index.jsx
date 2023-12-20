import { Menu, MenuItem } from "@mui/material";
import React from "react";

function NavbarHeading() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className="navbar-heading">
      <div className="navbar-heading-container">
        <p>Welcome to Juan online store</p>
        <div className="select-group">
          <div
            className="select-currency"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            $ Dollar (US) <i className="fa-regular fa-chevron-down"></i>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>$ USD</MenuItem>
            <MenuItem onClick={handleClose}>€ EURO</MenuItem>
          </Menu>
          <div
            className="select-lang"
            id="basic-button"
            aria-controls={open2 ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={handleClick2}
          >
            <img
              src="https://htmldemo.net/juan/juan/assets/img/icon/en.png"
              alt="britain flag"
            />
            English <i className="fa-regular fa-chevron-down"></i>
          </div>
          <Menu
            id="basic-menu2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose2}>
              <img
                src="https://htmldemo.net/juan/juan/assets/img/icon/en.png"
                alt="britain flag"
                style={{ margin: "0 5px 0 0" }}
              />
              English
            </MenuItem>
            <MenuItem onClick={handleClose2}>
              <img
                src="https://flagpedia.net/data/flags/w1600/ru.png"
                alt="flag"
                width={"18px"}
                style={{ margin: "0 5px 0 0" }}
              />
              Russian
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavbarHeading;
