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

const EmployeeForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    // email: "",
    // phone: "",
    // address: "",
    // website: "",
  });

  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    console.log("prevent");
    console.log(form);
    // onSubmit(form);
  };

  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    username: Joi.string().min(3).max(20).required(),
    // website: Joi.string().uri().allow("").optional(),
  });

  const isFormInvalid = () => {
    const result = schema.validate(form);

    return !!result.error;
  };

  const handleChange = ({ currentTarget: input }) => {
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
          <CardHeader title={`Add Employee`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name}
                  onChange={handleChange}
                  value={form.name}
                  label="Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
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

export default EmployeeForm;
