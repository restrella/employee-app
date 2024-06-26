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

const EmployeeForm = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    initialValue || {
      name: "",
      username: "",
      email: "",
      phone: "",
      address: "",
      website: "",
    }
  );

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    onSubmit(form);
  };

  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(3).max(500).allow("").optional(),
    // email: Joi.string()
    //   //   .email({ minDomainSegments: 2, tlds: { allow: ["com" | "net"] } })
    //   .email()
    //   .required(),
    phone: Joi.string().min(6).max(15).allow("").optional(),
    address: Joi.string().min(3).max(500).allow("").optional(),
    website: Joi.string().uri().allow("").optional(),
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
              <Grid item xs={12}>
                <TextField
                  name="email"
                  error={!!errors.email}
                  helperText={errors.email}
                  onChange={handleChange}
                  value={form.email}
                  label="Email"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phone"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  onChange={handleChange}
                  value={form.phone}
                  label="Phone"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address"
                  error={!!errors.address}
                  helperText={errors.address}
                  onChange={handleChange}
                  value={form.address}
                  label="Adress"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="website"
                  error={!!errors.website}
                  helperText={errors.website}
                  onChange={handleChange}
                  value={form.website}
                  label="Website"
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
