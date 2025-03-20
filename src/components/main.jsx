import { RiUserLine, RiSearchLine, RiArrowDownSLine, RiQuestionMark } from "react-icons/ri";
import Header from "./Header";
import Feed from "./Feed";

const Main = () => {
    return (
        <div className="flex flex-col pb-24 md:pb-4 md:pl-24 pl-4 pr-4">
            <Feed />
            <Header />
        </div>
    );
};

export default Main;