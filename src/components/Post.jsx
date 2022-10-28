import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';

const Post = ({img}) => {
    return (
        <Box >
        <Card sx={{margin:'10px'}}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        B
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVert />
      </IconButton>
    }
    title="Borhan"
    subheader={`${new Date().getDate()} - ${new Date().getMonth()+1} - ${new Date().getFullYear()}`}
  />
  <CardMedia
    component="img"
    height="250"
    image={img}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
    </IconButton>
    <IconButton aria-label="share">
      <Share />
    </IconButton>
  </CardActions>
 
</Card>
    </Box>
    );
};

export default Post;