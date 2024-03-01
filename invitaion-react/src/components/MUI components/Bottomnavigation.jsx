import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';
import dash from '/src/assets/image 5 1 1.png'
import template from '/src/assets/backup_table.png'
import wish from '/src/assets/chat_bubble.png'
import folder from '/src/assets/Rectangle 6984.png' 

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0,zIndex:9999 }}>
    <BottomNavigation
      sx={{ minWidth: 400, backgroundColor: "white", borderTop: "0.5px solid black", gap: "1.6rem" }}
      value={value}
      onChange={handleChange}
    >
      <Link to='/dash'>
        <BottomNavigationAction
          label="Dash"
          value="recents"
          icon={<img src={dash} style={{ width: "1.5rem" }} alt="dash" />}
        />
      </Link>
      <Link to='/templetes'>
        <BottomNavigationAction
          label="Templates"
          value="favorites"
          icon={<img src={template} style={{ width: "1.5rem" }} alt="templates" />}
        />
      </Link>
      <Link to='/wishes'>
        <BottomNavigationAction
          label="Wishes"
          value="nearby"
          icon={<img src={wish} style={{ width: "1.5rem" }} alt="wishes" />}
        />
      </Link>
      <Link to='/help'>
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<img src={folder} style={{ width: "1.5rem" }} alt="folder" />}
        />
      </Link>
    </BottomNavigation>
  </div>
  );
}