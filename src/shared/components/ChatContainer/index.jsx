import { useState, useEffect } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import classes from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { mockUsers as initialUsers } from "../../constants/mockUsers"; // Import mock users

export default function ChatContainer() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    // Helper function to update lastMessage and lastMessageTime for each user
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

    // Load users from localStorage or fallback to mockUsers, and update lastMessage and lastMessageTime
    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            const parsedUsers = JSON.parse(storedUsers);
            setUsers(updateUsersWithLastMessage(parsedUsers)); // Update with lastMessage
        } else {
            setUsers(updateUsersWithLastMessage(initialUsers)); // Initialize with mockUsers
        }
    }, []);

    // Update localStorage whenever users state changes
    useEffect(() => {
        if (users.length > 0) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users]);

    const handleChangeUser = (user) => {
        setSelectedUser(user);
        console.log("Selected User:", user);
    };

    // Function to update the user's lastMessage and lastMessageTime after sending a new message
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
                        onUpdateChats={handleUpdateChats} // Pass function to update lastMessage and lastMessageTime
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
