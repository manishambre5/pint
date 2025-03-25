import { useState } from "react";
import { RiCameraLensLine, RiHomeLine, RiCompassLine, RiAddCircleLine, RiNotification3Line, RiMessage2Line, RiSettingsLine, RiCameraLensFill, RiHomeFill, RiCompassFill, RiAddCircleFill, RiNotification3Fill, RiMessage2Fill, RiSettingsFill } from "react-icons/ri";

const SideBar = () => {
    const [selectedPint, selectPint] = useState(false);
    const [selectedHome, selectHome] = useState(false);
    const [selectedExplore, selectExplore] = useState(false);
    const [selectedCreate, selectCreate] = useState(false);
    const [selectedUpdates, selectUpdates] = useState(false);
    const [selectedMessages, selectMessages] = useState(false);
    const [selectedSettings, selectSettings] = useState(false);
    return (
        <div className="fixed bottom-0 md:top-0 md:left-0 md:h-screen h-max w-screen md:w-20 mt-2 flex flex-row md:flex-col md:justify-start justify-center bg-white dark:bg-black text-black dark:text-white md:border-r-1 md:border-r-gray-100 md:dark:border-r-gray-700">
            <div className="sidebar-icon group">
                <button className="cursor-pointer" onClick={() => selectPint(!selectedPint)}>
                    {selectedPint ? (<RiCameraLensFill />) : (<RiCameraLensLine />)}
                </button>
                <ToolTip tip={'PINT'}></ToolTip>
            </div>
            <div className="sidebar-icon group">
                <button className="cursor-pointer" onClick={() => selectHome(!selectedHome)}>
                    {selectedHome ? (<RiHomeFill />) : (<RiHomeLine />)}
                </button>
                <ToolTip tip={'Home'}></ToolTip>
            </div>
            <div className="sidebar-icon group">
                <button className="cursor-pointer" onClick={() => selectExplore(!selectedExplore)}>
                    {selectedExplore ? (<RiCompassFill />) : (<RiCompassLine />)}
                </button>
                <ToolTip tip={'Explore'}></ToolTip>
            </div>
            <div className="sidebar-icon group">
                <button className="cursor-pointer" onClick={() => selectCreate(!selectedCreate)}>
                    {selectedCreate ? (<RiAddCircleFill />) : (<RiAddCircleLine />)}
                </button>
                <ToolTip tip={'Create'}></ToolTip>
            </div>
            <div className="sidebar-icon group">
                <button className="cursor-pointer" onClick={() => selectUpdates(!selectedUpdates)}>
                    {selectedUpdates ? (<RiNotification3Fill />) : (<RiNotification3Line />)}
                </button>
                <ToolTip tip={'Updates'}></ToolTip>
            </div>
            <div className="sidebar-icon group">
                <button className="cursor-pointer" onClick={() => selectMessages(!selectedMessages)}>
                    {selectedMessages ? (<RiMessage2Fill />) : (<RiMessage2Line />)}
                </button>
                <ToolTip tip={'Messages'}></ToolTip>
            </div>
            <div className="sidebar-icon group">
                <button className="cursor-pointer" onClick={() => selectSettings(!selectedSettings)}>
                    {selectedSettings ? (<RiSettingsFill />) : (<RiSettingsLine />)}
                </button>
                <ToolTip tip={'Settings'}></ToolTip>
            </div>
        </div>
    );
};

const ToolTip = ({tip}) => (
    <span className="sidebar-tooltip group-hover:visible">
        {tip}
    </span>
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