import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import Linkedin from './Icons/linkedin.png';
import Github from './Icons/github.png';
import Mail from './Icons/mail.png';

import {
  ModalWrapper, darkColor, goldColor, greyColor, lightColor} from '../../Styles/Styles';

class Socialmodal extends React.Component {

  render() {

    const { language, theme } = this.props;

    return (
      <div>
        <Modal size="lg" isOpen={this.props.modal} toggle={this.props.toggleSocialmodal} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleSocialmodal} style={theme._ === 'dark' ? styles.modalheaderdark : styles.modalheaderlight }>
            {
              language === 'English'
              ? 'Social'
              : language === 'Français'
              ? 'Réseaux sociaux'
              : null
            }
          </ModalHeader>
          <ModalBody style={styles.modaldisplay}>
            <Container fluid={true} style={styles.modaldisplay}>
              <Row style={styles.modaldisplay}>
                <Col onClick={this.props.toggleSocialmodal} md="12" lg="4" style={styles.modaldisplay}>
                  <a style={styles.modallink} target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/alexishessler/">
                      <ModalWrapper theme={theme._}>                      
                          <img style={styles.icons} src={Linkedin} alt="linkedin"/>
                          <h6>Linkedin</h6>                     
                      </ModalWrapper>
                    </a>
                </Col>
                <Col onClick={this.props.toggleSocialmodal} md="12" lg="4" style={styles.modaldisplay}>
                  <a style={styles.modallink} target="_blank" rel="noreferrer noopener" href="https://www.github.com/alexishessler">
                      <ModalWrapper theme={theme._}>                      
                          <img style={styles.icons} src={Github} alt="github"/>
                          <h6>Github</h6>                     
                      </ModalWrapper>
                    </a>
                </Col>
                <Col onClick={this.props.toggleSocialmodal} md="12" lg="4" style={styles.modaldisplay}>
                  <a style={styles.modallink} rel="noreferrer noopener" href="mailto:alexis.hessler@protonmail.com?subject=I would like to recruit you... :)">
                    <ModalWrapper theme={theme._}>                      
                        <img style={styles.icons} src={Mail} alt="mail"/>
                        <h6>Email</h6>                     
                    </ModalWrapper>
                  </a>
                </Col>
              </Row>
            </Container>
            {/* {
              language === 'English'
              ? <p>Social networks</p>
              : language === 'Français'
              ? <p>Réseaux sociaux</p>
              : null
            } */}
          </ModalBody>
          {/* <ModalFooter>
            <Button color="dark" onClick={this.props.toggleSocialmodal}>Close</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

const styles = {
  modaldisplay: {
    margin: 0,
    padding: 0,
  },
  displayicons: {
    width: '100%',
    backgroundColor: 'blue',
    margin: 0,
    padding: 30
  },
  icons: {
    width: 250,
    height: 250,
    padding: 40,
  },
  modalheaderdark: {
    backgroundColor: greyColor,
    borderBottom: 'none',
  },
  modalheaderlight: {
    backgroundColor: lightColor,
    borderBottom: 'none',
  },
  modallink: {
    outline: 'none',
    margin: 0,
    padding: 0,
    color: 'inherit',
    textDecoration: 'none'
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
)(Socialmodal);
