import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Button, Card, CardActions, CardMedia } from '@mui/material';
import { Templetes } from '../template';
import { Link } from 'react-router-dom';
import ImgMediaCard from './Card';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(() => {
    // Retrieve the stored value from localStorage or use a default value
    return parseInt(localStorage.getItem('tabValue')) || 0;
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    // Store the current value in localStorage
    localStorage.setItem('tabValue', value.toString());
  }, [value]);
  return (
    <Box sx={{ width: '90%', boxSizing: "border-box", marginLeft: "5%" }}>
      <Box sx={{ borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: 'transparent',color:"purple" } }} // Set background color for active tab
        >
          <Tab label="Home page " {...a11yProps(0)} sx={{ backgroundColor: "white", borderRadius: "10px", border: "1px #36004E solid" ,margin:"10px"}}  />
          <Tab label="About Couple" {...a11yProps(1)} sx={{ backgroundColor: "white", borderRadius: "10px", border: "1px #36004E solid",margin:"10px" }}/>
          <Tab label="Event Schedule" {...a11yProps(2)} sx={{ backgroundColor: "white", borderRadius: "10px", border: "1px #36004E solid" ,margin:"10px"}}/>
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap'  }}>
        <CustomTabPanel value={value} index={0}>
          <ImgMediaCard/>
        </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Card sx={{ maxWidth: 391, marginLeft: "20px", marginTop: "5%",maxHeight:350 ,flexBasis: "calc(50% -0px)"}}>
            <Typography sx={{margin:"10px"}}>Hero Section</Typography>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
           
            image="/src/assets/react.svg"
            sx={{ objectFit: 'contain',border:"1px #36004E solid",width:"47vh",margin:"12px",borderRadius:"10px"}}
          />
          <Box sx={{  width: "300px" }}>
            <Typography sx={{ fontFamily: "DM sans", fontSize: "15px", paddingLeft: "10px", fontWeight: "800" ,marginTop:"40px"}}>
              50% Remaining
            </Typography>
            <Box sx={{ flexGrow: 1, width: "150px", paddingTop: "7px", color: "green", paddingLeft: "8px", height: "30px" }}>
              <BorderLinearProgress variant="determinate" color='success' value={50} sx={{
                backgroundColor: '#e8e6e1',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#018416',

                },
                height: "8px"
              }} />
            </Box>
          </Box>
          <CardActions>
            <div className="buttn">
             <Link to='/Coustomise'> <Button
                size="small"
                sx={{
                  width: "50%",
                  height: "40px",
                  alignItems: "center",
                  marginLeft: "50%",
                  backgroundColor: "#36004E",
                  color: "white",
                  '&:hover': {
                    backgroundColor: '#36004E',
                  },
                  fontFamily: "DM Sans",
                  top:"-60px"
                }}
              >
                Upload media
              </Button></Link>
            </div>
          </CardActions>
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Card sx={{ maxWidth: 391, marginLeft: "20px", marginTop: "5%",maxHeight:350 ,flexBasis: "calc(50% -0px)"}}>
            <Typography sx={{margin:"10px"}}>Bride and Groom Section</Typography>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
           
            image="/src/assets/react.svg"
            sx={{ objectFit: 'contain',border:"1px #36004E solid",width:"47vh",margin:"12px",borderRadius:"10px"}}
          />
          <Box sx={{  width: "300px" }}>
            <Typography sx={{ fontFamily: "DM sans", fontSize: "15px", paddingLeft: "10px", fontWeight: "800" ,marginTop:"40px"}}>
              50% Remaining
            </Typography>
            <Box sx={{ flexGrow: 1, width: "150px", paddingTop: "7px", color: "green", paddingLeft: "8px", height: "30px" }}>
              <BorderLinearProgress variant="determinate" color='success' value={50} sx={{
                backgroundColor: '#e8e6e1',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#018416',

                },
                height: "8px"
              }} />
            </Box>
          </Box>
          <CardActions>
            <div className="buttn">
              <Button
                size="small"
                sx={{
                  width: "50%",
                  height: "40px",
                  alignItems: "center",
                  marginLeft: "50%",
                  backgroundColor: "#36004E",
                  color: "white",
                  '&:hover': {
                    backgroundColor: '#36004E',
                  },
                  fontFamily: "DM Sans",
                  top:"-60px"
                }}
              >
                Upload media
              </Button>
            </div>
          </CardActions>
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Card sx={{ maxWidth: 391, marginLeft: "20px", marginTop: "5%",maxHeight:350 ,}}>
            <Typography sx={{margin:"10px"}}>Bride and Groom Section</Typography>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
           
            image="/src/assets/react.svg"
            sx={{ objectFit: 'contain',border:"1px #36004E solid",width:"47vh",margin:"12px",borderRadius:"10px"}}
          />
          <Box sx={{  width: "300px" }}>
            <Typography sx={{ fontFamily: "DM sans", fontSize: "15px", paddingLeft: "10px", fontWeight: "800" ,marginTop:"40px"}}>
              50% Remaining
            </Typography>
            <Box sx={{ flexGrow: 1, width: "150px", paddingTop: "7px", color: "green", paddingLeft: "8px", height: "30px" }}>
              <BorderLinearProgress variant="determinate" color='success' value={50} sx={{
                backgroundColor: '#e8e6e1',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#018416',

                },
                height: "8px"
              }} />
            </Box>
          </Box>
          <CardActions>
            <div className="buttn">
              <Button
                size="small"
                sx={{
                  width: "50%",
                  height: "40px",
                  alignItems: "center",
                  marginLeft: "50%",
                  backgroundColor: "#36004E",
                  color: "white",
                  '&:hover': {
                    backgroundColor: '#36004E',
                  },
                  fontFamily: "DM Sans",
                  top:"-60px"
                }}
              >
                Upload media
              </Button>
            </div>
          </CardActions>
        </Card>
      </CustomTabPanel>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Templetes/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
