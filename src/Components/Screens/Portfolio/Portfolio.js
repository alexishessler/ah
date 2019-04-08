import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
import {
  darkColor,
  lightColor,
  goldColor,
  Wrapper } from '../../../Styles/Styles';

class Portfolio extends React.Component {


  render() {

    console.log("FROM PORTFOLIO")
    const { theme, language } = this.props;

    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
        {
          language === 'English'
          ? <h2>Portfolio Component</h2>
          : language === 'Français'
          ? <h2>Composant Réalisations</h2>
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
)(Portfolio);
