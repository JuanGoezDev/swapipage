import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#a98004',
    // #2c073b
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '##f4c538',
      main: '#F2B707',
      dark: '#a98004',
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: "'Press Start 2P', cursive"
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" />
          <Tab label="Section 2" />
          <Tab label="Section 3" />
        </Tabs>
      </Paper>
    </MuiThemeProvider>
  );
}