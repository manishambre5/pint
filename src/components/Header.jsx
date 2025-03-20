import { RiMoonClearLine , RiSunLine , RiUserLine, RiArrowDownSLine } from "react-icons/ri";
import useDarkMode from './hooks/useDarkMode';

const Header = () => {
    return (
        <div className='header'>
            <Search />
            <ThemeIcon />
            <ProfileIcon />
            <AccountsIcon icon={<RiArrowDownSLine />} />
        </div>
    );
};

const Search = () => (
      <input className='search' type='text' placeholder='Search' />
);
const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <RiMoonClearLine className='header-icon' />
            ) : (
                <RiSunLine className='header-icon' />
            )}
        </span>
    );
};
const ProfileIcon = () => <RiUserLine className='header-icon' />;
const AccountsIcon = ({ icon}) => (
    <div className="group">
        <div className="header-icon">{icon}</div>
        <div className="accounts-submenu group-hover:visible">
            <div className="">
                <p className="text-xs">Currently in</p>
                <div className="flex flex-row text-black bg-gray-200 rounded-md w-full p-2 mb-2 gap-2">
                    <RiUserLine className='header-icon h-20 w-20' />
                    <div className="flex-grow">
                        <p className="font-bold">John Doe</p>
                        <p>Personal</p>
                        <p>johndoe@mail.com</p>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="text-xs">Your Accounts</p>
                <div className="flex flex-col font-semibold">
                    <a href="#" className="text-base p-1 hover:bg-gray-100">Add PINT account</a>
                    <a href="#" className="text-base p-1 hover:bg-gray-100">Convert to business</a>
                </div>
            </div>
        </div>
    </div>
);

export default Header;