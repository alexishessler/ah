import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  darkColor,
  lightColor,
  goldColor,
  Btn,
  H1,
  H2,
  H3,
  Wrapper } from '../../../Styles/Styles';
import darkImage from './alexishessler-dark.png';
import lightImage from './alexishessler-light.png';



class Home extends React.Component {

  state = {
    
  }

  render() {

    console.log("FROM HOME")
    const { theme, language } = this.props;
    console.log(theme._)

    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
            {
              language === 'English'
                ? <div style={styles.display}>
                    <H2>Hello world, I'm Alexis Hessler<span style={styles._}>_</span></H2>
                    <H3>Welcome to my online universe<span style={styles._}>_</span></H3>
                  </div>
                : language === 'Français'
                ? <div style={styles.display}>
                    <H2>Salut le monde, je suis Alexis Hessler<span style={styles._}>_</span></H2>
                    <H3>Bienvenue dans mon univers en ligne<span style={styles._}>_</span></H3>
                  </div>
                : null
            }
          <div style={theme._ === 'dark' ? styles.darkhome : styles.lighthome}>
            {
                language === 'English'
                  ? <Link style={styles.screenlink} to='/skills'><Btn width="200">Discover now</Btn></Link>
                  : language === 'Français'
                  ? <Link style={styles.screenlink} to='/skills'><Btn width="200">Découvrir maintenant</Btn></Link>
                  : null
            }
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
  darkhome: {
    backgroundImage: `url("${darkImage}")`,
    backgroundPosition: 'top right',
    backgroundSize: 'cover',
    minHeight: '90vh',
    width: '100%',
  },
  lighthome: {
    backgroundImage: `url("${lightImage}")`,
    backgroundPosition: 'top right',
    backgroundSize: 'cover',
    minHeight: '90vh',
    width: '100%',
  },
  screenlink: {
    textDecoration: 'none',
    color: 'inherit',
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
