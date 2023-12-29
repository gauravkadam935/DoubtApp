// src/Login.js
import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import "./styles.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [type, setType] = React.useState("");

  const SelectChange = (event) => {
    setType(event.target.value);
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
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
    if (formData.password === "") {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform login logic (e.g., API call)
      console.log("Login form submitted:", formData);
    }
  };

  return (
    <Container className="container" maxWidth="xs">
      <div className="form">
        <Typography variant="h4" align="center" className="form-title">
          Login
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
            className="button"
          >
            Login
          </Button>
          <a className="" onClick={() => navigate("/register")}>
            Don`t Have An Account/Register
          </a>
        </form>
      </div>
    </Container>
  );
};

export default Login;
