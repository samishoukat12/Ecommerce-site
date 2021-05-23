import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllInboxRoundedIcon from '@material-ui/icons/AllInboxRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import FilterVintageRoundedIcon from '@material-ui/icons/FilterVintageRounded';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AllProducts from "../Items/Items"
import WomenItems from "../womenItems/Women"
import Accessories from "../Asseccories/Acessories"
import Gadgets from "../Gadgets/Gadgets"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import "./tabs.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectionTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <>
      <AppBar position="static" color="default" style={{color:"#ff5757"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{color:"#ff5757",marginLeft:100}}
        >
          
          <Tab to="/All" label="All" icon={<AllInboxRoundedIcon />} {...a11yProps(0)} className="tab-size" style={{color:"#ff5757"}} />
          <Tab to="/Women" label="Women" icon={<FilterVintageRoundedIcon />} {...a11yProps(1)} className="tab-size" style={{color:"#ff5757"}}/>
          <Tab to="/Accessories" label="Accessories" icon={<DonutLargeRoundedIcon />} {...a11yProps(2)} className="tab-size" style={{color:"#ff5757"}}/>
          <Tab to="/Accessories" label="Gadgets" icon={<CategoryRoundedIcon />} {...a11yProps(3)} className="tab-size" style={{color:"#ff5757"}}  />
          <Tab to="/Editorials" label="Editorials" icon={<ShoppingBasket />} {...a11yProps(4)} className="tab-size" style={{color:"#ff5757"}}/>
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <AllProducts/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <WomenItems/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Accessories/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Gadgets/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
  </>
  );
}
