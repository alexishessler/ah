import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
import {
  darkColor,
  lightColor,
  goldColor,
  Wrapper } from '../../../Styles/Styles';

class Experiences extends React.Component {


  render() {

    console.log("FROM EXPERIENCES")
    const { theme, language } = this.props;

    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
        {
          language === 'English'
          ? <h2>Experiences Component</h2>
          : language === 'Français'
          ? <h2>Composant Expériences</h2>
          : null
        }
        </Wrapper>
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
)(Experiences);
