import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import data from './data';
import {
  goldColor,
  H2,
  H3,
  Wrapper} from '../../../Styles/Styles';
import SmallProject from './SmallProject';
import Bigproject from './BigProject';


class Portfolio extends React.Component {

  state={
    smallProjects: [],
    bigProjects: []
  }

  componentWillMount = () => {
    fetch("https://capsule-exams.herokuapp.com/api/capsule/projects")
    .then(response => response.json())
    .then(data => {
      this.setState({
        smallProjects: data.projects
      })
    })
    .catch(err => console.log(err))

  }

  render() {

    const { theme, language } = this.props;

    const small_projects = this.state.smallProjects;

    const small_projects_list = small_projects.map((project, i) => {
        return(
          <SmallProject
            name={project.name}
            desc={project.desc}
            pic_url={project.pic_url}
            stack_back={project.stack_back}
            stack_front={project.stack_front}
            idproject={project.idproject}
            key={i}/>
        )
    });


    const big_projects_list = data.map((project, i) => {
        return(
          <Bigproject
            name={project.name}
            desc={language === 'English' ? project.desc_en : project.desc_fr}
            pic_url={project.pic_url}
            stack_back={project.stack_back}
            stack_front={project.stack_front}
            idproject={project.idproject}
            key={i}/>
        )
    });


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
        {
          language === 'English'
            ? <div style={styles.display}>
                <H3 shadow={theme._}>Big projects<span style={styles._}>_</span></H3>
              </div>
            : language === 'Français'
            ? <div style={styles.display}>
                <H3 shadow={theme._}>Projets importants<span style={styles._}>_</span></H3>
              </div>
            : null
        }
        <Container>
          <Row>
            {
              big_projects_list
            }
          </Row>
        </Container>
        {
              language === 'English'
                ? <div style={styles.display}>
                    <H3 shadow={theme._}>Small projects<span style={styles._}>_</span></H3>
                  </div>
                : language === 'Français'
                ? <div style={styles.display}>
                    <H3 shadow={theme._}>Petits projets<span style={styles._}>_</span></H3>
                  </div>
                : null
        }
        <Container>
          <Row>
            {
              small_projects_list
            }
          </Row>
        </Container>
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
