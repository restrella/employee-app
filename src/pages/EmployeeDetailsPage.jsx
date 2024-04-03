import { MoreVert } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetailsPage = ({ employees }) => {
  const params = useParams();
  const [anchorEl, setAnchorEl] = useState(null);

  const [emp, setEmp] = useState({});
  const [loading, setLoading] = useState(false);
  const open = Boolean(anchorEl);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setLoading(true);
    console.log(employees);
    const empl = employees.find((x) => x.id === +params.id);
    console.log(empl);
    setEmp(employees.find((x) => x.id === +params.id));
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else
    return (
      <Card>
        <CardHeader
          action={
            <Icon>
              <MoreVert />
            </Icon>
          }
          title={emp.name}
          subheader={`@${emp.username}`}
        />
        <CardContent>
          <Menu id="basic-memo" anchorEl={open} onClose={handleCloseMenu}>
            <MenuItem LinkComponentonClick={() => {}}>Edit</MenuItem>
            <MenuItem onClick={() => {}}>Delete</MenuItem>
          </Menu>

          <Grid container spacing="5">
            <Grid item xs={6}>
              <Typography variant="overline">Email</Typography>
              <Typography varaiant="body2">{emp.email}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="overline">Phone</Typography>
              <Typography varaiant="body2">{emp.phone}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="overline">Address</Typography>
              <Typography varaiant="body2">{emp.address}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="overline">Email</Typography>
              <Typography varaiant="body2">{emp.website}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
};

export default EmployeeDetailsPage;
