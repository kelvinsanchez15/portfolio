import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

export default function NavTabs() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const LinkTab = (label, index) => {
    const lowerCased = label.toLowerCase();

    return (
      <Tab
        key={index}
        component="a"
        label={label}
        aria-labelledby="menu"
        onClick={(event) => {
          event.preventDefault();
          router.push(lowerCased === "home" ? "/#" : `/#${lowerCased}`);
        }}
        {...a11yProps(index)}
      />
    );
  };

  return (
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="navigation"
    >
      {["HOME", "ABOUT", "PORTFOLIO", "CONTACT"].map((arrayItem, index) =>
        LinkTab(arrayItem, index)
      )}
    </Tabs>
  );
}
