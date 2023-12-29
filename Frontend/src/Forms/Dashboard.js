// src/Dashboard.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Dialog,
  DialogTitle,
  Fab,
} from "@mui/material";
import {
  Menu as MenuIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import DoubtAsking from "./DoubtAsking";

const Dashboard = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openDoubtForm, setOpenDoubtForm] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleDoubtFormOpen = () => {
    setOpenDoubtForm(true);
  };

  const handleDoubtFormClose = () => {
    setOpenDoubtForm(false);
  };

  const subjects = [
    {
      id: 1,
      title: "Mathematics",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Science",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "History",
      image: "https://via.placeholder.com/150",
    },
    // Add more subjects as needed
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Doubt Share Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="Doubt Share" />
          </ListItem>
        </List>
      </Drawer>

      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Doubt Share Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/image1.jpg"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/image2.jpg"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/image3.jpg"
                title="green iguana"
              />
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Navigate the realm of education with confidence on our Doubt Share
          Platform. This collaborative space empowers learners to ask questions,
          share uncertainties, and connect with a community of experts. Dive
          into subjects like biology, chemistry, English, math, and physics,
          fostering a supportive environment for knowledge exchange. Explore the
          features that make learning a shared journey, where curiosity is
          celebrated, and understanding is a collective endeavor.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/maths.svg"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/physics.svg"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/english.svg"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/chemistry.svg"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="https://6565a5dbb145db43d25e359b--resplendent-cajeta-6921ba.netlify.app/HomePage/images/biology.svg"
                title="green iguana"
              />
            </Card>
          </Grid>
        </Grid>

        <Dialog open={openDoubtForm} onClose={handleDoubtFormClose}>
          <DoubtAsking onClose={handleDoubtFormClose} />
        </Dialog>

        <Fab
          color="primary"
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          onClick={handleDoubtFormOpen}
        >
          <AddIcon />
        </Fab>
      </Container>
    </div>
  );
};

export default Dashboard;
