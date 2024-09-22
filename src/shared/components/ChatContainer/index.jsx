import { useState, useEffect } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import classes from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { mockUsers as initialUsers } from "../../constants/mockUsers";
export default function ChatContainer() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            setUsers(initialUsers);
        }
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users]);

    const handleChangeUser = (user) => {
        setSelectedUser(user);
    };

    const handleUpdateUser = (updatedUser) => {
        const lastChat = updatedUser.chats[updatedUser.chats.length - 1];
        const updatedUsers = users.map((user) =>
            user.id === updatedUser.id
                ? {
                      ...updatedUser,
                      lastMessage: lastChat?.message || "",
                      lastMessageTime: lastChat?.timestamp || "",
                  }
                : user
        );
        setUsers(updatedUsers);
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
                    users={users}
                    onUserSelect={(user) => {
                        const clickedUser = users.find((u) => u.id === user.id);
                        handleUpdateUser({
                            ...clickedUser,
                            unreadMessages: 0,
                        });
                        handleChangeUser(clickedUser);
                    }}
                />
                {selectedUser ? (
                    <ChatWindow
                        user={selectedUser}
                        onUpdateUser={handleUpdateUser}
                    />
                ) : (
                    <div className={classes.noMessages}>
                        <span>Please select a user to start chatting</span>
                    </div>
                )}
            </div>
        </div>
    );
}
