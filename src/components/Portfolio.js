import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/blog.gif";
import project2 from "../images/aboutme.jpg";
import project3 from "../images/UnderConstruction.png";

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';



const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  link:{
    color: "#005FFF",
    textDecoration: "none",
  }
}));

const projects = [
  {
    name: "ふんわりブログ",
    description: `気軽にアウトプットできるブログサービスです。開発技術：Ruby on Rails、Javascript、Bootstrap、AWS EC2 S3、nginx、capistrano`,
    image: project1,
    link: "http://3.113.47.133/",
    github: "https://github.com/mitubakuro/myblog_service"
  },
  {
    name: "About Me（当サイト）",
    description: `ReactとFirebaseを使った自己紹介サイトです。レスポンシブ対応。`,
    image: project2,
    link: "/",
    github: "https://github.com/mitubakuro/about-me"
  },
  {
    name: "Rate It",
    description: `Rails+Reactのレビューサイトです。現在開発中...`,
    image: project3,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={project.link} className={classes.link}><LaunchIcon/></a>
                </Button>
                <Button size="small" color="primary">
                  <a href={project.github} className={classes.link}><GitHubIcon/></a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
