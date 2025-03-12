import { RiCameraLensLine, RiHomeLine, RiCompassLine, RiAddCircleLine, RiNotification3Line, RiMessage2Line, RiSettingsLine } from "react-icons/ri";
//import useDarkMode from '../../hooks/useDarkMode';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-white dark:bg-black text-black dark:text-white border-r-1 border-r-gray-100 dark:border-r-gray-700">
            <SideBarIcon icon={<RiCameraLensLine size="25" />} />
            <SideBarIcon icon={<RiHomeLine size="25" />} />
            <SideBarIcon icon={<RiCompassLine size="25" />} />
            <SideBarIcon icon={<RiAddCircleLine size="25" />} />
            <SideBarIcon icon={<RiNotification3Line size="25" />} />
            <SideBarIcon icon={<RiMessage2Line size="25" />} />
            <SideBarIcon icon={<RiSettingsLine size="25" />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tool tip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:visible group-hover:z-50">
            {text}
        </span>
    </div>
);

export default SideBar;