import React from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  goldColor,
  BtnHome,
  H2,
  H3,
  Wrapper } from '../../../Styles/Styles';
import darkImage from './ui/alexishessler-dark.png';
import lightImage from './ui/alexishessler-light.png';



class Home extends React.Component {

  state = {
    
  }

  render() {

    const { theme, language } = this.props;

    return (
      <div>
        <Navbar/>
        <Wrapper background={theme._} color={theme._}>
          <div style={theme._ === 'dark' ? styles.darkhome : styles.lighthome}>
            {
              language === 'English'
                ? <div style={styles.display}>
                    <H2 shadow={theme._}>Hello world, I'm Alexis Hessler<span style={styles._}>_</span></H2>
                    <H3 shadow={theme._}>Welcome to my online universe<span style={styles._}>_</span></H3>
                  </div>
                : language === 'Français'
                ? <div style={styles.display}>
                    <H2 shadow={theme._}>Salut le monde, je suis Alexis Hessler<span style={styles._}>_</span></H2>
                    <H3 shadow={theme._}>Bienvenue dans mon univers en ligne<span style={styles._}>_</span></H3>
                  </div>
                : null
            }
            {
                language === 'English'
                  ? <Link style={styles.screenlink} to='/skills'><BtnHome width="200">Discover now</BtnHome></Link>
                  : language === 'Français'
                  ? <Link style={styles.screenlink} to='/skills'><BtnHome width="200">Découvrir maintenant</BtnHome></Link>
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
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '90vh',
    width: '100%',
  },
  lighthome: {
    backgroundImage: `url("${lightImage}")`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
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
