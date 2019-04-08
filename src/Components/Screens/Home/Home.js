import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
import {
  darkColor,
  lightColor,
  goldColor,
  Wrapper } from '../../../Styles/Styles';

import darkImage from './alexishessler-dark.png'

class Home extends React.Component {


  render() {

    console.log("FROM HOME")
    const { theme, language } = this.props;

    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
          <div style={styles.home}>
            {
              language === 'English'
              ? <h2>Home Component</h2>
              : language === 'Français'
              ? <h2>Composant Acceuil</h2>
              : null
            }
          </div>
        </Wrapper>
      </div>
    );
  }
}

const styles = {
  home: {
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
)(Home);
