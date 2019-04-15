import React from 'react'
import { connect } from 'react-redux';
import {
  goldColor,
  darkgreyColor,
  greyColor} from '../../../Styles/Styles';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Badge } from 'reactstrap';

class SmallProjects extends React.Component {


  render() {

    const { theme } = this.props;

    let stackFront = this.props.stack_front.map((e, i) => {
      return(
        <Badge key={i} color="secondary" style={{padding: 5, margin: 5}}>{e}</Badge>
      )
    })

    let stackBack = this.props.stack_back.map((e, i) => {
      return(
        <Badge key={i} color="secondary" style={{padding: 5, margin: 5}}>{e}</Badge>
      )
    })

    return (
        <Col xs="12" md="6" lg="4">
          <div>
            <Card style={{marginBottom: 10, marginTop: 20}}>
            <div style={{backgroundColor: darkgreyColor, display:"flex", justifyContent: 'center', alignItems: 'center'}}>
              <CardImg top style={{width: '50%', padding: 20}} src={this.props.pic_url} alt="Card image cap" />
            </div>
              <CardBody style={theme._ === 'dark' ? styles.cardbodydark : styles.cardbodylight}>
                <CardTitle style={{fontWeight: "bold", fontSize: 18}}>{this.props.name}</CardTitle>
                <CardSubtitle style={{minHeight: 50, marginBottom: 10}}>{this.props.desc}</CardSubtitle>
                <CardText><span style={{fontWeight: 'bold'}}>Stack Front</span> <br/><span>{stackFront}</span></CardText>
                <CardText><span style={{fontWeight: 'bold'}}>Stack Back</span> <br/><span>{stackBack}</span></CardText>
              </CardBody>
            </Card>
          </div>
        </Col>
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
  cardbodydark: {
    backgroundColor: darkgreyColor, 
    minHeight: 300
  },
  cardbodylight: {
    backgroundColor: greyColor, 
    minHeight: 300
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
)(SmallProjects);
