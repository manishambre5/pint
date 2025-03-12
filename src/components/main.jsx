import { RiUserLine, RiSearchLine, RiArrowDownSLine, RiQuestionMark } from "react-icons/ri";
import Header from "./Header";
import Feed from "./Feed";

const Main = () => {
    return (
        <div className="flex-col md:ml-24 md:mr-4 ml-4 mr-4">
            <Header />
            <Feed />
        </div>
    );
};

export default Main;