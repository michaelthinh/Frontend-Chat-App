import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import classes from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

export default function ChatContainer() {
    return (
        <div className={classes.chatContainer}>
            <div className={classes.statusLine}>
                <div className={classes.status}>
                    <span>Status: Sale</span>
                    <FontAwesomeIcon
                        className={classes.icon}
                        icon={faCaretDown}
                        size="sm"
                    />
                </div>
                <div className={classes.bell}>
                    <FontAwesomeIcon icon={faBell} size="sm" />
                </div>
            </div>
            <div className={classes.chatLine}>
                <span>Chat</span>
            </div>
            <div className={classes.chatContext}>
                <ChatList />
                <ChatWindow />
            </div>
        </div>
    );
}
