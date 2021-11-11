import { Card, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DreamCarCard = ({ car }) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={car.picture}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {car.name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" gutterBottom component="div">
                        Price: ${car.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {car.details.slice(0, 110)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ fontWeight: 'bold' }} variant="outlined">Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default DreamCarCard;