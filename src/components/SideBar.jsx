import { RiCameraLensLine, RiHomeLine, RiCompassLine, RiAddCircleLine, RiNotification3Line, RiMessage2Line, RiSettingsLine } from "react-icons/ri";

const SideBar = () => {
    return (
        <div className="fixed bottom-0 md:top-0 md:left-0 md:h-screen h-max w-screen md:w-20 mt-2 flex flex-row md:flex-col md:justify-start justify-center bg-white dark:bg-black text-black dark:text-white md:border-r-1 md:border-r-gray-100 md:dark:border-r-gray-700">
            <SideBarIcon icon={<RiCameraLensLine />} text={'PINT'} />
            <SideBarIcon icon={<RiHomeLine />} text={'Home'} />
            <SideBarIcon icon={<RiCompassLine />} text={'Explore'} />
            <SideBarIcon icon={<RiAddCircleLine />} text={'Create'} />
            <SideBarIcon icon={<RiNotification3Line />} text={'Updates'} />
            <SideBarIcon icon={<RiMessage2Line />} text={'Messages'} />
            <SideBarIcon icon={<RiSettingsLine />} text={'Settings'} />
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

/*
const SideBar = () => {
    const [pint, pintSelect] = useState(<RiCameraLensLine />);
    const [home, homeSelect] = useState(<RiHomeLine />);
    const [explore, exploreSelect] = useState(<RiCompassLine />);
    const [create, createSelect] = useState(<RiAddCircleLine />);
    const [updates, updatesSelect] = useState(<RiNotification3Line />);
    const [messages, messagesSelect] = useState(<RiMessage2Line />);
    const [settings, settingsSelect] = useState(<RiSettingsLine />);
    const homeChange = () => homeSelect(<RiHomeFill />);
    const exploreChange = () => exploreSelect(<RiCompassFill />);
    const createChange = () => createSelect(<RiAddCircleFill />);
    const updatesChange = () => updatesSelect(<RiNotification3Fill />);
    const messagesChange = () => messagesSelect(<RiMessage2Fill />);
    const settingsChange = () => settingsSelect(<RiSettingsFill />);
    const pintChange = () => pintSelect(<RiCameraLensFill />);
    return (
        <div className="fixed bottom-0 md:top-0 md:left-0 md:h-screen h-max w-screen md:w-20 py-4 flex flex-row md:flex-col md:justify-start justify-center gap-4 md:items-center
        bg-white dark:bg-black text-black dark:text-white md:border-r-1 md:border-r-gray-100 md:dark:border-r-gray-700">
            <button className="sidebar-icon" onClick={pintChange}>{pint}</button>
            <button className="sidebar-icon" onClick={homeChange}>{home}</button>
            <button className="sidebar-icon" onClick={exploreChange}>{explore}</button>
            <button className="sidebar-icon" onClick={createChange}>{create}</button>
            <button className="sidebar-icon" onClick={updatesChange}>{updates}</button>
            <button className="sidebar-icon" onClick={messagesChange}>{messages}</button>
            <button className="sidebar-icon" onClick={settingsChange}>{settings}</button>
        </div>
    );
};
*/