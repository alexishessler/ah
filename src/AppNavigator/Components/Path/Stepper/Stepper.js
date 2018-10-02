import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import  '../Path.css';

import Image1 from './Images/alexis.png';
import Image2 from './Images/lacapsule.png';
import Image3 from './Images/cybel.svg';
import Image4 from './Images/lafarge.png';
import Image5 from './Images/armees.png';

const styles = theme => ({
  root: {
    width: '98%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  dark: {
    backgroundColor: "black",
    color: "black",
  },
  iconContainer: {
    backgroundColor: "black",
    color: "black",
  }
});

function getSteps() {
  return ['Sept 2018 - Current', 'Apr 2018 - Jun 2018', 'Aug 2015 - Current', 'Sept 2017 - Apr 2018', 'Aug 2016 - Sept 2017'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className="itemstepper">
          <div>
            <h2>Teacher Assistant</h2>
            <h3>La Capsule Academy</h3>
          </div>
          <Grid container spacing={24}>
            <Grid alignContent="center" alignItems="center" md={4}>
              <img className="imgstepper" src={Image2} alt="test"/>
            </Grid>
            <Grid alignContent="center" alignItems="center" md={8}>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon>Création de quiz et QCM sur le back-office de la plateforme interne de La Capsule</p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon>Explications de concepts de programmation pour 25 élèves et relecture de code et correction de bugs</p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon>Accompagnement de projets en méthode AGILE</p>
            </Grid>
          </Grid>

        </div>
            );
    case 1:
      return (
        <div className="itemstepper">
          <div>
            <h2>Formation intensive / 10 weeks bootcamp </h2>
            <h3>La Capsule Academy</h3>
          </div>
          <Grid container spacing={24}>
            <Grid alignContent="center" alignItems="center" md={4}>
              <img className="imgstepper" src={Image2} alt="test"/>
            </Grid>
            <Grid alignContent="center" alignItems="center" md={8}>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>Apprentissage intensive en bootcamp pour devenir développeur FullStack JavaScript</strong></p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>Elaboration en équipe de 2 projets :</strong> création d'une plateforme web et application mobile de type plateforme sociale</p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>Stack tech:</strong> ReactJS - Express - Redux - React Native (Mobiles) - NodeJS - MongoDB - Javascript Frontend - APIs conception - HTML5 - CSS - Bootstrap - Git - Github</p>
            </Grid>
          </Grid>

        </div>
            );
    case 2:
      return (
        <div className="itemstepper">
          <div>
            <h2>Military Reserve Officer - Second Lieutenant</h2>
            <h3>Ministère des Armées</h3>
          </div>
          <Grid container spacing={24}>
            <Grid alignContent="center" alignItems="center" md={4}>
              <img className="imgstepper" src={Image5} alt="test"/>
            </Grid>
            <Grid alignContent="center" alignItems="center" md={8}>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>SECTION CHIEF (Second Lieutenant) @French Air Force:</strong> Supervising team leader  - Section chief (Military reservists - FMIR) - Teached theoretical military courses (security clearances, legal framework of the legitimate defense, handling of weapons...) - Organized military practical activities (night topographic raid, FAMAS shooting...)</p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>WATCH AND ANALYSIS - INTERNATIONAL RELATIONS @French Air Force:</strong> Produced and presented briefing notes to military authorities of  - One-off military activities</p>
            </Grid>
          </Grid>

        </div>
            );
    case 3:
      return (
        <div className="itemstepper">
          <div>
            <h2>Cyber Risk Account Manager</h2>
            <h3>CybelAngel</h3>
          </div>
          <Grid container spacing={24}>
            <Grid alignContent="center" alignItems="center" md={4}>
              <img className="imgstepper" src={Image3} alt="test"/>
            </Grid>
            <Grid alignContent="center" alignItems="center" md={8}>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>CybelAngel is a cybersecurity start-up company.</strong> Our innovative solution is designed to help companies detect data leaks and technical threats in real time. Our proprietary Big Data algorithm enables us to detect threats on the Deep and Dark Web. The collected data is then automatically filtered and analyzed by our team of analysts. The information exposed below is freely available</p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>Bid Data Analysis:</strong> Conducted in-depth threat intelligence investigations on the Clear, Deep & Dark web, through high frequency crawlers and connected devices massive scanners - Risk assessment : competitive intelligence, physical security, social engineering, (spear)phishing, network penetration)  - Performed code vulnerabilty analysis (detection of credentials, SQL injections...) - Written highly sensitive incident reports (million dollars alerts)</p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>Clients portfolio management:</strong> In charge of the cyber risks management relationship regarding 3 key clients (French CAC 40) - Monitored regular steering committee </p>
            </Grid>
          </Grid>

        </div>
            );
    case 4:
      return (
        <div className="itemstepper">
          <div>
            <h2>Deputy France Security Manager</h2>
            <h3>LafargeHolcim</h3>
          </div>
          <Grid container spacing={24}>
            <Grid alignContent="center" alignItems="center" md={4}>
              <img className="imgstepper" src={Image4} alt="test"/>
            </Grid>
            <Grid alignContent="center" alignItems="center" md={8}>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>CRISIS MANAGEMENT:</strong> Managed the elaboration of the Crisis Management Plan (PGC) and Business Continuity Plan (BCP) - Established crisis alert procedures - Triggered crisis alerts - Participated in the Lafarge France Crisis Cell as an operational crisis management assistant (ExCo..., Head of security, com...) - Programmed VBA operational crisis management tools - Monitored security analysis (created and maintained a real-time media monitoring device) - Assessed risks and weak signals, and redacted Monthly Security Reports</p>
              <p className="paragraphstepper"><Icon style={{color: "#727581"}} className="iconstepper">check_box</Icon><strong>SECURITY OF PREMISES AND PEOPLE:</strong> Performed security audits (offices and quarries) - Participated in the management of the relationship with the local security providers - Written a traveler security manual (Group policies implementation) - Co-conducted an intrusion test - Developped a mapping for the France part (sites, diplomatic representations on the territory, gendarmeries brigades and police stations) with a goal of collaborative medium-term maintenance - Helped the development of an intelligence reporting tool (declaration of security incident / fraud) - Animated internal security awareness conferences, cyber-risks and social networks</p>
            </Grid>
          </Grid>

        </div>
            );
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;


    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical" style={{backgroundColor: "#F1F3F4"}}>
          {steps.map((label, index) => {
            return (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                        style={{backgroundColor: "#F1F3F4"}}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        style={{backgroundColor: "#727581"}}
                      >
                        {activeStep === steps.length - 1 ? 'And now...' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography><p><strong>Your company, your project? A Full-Time job? I am available! Feel free to contact me =)</strong></p></Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
