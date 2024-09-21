import { useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import classes from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

export default function ChatContainer() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleChangeUser = (user) => {
        setSelectedUser(user);
        console.log(user);
    };

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
                <ChatList
                    onUserSelect={(user) => {
                        handleChangeUser(user);
                    }}
                />
                {selectedUser ? (
                    <ChatWindow user={selectedUser} />
                ) : (
                    <div className="select-user-message">
                        Please select a user to start chatting
                    </div>
                )}
            </div>
        </div>
    );
}
