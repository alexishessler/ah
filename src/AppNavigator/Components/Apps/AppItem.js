import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

          <Card style={styles.card} key={this.props.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className=""
                    image={this.props.image}
                    title={this.props.name}
                  />
                <CardContent className={styles.size}>
                    <Typography gutterBottom variant="headline" component="h2">
                      {this.props.name}
                    </Typography>
                    <Typography component="p" style={styles.size}>
                      {this.props.desc}
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
