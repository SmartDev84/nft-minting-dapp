
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight';
import TopAppBarMenu from './TopAppBarMenu';

const useStyles = makeStyles(theme => ({
  height: {
    height: '100%'
  },
  LogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));
const DesktopMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopAppBarLeft open = {open} setOpen={setOpen} />
      <div className={classes.LogoContainer}>
        <TopAppBarMenu />
        <TopAppBarRight />
      </div>
    </>
  );
};

export default DesktopMenu;
