import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function CharityDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <p onClick={()=>{props.setActivePage("Account Overview")}}>Account Overview</p>
        <p onClick={()=>{props.setActivePage("Edit Profile")}}>Edit Profile</p>
        <p onClick={()=>{props.setActivePage("Find Suppliers")}}>Find Suppliers</p>
      </List>
      <Divider />
      <List>
      <p>Logout</p>
      </List>
    </div>
  );


  return (
    <div>
      <Button onClick={toggleDrawer('right', true)} style={{position:"absolute", top: 0, right: 0, color: "white", marginTop: '12px'}}><i class="fas fa-bars icon-3x"></i></Button>
    
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
      
    </div>
  );
}