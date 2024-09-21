import SideBar from "../../shared/components/SideBar";
import classes from "./styles.module.css";

export default function MainLayout({ children }) {
    return (
        <div className={classes.mainLayout}>
            <div className={classes.chatBox}>
                <SideBar />
                <div className={classes.chatContainer}>{children}</div>
            </div>
        </div>
    );
}
