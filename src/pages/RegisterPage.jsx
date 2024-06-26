import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import * as authService from "../services/auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("handle submit");
    try {
      await authService.register(form.username, form.password);
      alert("Successful registration");
      navigate("/login");
    } catch (error) {
      console.log("error", error);
      if (error.response & (error.response.status === 499)) {
        alert(error.response.data.message);
      }
    }
  };

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const isFormInvalid = () => {
    const result = schema.validate(form);

    return !!result.error;
  };

  const handleChange = ({ currentTarget: input }) => {
    console.log("input", input);
    // event
    //  currentTarget
    //
    // setForm({
    //   ...form,
    //   [event.currentTarget.name]: event.currentTarget.value,
    // });
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const result = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (result.error) {
      setErrors({ ...errors, [input.name]: result.error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      onSubmit={handleSubmit}>
      <Grid item xs={6}>
        <Card>
          <CardHeader title={`Register`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  error={!!errors.username}
                  helperText={errors.username}
                  onChange={handleChange}
                  value={form.username}
                  label="Username"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  error={!!errors.password}
                  helperText={errors.password}
                  onChange={handleChange}
                  value={form.password}
                  label="Password"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" disabled={isFormInvalid()}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
