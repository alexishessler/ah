import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import {
  darkColor,
  lightColor,
  goldColor,
  Wrapper } from '../../Styles/Styles';

class Socialmodal extends React.Component {

  render() {

    console.log("FROM SOCIAL MODAL")
    const { theme, language } = this.props;

    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggleSocialmodal} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleSocialmodal}>
            {
              language === 'English'
              ? 'Social'
              : language === 'Français'
              ? 'Réseaux sociaux'
              : null
            }
          </ModalHeader>
          <ModalBody>
            {
              language === 'English'
              ? <p>Social networks</p>
              : language === 'Français'
              ? <p>Réseaux sociaux</p>
              : null
            }
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.props.toggleSocialmodal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
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
