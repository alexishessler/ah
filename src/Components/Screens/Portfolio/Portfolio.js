import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
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

class Portfolio extends React.Component {


  render() {

    const { theme, language } = this.props;

    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
        {
          language === 'English'
            ? <div style={styles.display}>
                <H2 shadow={theme._}>Portfolio<span style={styles._}>_</span></H2>
              </div>
            : language === 'Français'
            ? <div style={styles.display}>
                <H2 shadow={theme._}>Réalisations<span style={styles._}>_</span></H2>
              </div>
            : null
        }
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
