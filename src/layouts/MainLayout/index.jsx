import ChatContainer from "../../shared/components/ChatContainer";
import SideBar from "../../shared/components/SideBar";
import classes from "./styles.module.css";

export default function MainLayout() {
    return (
        <div className={classes.mainLayout}>
            <div className={classes.chatBox}>
                <SideBar />
                <ChatContainer />
            </div>
        </div>
    );
}
