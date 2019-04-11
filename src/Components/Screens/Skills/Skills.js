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
  Wrapper } from '../../../Styles/Styles';


class Skills extends React.Component {

  state = {
    selected: {
      front: true,
      back: false,
      devops: false,
      security: false,
    }
  }

  toogleSelect = (stack) => {
    const selectedCopy = {...this.state.selected};
    selectedCopy[stack] = !selectedCopy[stack]
    this.setState({
      selected: selectedCopy
    })
  }


  render() {

    const { theme, language } = this.props;
    console.log(data)

    // FRONTEND BARS
    let frontProgressBars = data.front.map((el, i) => {
      return(
        <Col sm="12" md="6">
          <div>
            <H4 style={styles.techName}>{el.en.name}</H4>
            <VirginProgressStack background={theme._} style={styles.divprogressbar}>
            <ProgressStack width={el.score} style={styles.progressbar}/>
            </VirginProgressStack>
          </div>
        </Col>
      )
    })

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
                  ? <Btn width="100" selected={this.state.selected.front} onClick={() => this.toogleSelect('front')}>Front</Btn>
                  : language === 'Français'
                  ? <Btn width="100" selected={this.state.selected.front} onClick={() => this.toogleSelect('front')}>Front</Btn>
                  : null
            }
            {
                language === 'English'
                  ? <Btn width="100" selected={this.state.selected.back} onClick={() => this.toogleSelect('back')}>Back</Btn>
                  : language === 'Français'
                  ? <Btn width="100" selected={this.state.selected.back} onClick={() => this.toogleSelect('back')}>Back</Btn>
                  : null
            }
            {
                language === 'English'
                  ? <Btn width="100" selected={this.state.selected.devops} onClick={() => this.toogleSelect('devops')}>DevOps</Btn>
                  : language === 'Français'
                  ? <Btn width="100" selected={this.state.selected.devops} onClick={() => this.toogleSelect('devops')}>DevOps</Btn>
                  : null
            }
            {
                language === 'English'
                  ? <Btn width="100" selected={this.state.selected.security} onClick={() => this.toogleSelect('security')}>Security</Btn>
                  : language === 'Français'
                  ? <Btn width="100" selected={this.state.selected.security} onClick={() => this.toogleSelect('security')}>Securité</Btn>
                  : null
            }
            <div>
              <Container fluid="true">
              {
                  this.state.selected.front
                  ? frontProgressBars
                  : ''
              }
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
