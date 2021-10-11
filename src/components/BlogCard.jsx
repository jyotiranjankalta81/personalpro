import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Image from '../Assets/gallerycardimg/img7.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 781,
    border:15,
    // marginRight:"90px",
    marginLeft:"30px",
    // borderRight:"20px",
    // height:400,
    // backgroundImage:`url(${Image})`
  },
  media: {
    height: 0,
    paddingTop: '43.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  newstext:{
      spacing:8,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BlogCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Jyoti Ranjan Kalta"
        subheader="September 11, 2021"
      />
      <CardMedia
        className={classes.media}
        image={Image}
        title="Paella dish"
      />
      {/* <Typography variant="body1" component="h2" align="left">
          News
        </Typography> */}
      <CardContent>
      <Typography variant="body1" component="textPrimary" align="left">
          Beacons closes $6M seed round led  by a16z
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
        {/* <Typography variant="body2" color="textPrimary" component="p">
          4 months ago • 2 min read
        </Typography> */}
    
    </Card>
  );
}
