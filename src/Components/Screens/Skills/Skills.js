import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import data from './data';
import './skills.css';
import {
  goldColor,
  Btn,
  H2,
  H3,
  H4,
  VirginProgressStack,
  ProgressStack,
  Wrapper, 
  darkColor,
  lightColor} from '../../../Styles/Styles';
import Popover from './Popover/Popover';



class Skills extends React.Component {

  state = {
    selected: {
      front: true,
      back: false,
      team: false,
      security: false,
    },
    displayBars: ['front']
  }

  toogleSelect = (stack) => {
    // PREP THE LOGIC
    const selectedCopy = {...this.state.selected};
    const displayBarsCopy = [...this.state.displayBars];
    const index = displayBarsCopy.indexOf(stack);

    // DISPLAY THE APPROPRIATE BAR AT THE BOTTOM
    if(index === -1){ 
      displayBarsCopy.push(stack)
    } else {
      displayBarsCopy.splice(index, 1)
    }

    // COLOR THE BUTTON
    selectedCopy[stack] = !selectedCopy[stack];

    // EXECUTE
    this.setState({
      selected: selectedCopy,
      displayBars: displayBarsCopy
    })

  }

  render() {

    const { theme, language } = this.props;
    console.log(data)
    console.log(this.state.displayBars)

    // FRONTEND BARS
    let frontProgressBars = data.front.map((el, i) => {
      return(
       
          language === 'English'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.en.name}</H4>
              <Popover id={el.id} name={el.en.name} desc={el.en.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : language === 'Français'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.fr.name}</H4>
              <Popover id={el.id} name={el.fr.name} desc={el.fr.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : null
      )
    })

    // BACKEND BARS
    let backProgressBars = data.back.map((el, i) => {
      return(
       
          language === 'English'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.en.name}</H4>
              <Popover id={el.id} name={el.en.name} desc={el.en.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : language === 'Français'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.fr.name}</H4>
              <Popover id={el.id} name={el.fr.name} desc={el.fr.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : null
      )
    })

    // TEAM BARS
    let teamProgressBars = data.team.map((el, i) => {
      return(
       
          language === 'English'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.en.name}</H4>
              <Popover id={el.id} name={el.en.name} desc={el.en.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : language === 'Français'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.fr.name}</H4>
              <Popover id={el.id} name={el.fr.name} desc={el.fr.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : null
      )
    })

    // SECURITY BARS
    let securityProgressBars = data.security.map((el, i) => {
      return(
       
          language === 'English'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.en.name}</H4>
              <Popover id={el.id} name={el.en.name} desc={el.en.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : language === 'Français'
          ? <Col sm="12" md="6" key={i}>       
              <H4 style={styles.techName}>{el.fr.name}</H4>
              <Popover id={el.id} name={el.fr.name} desc={el.fr.description} color={theme._}/>
              <VirginProgressStack background={theme._} style={styles.divprogressbar}>
              <ProgressStack width={el.score} style={styles.progressbar}/>
              </VirginProgressStack>    
            </Col>
          : null
      )
    })

    const displayBars = [];
    const bars = this.state.displayBars
    for(let i = 0; i < bars.length; i++){
      if(bars[i] === "front"){
        displayBars.push(frontProgressBars)
      }
      if(bars[i] === "back"){
        displayBars.push(backProgressBars)
      }
      if(bars[i] === "team"){
        displayBars.push(teamProgressBars)
      }
      if(bars[i] === "security"){
        displayBars.push(securityProgressBars)
      }
    }

    // DISPLAY RENDER RETURN
    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
            {
              language === 'English'
                ? <div style={styles.display}>
                    <H2 shadow={theme._}>Tech Stack<span style={styles._}>_</span></H2>
                  </div>
                : language === 'Français'
                ? <div style={styles.display}>
                    <H2 shadow={theme._}>Compétences techniques<span style={styles._}>_</span></H2>
                  </div>
                : null
            }
            {
                language === 'English'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.front} onClick={() => this.toogleSelect('front')}>Front</Btn>
                  : language === 'Français'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.front} onClick={() => this.toogleSelect('front')}>Front</Btn>
                  : null
            }
            {
                language === 'English'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.back} onClick={() => this.toogleSelect('back')}>Back</Btn>
                  : language === 'Français'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.back} onClick={() => this.toogleSelect('back')}>Back</Btn>
                  : null
            }
            {
                language === 'English'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.team} onClick={() => this.toogleSelect('team')}>Team</Btn>
                  : language === 'Français'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.team} onClick={() => this.toogleSelect('team')}>Équipe</Btn>
                  : null
            }
            {
                language === 'English'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.security} onClick={() => this.toogleSelect('security')}>Security</Btn>
                  : language === 'Français'
                  ? <Btn width="100" theme={theme._} selected={this.state.selected.security} onClick={() => this.toogleSelect('security')}>Securité</Btn>
                  : null
            }
            <div>
              <Container fluid={true}>
                <Row>
                  {
                    displayBars
                  }
                  {/* {
                      this.state.selected.front
                      ? frontProgressBars
                      : ''
                  }
                  {
                      this.state.selected.back
                      ? backProgressBars
                      : ''
                  }
                  {
                      this.state.selected.team
                      ? teamProgressBars
                      : ''
                  }
                  {
                      this.state.selected.security
                      ? securityProgressBars
                      : ''
                  } */}
                </Row>
                <Row>
                  <Col sm="12" md="6">
                    <div style={styles.bottompicture}>
                      {/* <h1>PHOTO</h1> */}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

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
  screenlink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  divprogressbar: {
    position: 'relative',
  },
  progressbar: {
    position: 'absolute',
    zIndex: 2,
    left: -30,
    top: -20,
  },
  // techName: {
  //   marginTop: 20
  // }
  divprogressdisplay: {
    position: 'relative'
  },
  popoverdisplay: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 20,
    backgroundColor: goldColor,
    width: 30,
    height: 30,
    textAlign: 'center',
    borderRadius: '100%',
    color: darkColor,
    fontWeight: 'bolder',
    cursor: 'pointer'
  },
  bottompicture: {
    marginTop: 50,
    marginBottom: 50
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
)(Skills);
