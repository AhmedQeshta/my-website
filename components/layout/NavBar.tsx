import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import { Button } from '@mui/material';

function NavBar(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = useCallback(
    () => setTheme(theme === 'light' ? 'dark' : 'light'),
    [theme],
  );

  return (
    <div className="flex justify-between items-center w-full px-[50px] py-[40px] md:px-[100px] md:py-[80px]">
      <div className="flex items-center">
        <div className="text-2xl font-bold">A7med Qeshta</div>
      </div>

      <div className="flex items-center ml-4">
        {/* <div className="text-sm font-bold">Home</div>
        <div className="text-sm font-bold ml-2">About</div>
        <div className="text-sm font-bold ml-2">Projects</div>
        <div className="text-sm font-bold ml-2">Contact</div>
        <div className="text-sm font-bold ml-2">Resume</div> */}

        <div className="text-sm font-bold ml-2">
          <Button onClick={handleThemeChange} color="inherit" disableRipple sx={styleButton}>
            <Brightness4Icon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

const styleButton = {
  '&:hover': {
    backgroundColor: 'transparent',
  },
};
