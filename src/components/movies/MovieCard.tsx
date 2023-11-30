import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cinema1 from '../../assetes/images/cinema1.jpg';
import { IMovie } from '../../types/movie';

export default function MovieCard({title,year,imageUrl,description}:IMovie) {
  return (
    <Card sx={{ height:'100%', padding:'10px'  }}>
      <CardMedia
        sx={{ maxHeight: 640, minHeight:500}}
        // image={cinema1}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} ({year})
        </Typography>
    
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

