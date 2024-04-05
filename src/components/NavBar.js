import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../services/auth";

const NavBar = ({ onLogout }) => {
  const currentUser = authService.getCurrenUser();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar postion="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}>
            Employee app
          </Typography>

          <div>
            {currentUser ? (
              <>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ marginRight: 2 }}>
                  Welcom {currentUser.username}
                </Typography>
                <Button color="inherit" onClick={onLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" LinkComponent={Link} to="/register">
                  Register
                </Button>
                <Button color="inherit" LinkComponent={Link} to="/login">
                  Login
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
