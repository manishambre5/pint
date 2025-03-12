import { RiMoonClearLine , RiSunLine , RiUserLine, RiArrowDownSLine } from "react-icons/ri";
import useDarkMode from './hooks/useDarkMode';

const Header = () => {
    return (
        <div className='header'>
            <Search />
            <ThemeIcon />
            <ProfileIcon />
            <AccountsIcon />
        </div>
    );
};

const Search = () => (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search' />
    </div>
);
const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <RiMoonClearLine size='25' className='header-icon' />
            ) : (
                <RiSunLine size='25' className='header-icon' />
            )}
        </span>
    );
};
const ProfileIcon = () => <RiUserLine size='25' className='header-icon' />;
const AccountsIcon = () => <RiArrowDownSLine size='25' className='header-icon' />;

export default Header;