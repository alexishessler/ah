import React from 'react';
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

import {
  darkColor,
  lightColor,
  goldColor,
  BtnNav } from '../../../Styles/Styles';

class Navigation extends React.Component {

    toogleTheme = (theme) => {
      const selected = theme.target.value;
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
            <Nav className="ml-auto" navbar>
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
                    <option>Dark Theme</option>
                    <option>Light Theme</option>
                  </Input>
                </FormGroup>
              </NavItem>
            </Nav>
        </Navbar>

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
