import { useEffect, useState } from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

interface IProps {
  preview?: boolean;
  // children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', 'dark');

    if (typeof window !== 'undefined') {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        setDarkTheme(true);
      } else {
        setDarkTheme(false);
      }

      // // Whenever the user explicitly chooses light mode
      // localStorage.theme = 'light';

      // // Whenever the user explicitly chooses dark mode
      // localStorage.theme = 'dark';

      // // Whenever the user explicitly chooses to respect the OS preference
      // localStorage.removeItem('theme');
    }
  }, []);

  return (
    <div className={darkTheme ? 'dark' : 'light'}>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300">
        <Meta />
        <Alert preview={props.preview} />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
