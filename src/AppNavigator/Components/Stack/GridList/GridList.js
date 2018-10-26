import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import tileData from './tileData';

import Image1 from './Images/javascript.png';
import Image2 from './Images/react.png';
import Image3 from './Images/reactnative.png';
import Image4 from './Images/redux.png';
import Image5 from './Images/nodejs.jpg';
import Image6 from './Images/mongodb.png';
import Image7 from './Images/git.png';
import Image8 from './Images/github.png';
import Image9 from './Images/html5.png';
import Image10 from './Images/css3.png';

var tileData = [
  {
    img: Image1,
    title: 'JavaScript',
    author: 'author',
    featured: true,
  },
  {
    img: Image2,
    title: 'React',
    author: 'author',
    featured: false,
  },
  {
    img: Image3,
    title: 'React Native',
    author: 'author',
    featured: false,
  },
  {
    img: Image4,
    title: 'Redux',
    author: 'author',
    featured: false,
  },
  {
    img: Image5,
    title: 'NodeJS',
    author: 'author',
    featured: false,
  },
  {
    img: Image6,
    title: 'MongoDB',
    author: 'author',
    featured: true,
  },
  {
    img: Image7,
    title: 'Git',
    author: 'author',
    featured: true,
  },
  {
    img: Image8,
    title: 'GitHub',
    author: 'author',
    featured: true,
  },
  {
    img: Image9,
    title: 'HTML5',
    author: 'author',
    featured: false,
  },
  {
    img: Image10,
    title: 'CSS3',
    author: 'author',
    featured: false,
  },
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "500px",
    height: '100vh',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{backgroundColor: "#F1F3F4"}}>
      <GridList style={{backgroundColor: "#F1F3F4"}} cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);

// actionIcon={
//   <IconButton className={classes.icon}>
//     <StarBorderIcon />
//   </IconButton>
// }
// actionPosition="left"
