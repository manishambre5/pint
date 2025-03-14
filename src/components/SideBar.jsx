import { RiCameraLensLine, RiHomeLine, RiCompassLine, RiAddCircleLine, RiNotification3Line, RiMessage2Line, RiSettingsLine } from "react-icons/ri";
//import useDarkMode from '../../hooks/useDarkMode';

const SideBar = () => {
    return (
        <div className="fixed bottom-0 md:top-0 md:left-0 md:h-screen h-max w-screen md:w-20 mt-2 flex flex-row md:flex-col md:justify-start justify-center bg-white dark:bg-black text-black dark:text-white md:border-r-1 md:border-r-gray-100 md:dark:border-r-gray-700">
            <SideBarIcon icon={<RiCameraLensLine />} />
            <SideBarIcon icon={<RiHomeLine />} />
            <SideBarIcon icon={<RiCompassLine />} />
            <SideBarIcon icon={<RiAddCircleLine />} />
            <SideBarIcon icon={<RiNotification3Line />} />
            <SideBarIcon icon={<RiMessage2Line />} />
            <SideBarIcon icon={<RiSettingsLine />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tool tip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:visible">
            {text}
        </span>
    </div>
);

export default SideBar;