import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import data from './data';
import {
  goldColor,
  BtnHome,
  H2,
  Wrapper, 
  darkColor,
  greyColor,
  darkgreyColor,
  lightColor} from '../../../Styles/Styles';

class Experiences extends React.Component {

  state = {
    step: 0,
    totalsteps: data.length,
    experience: data[0]
  }

  next = () => {
    if(this.state.step !== this.state.totalsteps -1){
      this.setState({
        step: this.state.step + 1,
        experience: data[this.state.step+1]
      })
    }   
  }

  previous = () => {
    if(this.state.step !== 0){
      this.setState({
        step: this.state.step - 1,
        experience: data[this.state.step-1]
      })  
    }
  }

  render() {

    const { theme, language } = this.props;

    const displayExperience = (
      <div>     
          {
          language === 'English'
            ? <div>
                <div style={styles.headerexperience}>
                  <img style={styles.logocompany} src={require(`${this.state.experience.en.img}`)} alt={this.state.experience.en.company}/>
                    <div>
                      <h4>{this.state.experience.en.company}<span style={styles._}>_</span></h4>
                      <h5>{this.state.experience.en.title}</h5>
                      <h6>{this.state.experience.en.date}</h6>
                    </div>
                </div>
                <ul style={styles.li}> 
                { 
                  this.state.experience.en.desc.map((el, i) => {
                    return(
                      <li key={i}>{el}</li>
                    )
                  }) 
                }
                </ul>
              </div>
            : language === 'Français'
            ? <div>
                <div style={styles.headerexperience}>
                  <img style={styles.logocompany} src={require(`${this.state.experience.en.img}`)} alt={this.state.experience.en.company}/>
                    <div>
                      <h4>{this.state.experience.fr.company}<span style={styles._}>_</span></h4>
                      <h5>{this.state.experience.fr.title}</h5>
                      <h6>{this.state.experience.fr.date}</h6>
                    </div>
                </div>
                <ul style={styles.li}> 
                { 
                  this.state.experience.fr.desc.map((el, i) => {
                    return(
                      <li key={i}>{el}</li>
                    )
                  }) 
                }
                </ul>
              </div>
            : null
          }     
      </div>
    )


    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
        {
          language === 'English'
            ? <div style={styles.display}>
                <H2 shadow={theme._}>Experiences<span style={styles._}>_</span></H2>
              </div>
            : language === 'Français'
            ? <div style={styles.display}>
                <H2 shadow={theme._}>Expériences<span style={styles._}>_</span></H2>
              </div>
            : null
        }
        {
            language === 'English'
              ? <BtnHome onClick={this.previous} width="120">Previous</BtnHome>
              : language === 'Français'
              ? <BtnHome onClick={this.previous} width="120">Précédante</BtnHome>
              : null
        }
        {
            language === 'English'
              ? <BtnHome onClick={this.next} width="120">Next</BtnHome>
              : language === 'Français'
              ? <BtnHome onClick={this.next} width="120">Suivante</BtnHome>
              : null
        }
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <div style={styles.displayterminal}>
                <div style={styles.redbutton}></div>
                <div style={styles.orangebutton}></div>
                <div style={styles.greenbutton}></div>
                <div style={theme._ === 'dark' ? styles.titleterminaldisplaydark : styles.titleterminaldisplaylight}>
                  <h6 style={theme._ === 'dark' ? styles.titleterminaldark : styles.titleterminallight}>
                  {
                    language === 'English'
                      ? 'Experiences - Bash - Alexis Hessler - EN'
                      : language === 'Français'
                      ? 'Expériences - Bash - Alexis Hessler - FR'
                      : null
                  }
                  </h6>
                </div>
                <div style={theme._ === 'dark' ? styles.titleterminaldisplaycontentdark : styles.titleterminaldisplaycontentlight}>
                  {
                    displayExperience
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </Wrapper>
      </div>
    );
  }
}

const styles = {
  _ : {
    fontWeight: "lighter",
    color: goldColor
  },
  display: {
    paddingTop: 20,
  },
  displayterminal: {
    display: 'block',
    margin: 'auto',
    marginTop: 50,
    maxWidth: '630px',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.8) 0px 20px 70px',
    clear: 'both',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 50
  },
  titleterminaldisplaydark: {
    backgroundColor: lightColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  titleterminaldark: {
    color: darkColor,
    fontSize: 14.5
  },
  titleterminaldisplaylight: {
    backgroundColor: greyColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  titleterminallight: {
    color: darkColor,
    fontSize: 14.5
  },
  titleterminaldisplaycontentdark: {
    backgroundColor: darkgreyColor,
    padding: 10,
    minHeight: 300
  },
  titleterminaldisplaycontentlight: {
    backgroundColor: lightColor,
    padding: 10,
    minHeight: 300
  },
  redbutton: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
    borderRadius: '100%',
    position: 'absolute',
    top: 10,
    left: 10,
    cursor: 'pointer'
  },
  orangebutton: {
    width: 15,
    height: 15,
    backgroundColor: 'orange',
    borderRadius: '100%',
    position: 'absolute',
    top: 10,
    left: 30,
    cursor: 'pointer'
  },
  greenbutton: {
    width: 15,
    height: 15,
    backgroundColor: 'green',
    borderRadius: '100%',
    position: 'absolute',
    top: 10,
    left: 50,
    cursor: 'pointer'
  },
  logocompany: {
    width: 100,
    height: 100,
    borderRadius: '100%',
    margin: 20,
  },
  headerexperience: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'bottom',
  },
  li: {
    marginTop: 20
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    language: state.language
  }
}

export default connect(
    mapStateToProps,
    null,
)(Experiences);
