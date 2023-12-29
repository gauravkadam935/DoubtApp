// src/Register.js
import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import "./styles.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Register = () => {
  const [type, setType] = React.useState("");

  const SelectChange = (event) => {
    setType(event.target.value);
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error message when user types
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let newErrors = {};
    if (formData.username === "") {
      newErrors.username = "Username is required";
    }
    if (formData.email === "") {
      newErrors.email = "Email is required";
    }
    if (formData.password === "") {
      newErrors.password = "Password is required";
    }
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform registration logic (e.g., API call)
      console.log("Register form submitted:", formData);
    }
  };

  return (
    <Container className="container" maxWidth="xs">
      <div className="form">
        <Typography variant="h4" align="center" className="form-title">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
            className="form-field"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            className="form-field"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            className="form-field"
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            className="form-field"
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Role</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={type}
              label="role"
              onChange={SelectChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
              <MenuItem value={"Tutor"}>Tutor</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="button margin-top"
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
