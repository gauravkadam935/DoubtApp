// src/DoubtAsking.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  DialogActions,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const DoubtAsking = ({ onClose }) => {
  const [doubtText, setDoubtText] = useState("");

  const handleChange = (e) => {
    setDoubtText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle doubt submission (e.g., API call)
    console.log("Doubt submitted:", doubtText);

    // Clear the text field
    setDoubtText("");

    // Close the doubt asking form
    onClose();
  };

  return (
    <Container maxWidth="sm">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box width={"500px"}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              style={{ margin: "20px 0" }}
            >
              Ask a Doubt
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Type your doubt here"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={doubtText}
              onChange={handleChange}
              required
            />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Submit Doubt
              </Button>
            </DialogActions>
          </form>
        </Box>
      </Grid>
    </Container>
  );
};

export default DoubtAsking;
