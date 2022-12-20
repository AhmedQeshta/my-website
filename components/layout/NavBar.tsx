import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

function NavBar(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = useCallback(
    () => setTheme(theme === 'light' ? 'dark' : 'light'),
    [theme],
  );

  return (
    <div className="flex justify-between items-center w-full px-[50px] py-[40px] md:px-[100px] md:py-[80px]">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <Link href="/">A7med Qeshta</Link>
        </div>
      </div>

      <ul className="flex items-center ml-4">

        <li className="text-lg font-bold mx-5"> 
          <Link href="/">Home</Link>
        </li>

        <li className="text-lg font-bold mx-2">
           <Link href="/posts">Blog</Link>
        </li>

        <li className="text-sm font-bold ml-2">
          <Button onClick={handleThemeChange} color="inherit" disableRipple sx={styleButton}>
            <Brightness4Icon />
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

const styleButton = {
  '&:hover': {
    backgroundColor: 'transparent',
  },
};
