import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import './Jumbotron.css';



const styles = {
  card: {
    minWidth : "100%",
  },
  media: {
    height: 100,
  },
};

class Apps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }



  render() {

    // const { classes } = this.props;


    return (
      <div className="">

          <Card className={styles.card} key={this.props.key}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={styles.media}
                    image={this.props.image}
                    title={this.props.name}
                  />
                <CardContent className={styles.size}>
                    <Typography gutterBottom variant="headline" component="h2">
                      {this.props.name}
                    </Typography>
                    <Typography component="p">
                      <div className={styles.size}>{this.props.desc}</div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{display: "inline"}}>
                      <Button  size="small" style={{color: "#4154AF"}}>
                        Discover
                      </Button>
                </CardActions>
              </Card>


      </div>
    );
  }
}




export default Apps;
