import { RiMoonClearLine , RiSunLine , RiUserLine, RiArrowDropDownLine, RiArrowDropDownFill, RiUserFill } from "react-icons/ri";
import useDarkMode from './hooks/useDarkMode';
import React, { useState } from "react";

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
const ProfileIcon = () => {
    const [selectedProfile, selectProfile] = useState(false);
    return (
        <div className="header-icon">
            <button className="cursor-pointer" onClick={() => selectProfile(!selectedProfile)}>
                {selectedProfile ? (<RiUserFill />) : (<RiUserLine />)}
            </button>
        </div>
    );
};
const AccountsIcon = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <div>
                <div>
                    <button className="header-icon" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? (<RiArrowDropDownFill />) : (<RiArrowDropDownLine />)}
                    </button>
                    {isVisible && (
                        <div>
                            <div className="accounts-submenu">
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
                                <div className="w-full">
                                    <p className="text-xs">Your Accounts</p>
                                    <div className="flex flex-col font-semibold">
                                        <a href="#" className="rounded-md text-base p-1 hover:bg-gray-100">Add PINT account</a>
                                        <a href="#" className="rounded-md text-base p-1 hover:bg-gray-100">Convert to business</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;