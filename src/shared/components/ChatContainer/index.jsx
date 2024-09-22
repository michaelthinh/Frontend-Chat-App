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

    const updateUsersWithLastMessage = (users) => {
        return users.map((user) => {
            const lastChat = user.chats[user.chats.length - 1];
            return {
                ...user,
                lastMessage: lastChat ? lastChat.message : "",
                lastMessageTime: lastChat ? lastChat.timestamp : "",
            };
        });
    };

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            const parsedUsers = JSON.parse(storedUsers);
            setUsers(updateUsersWithLastMessage(parsedUsers));
        } else {
            setUsers(updateUsersWithLastMessage(initialUsers));
        }
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users]);

    const handleChangeUser = (user) => {
        setSelectedUser(user);
        console.log("Selected User:", user);
    };

    const handleUpdateChats = (updatedUser) => {
        const updatedUsers = users.map((user) =>
            user.id === updatedUser.id
                ? {
                      ...updatedUser,
                      lastMessage:
                          updatedUser.chats[updatedUser.chats.length - 1]
                              .message,
                      lastMessageTime:
                          updatedUser.chats[updatedUser.chats.length - 1]
                              .timestamp,
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
                <ChatList users={users} onUserSelect={handleChangeUser} />
                {selectedUser ? (
                    <ChatWindow
                        user={selectedUser}
                        onUpdateChats={handleUpdateChats}
                    />
                ) : (
                    <div className="select-user-message">
                        Please select a user to start chatting
                    </div>
                )}
            </div>
        </div>
    );
}
