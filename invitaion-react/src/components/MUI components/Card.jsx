import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function ImgMediaCard() {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
  return (
    <Card sx={{ maxWidth: 345, marginLeft: "5%", marginTop: "10%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/src/assets/react.svg"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
   <Box sx={{display:"flex",width:"300px"}}>
    <Typography sx={{fontFamily:"DM sans",fontSize:"15px",paddingLeft:"20px",fontWeight:"800"}}>
            50%
        </Typography>
      <Box sx={{ flexGrow: 1 ,width:"250px",paddingTop:"7px",color:"green",paddingLeft:"8px",height:"30px",}}>
        
     
      
      <BorderLinearProgress variant="determinate" color='success' value={50} sx={{
                  backgroundColor: '#e8e6e1',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#018416',
                    
                  },
                height:"8px"}}/>
    </Box></Box>
      <CardActions>
        <div className="buttn">
          <Button
            size="small"
            sx={{
              width: "50%",
              height: "50px",
              alignItems: "center",
              marginLeft: "25%",
              backgroundColor: "#36004E",
              color: "white",
              '&:hover': {
                backgroundColor: '#36004E', // Set the hover background color to be the same as the default background color
              },
              fontFamily: "DM Sans"
            }}
          >
            Upload media
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
