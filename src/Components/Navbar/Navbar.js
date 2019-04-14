import React from 'react';
import Socialmodal from './Socialmodal';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  FormGroup,
  Input, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';

import {
  darkColor,
  lightColor,
  goldColor,
  BtnNav } from '../../Styles/Styles';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false
    };
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleSocialmodal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toogleTheme = (theme) => {
    let selected = theme.target.value;
    this.props.settheme(selected)
  }

  toogleLanguage = (language) => {
    const selected = language.target.value;
    this.props.setlanguage(selected)
  }

  render() {

    const { theme, language } = this.props;

    return (
      <div>
        <Navbar expand="lg" style={theme._ === 'dark' ? styles.navdark : styles.navlight }>
          <h1 style={styles.navtitle}><Link style={theme._ === 'dark' ? styles.navlinkdark : styles.navlinklight} to="/"><span style={styles.spantitle}>@</span>alexishessler</Link></h1>
          <NavbarToggler style={{padding: 0, margin: 0}}>
            <div onClick={this.toggleNavbar}>
              {
                this.state.isOpen
                ? <BtnNav background={theme._} color={theme._}>
                    {
                      theme._ === 'dark'
                      ? <img style={{width: 20}} alt="menuicon" src="../../icons/closelight.png"/>
                      : <img style={{width: 20}} alt="menuicon" src="../../icons/closedark.png"/>
                    }
                  </BtnNav>
                : <BtnNav background={theme._} color={theme._}>
                    {
                      theme._ === 'dark'
                      ? <img style={{width: 20}} alt="menuicon" src="../../icons/menulight.png"/>
                      : <img style={{width: 20}} alt="menuicon" src="../../icons/menudark.png"/>
                    }
                  </BtnNav>
              }
            </div></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{paddingTop: 20, paddingRight: 10}}>
                <Link style={theme._ === 'dark' ? styles.navlinkdark : styles.navlinklight} to="/skills">
                {
                  language === 'English'
                  ? 'Skills'
                  : language === 'Français'
                  ? 'Compétences'
                  : null
                }
                </Link>
              </NavItem>
              <NavItem style={{paddingTop: 20, paddingRight: 10}}>
                <Link style={theme._ === 'dark' ? styles.navlinkdark : styles.navlinklight} to="/experiences">
                {
                  language === 'English'
                  ? 'Experiences'
                  : language === 'Français'
                  ? 'Expériences'
                  : null
                }
                </Link>
              </NavItem>
              <NavItem style={{paddingTop: 20, paddingRight: 10}}>
                <Link style={theme._ === 'dark' ? styles.navlinkdark : styles.navlinklight} to="/portfolio">
                {
                  language === 'English'
                  ? 'Portfolio'
                  : language === 'Français'
                  ? 'Réalisations'
                  : null
                }
                </Link>
              </NavItem>
              <NavItem style={{paddingTop: 20, paddingRight: 10}}>
                <p style={theme._ === 'dark' ? styles.navlinkdark : styles.navlinklight} href="#" onClick={this.toggleSocialmodal}>
                {
                  language === 'English'
                  ? 'Social'
                  : language === 'Français'
                  ? 'Réseaux'
                  : null
                }
                </p>
              </NavItem>
              <NavItem style={{paddingTop: 12, marginRight: 10, width: '120px'}}>
                <FormGroup>
                  <Input style={theme._ === 'dark' ? styles.navinputdark : styles.navinputlight} className="navfocus" type="select" name="language" id="languageSelect" defaultValue={language} onChange={(value) => this.toogleLanguage(value)}>
                    <option>English</option>
                    <option>Français</option>
                  </Input>
                </FormGroup>
              </NavItem>
              <NavItem style={{paddingTop: 12, width: '120px'}}>
                <FormGroup>
                  <Input style={theme._ === 'dark' ? styles.navinputdark : styles.navinputlight} className="navfocus" type="select" name="theme" id="themeSelect" defaultValue={theme.name} onChange={(value) => this.toogleTheme(value)}>
                    <option>{ language === 'English' ? 'Dark Theme' : 'Thème Dark'}</option>
                    <option>{ language === 'English' ? 'Light Theme' : 'Thème Light'}</option>
                  </Input>
                </FormGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Socialmodal
          toggleSocialmodal={this.toggleSocialmodal}
          modal={this.state.modal}/>
      </div>
    );
  }
}

const styles = {
  navdark: {
    backgroundColor: darkColor,
    color: lightColor,
    boxShadow: '5px 5px 5px #000000',
  },
  navlight: {
    backgroundColor: lightColor,
    color: darkColor,
    boxShadow: '5px 5px 5px #E5E5E5',
  },
  navlinkdark: {
    textDecoration: 'none',
    color: lightColor,
    marginRight: 10,
    cursor: 'pointer',
  },
  navlinklight: {
    textDecoration: 'none',
    color: darkColor,
    marginRight: 10,
    cursor: 'pointer',
  },
  navinputdark: {
    backgroundColor: darkColor,
    color: lightColor,
    border: `1px solid ${goldColor}`,
    cursor: 'pointer',
  },
  navinputlight: {
    backgroundColor: lightColor,
    color: darkColor,
    border: `1px solid ${goldColor}`,
    cursor: 'pointer',
  },
  navtitle: {
    fontSize: 26
  },
  spantitle: {
    fontWeight: 'lighter',
    color: goldColor,
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    language: state.language
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    settheme: (theme) => {
      dispatch({
        type: 'settheme',
        theme
      })
    },
    setlanguage: (language) => {
      dispatch({
        type: 'setlanguage',
        language
      })
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
