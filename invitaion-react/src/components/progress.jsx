import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { green } from '@mui/material/colors';

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

// Inspired by the former Facebook spinners.


export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 ,width:"300px",paddingTop:"0px",color:"green",paddingLeft:"20px"}}>
     
      
      <BorderLinearProgress variant="determinate" color='success' value={50} sx={{
                  backgroundColor: 'white',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#018416'
                  }
                }}/>
    </Box>
  );
}