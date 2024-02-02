import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ minWidth: 400,backgroundColor:"#ecbdf0" }} value={value} onChange={handleChange}>
      <Link to='/dash'><BottomNavigationAction
        label="Dash"
        value="recents"
        icon={<RestoreIcon />}
      /></Link>
      <Link to='/templetes'><BottomNavigationAction
        label="Templates"
        value="favorites"
        icon={<FavoriteIcon />}
      /></Link>
      <Link to='/wishes'><BottomNavigationAction
        label="Wishes"
        value="nearby"
        icon={<LocationOnIcon />}
      /></Link>
     <Link to='/help'> <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /></Link>
    </BottomNavigation>
  );
}