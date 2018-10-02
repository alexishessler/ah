import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import './Jumbotron.css';

// import Image1 from './Images/projetalexis.png';
// import Image2 from './Images/alexis.png';

import Image1 from './Images/API.jpeg';
import Image2 from './Images/bike.jpg';
import Image3 from './Images/equally.png';
import Image4 from './Images/movieapp.jpg';
import Image5 from './Images/wailde.jpeg';
import Image6 from './Images/wanpada.jpg';
import Image7 from './Images/weather.jpeg';
import Image8 from './Images/quizz.jpeg';

import Image9 from './Images/burger.png';
import Image10 from './Images/chat.png';
import Image11 from './Images/oil.png';
import Image12 from './Images/tech.png';
import Image13 from './Images/world.png';

import GitHub from './Images/github-logo.png';
import Play from './Images/play-button.png';
import Web from './Images/grid-world.png';


import AppItem from './AppItem';

import './Apps.css';




const styles = {
  card: {

  },
  media: {

  },
};


var projects = [
  {name: "WanPada", src: Image6, url: "", github: "www.github.com", desc: "Application Mobile MVP de mise en relation", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "Events REST API", src: Image1, url: "www.google.fr", github: "www.github.com", desc: "API REST délivrant des évènements worldwide", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "Equally Work", src: Image3, url: "www.google.fr", github: "www.github.com", desc: "Landing page du vinqueur de Start-up Weekend 2018", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "TrombiQuizz", src: Image8, url: "www.google.fr", github: "www.github.com", desc: "Quizz pour trombinoscopes d'entreprises/écoles", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "BikeShop", src: Image2, url: "www.google.fr", github: "www.github.com", desc: "E-commerce de vélos avec module de paiement", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "WeatherApp", src: Image7, url: "www.google.fr", github: "www.github.com", desc: "Application web simple pour connaître la météo", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "Wailde", src: Image5, url: "www.google.fr", github: "www.github.com", desc: "Application web de team building d'entreprise", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "MovieApp", src: Image4, url: "www.google.fr", github: "www.github.com", desc: "Application web simple des dernières sorties de films", gitimage: GitHub, webimage: Web, videoimage: Play},
]

var projectsToDo = [
  {name: "BurgerShop", src: Image9, url: "www.google.fr", github: "www.github.com", desc: "E-commerce de Burger", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "Tech Project", src: Image12, url: "www.google.fr", github: "www.github.com", desc: "Projet Pro de référencement de techs", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "Sciences Po'wer", src: Image13, url: "www.google.fr", github: "www.github.com", desc: "Jeu type risk avec API Google Map", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "Tchat App", src: Image10, url: "www.google.fr", github: "www.github.com", desc: "Application web simple de tchat real-time", gitimage: GitHub, webimage: Web, videoimage: Play},
  {name: "Essential Oil App", src: Image11, url: "www.google.fr", github: "www.github.com", desc: "Projet Pro d'application huiles essentielles", gitimage: GitHub, webimage: Web, videoimage: Play},

]


class Apps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }



  render() {

    var projectsList = projects.map((project, index) =>
      <Grid alignContent="center" alignItems="center" item xs={12} sm={6} md={4}><AppItem key={index} name={project.name} image={project.src} url={project.url} github={project.github} desc={project.desc}/></Grid>)

    var projectsToDoList = projectsToDo.map((project, index) =>
      <Grid alignContent="center" alignItems="center" item xs={12} sm={6} md={4}><AppItem key={index} name={project.name} image={project.src} url={project.url} github={project.github} desc={project.desc}/></Grid>)


    // const { classes } = this.props;

    return (
      <div className="greybackapps">


        <h1 className="bigtitle">Done</h1>
        <h5>The links will soon be available...</h5>
        <Grid container spacing={24}>
          {projectsList}
        </Grid>
        <h1>To Do</h1>
        <h5>The links will soon be available...</h5>
          <Grid container spacing={24}>
            {projectsToDoList}
          </Grid>



      </div>
    );
  }
}




export default Apps;
