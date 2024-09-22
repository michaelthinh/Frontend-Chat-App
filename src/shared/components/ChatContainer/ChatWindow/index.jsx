import { useState, useEffect } from "react";
import { faFaceSmile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import classes from "./styles.module.css";

export default function ChatWindow({ user, onUpdateChats }) {
    const [selectedUser, setSelectedUser] = useState(user);
    const [newMessage, setNewMessage] = useState("");
    const userImg = user.profilePic;

    useEffect(() => {
        const storedChats = localStorage.getItem(user.name);
        if (storedChats) {
            setSelectedUser({
                ...user,
                chats: JSON.parse(storedChats),
            });
        } else {
            setSelectedUser(user);
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem(
            selectedUser.name,
            JSON.stringify(selectedUser.chats)
        );
    }, [selectedUser.chats]);

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const currentTime = new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });

            const updatedChats = [
                ...selectedUser.chats,
                {
                    sender: "You",
                    message: newMessage,
                    timestamp: Date.now(),
                },
            ];
            const updatedUser = { ...selectedUser, chats: updatedChats };

            setSelectedUser(updatedUser);

            // Update lastMessage and lastMessageTime in the parent
            onUpdateChats(updatedUser);

            setNewMessage("");
        }
    };

    return (
        <div className={classes.chatWindow}>
            <div className={classes.chatInfo}>
                <div className={classes.chatName}>
                    <span>Gold Coast</span>
                </div>
                <div className={classes.sender}>
                    <span>From: {user.name}</span>
                </div>
            </div>
            <div className={classes.chatContext}>
                <div className={classes.messages}>
                    {selectedUser.chats.map((item, index) => (
                        <div
                            key={index}
                            className={
                                item.sender === "You"
                                    ? `${classes.messageItem} ${classes.sent}`
                                    : `${classes.messageItem}`
                            }
                        >
                            {item.sender !== "You" && (
                                <div className={classes.avatar}>
                                    <img
                                        src={userImg}
                                        alt="avatar"
                                        width={36}
                                        height={36}
                                    />
                                    <span>{item.timeSent}</span>
                                </div>
                            )}
                            <div className={classes.message}>
                                <span>{item.message}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.messageInputSection}>
                <div className={classes.recommend}>
                    <div
                        className={classes.recommendItem}
                        onClick={() =>
                            setNewMessage(
                                "Hey I'm free this weekend, can I come to your place?"
                            )
                        }
                    >
                        <span>Request visit</span>
                    </div>
                    <div
                        className={classes.recommendItem}
                        onClick={() =>
                            setNewMessage(
                                "I have an interesting offer for you! Are you free this weekend?"
                            )
                        }
                    >
                        <span>Make Offer</span>
                    </div>
                </div>
                <div className={classes.sectionContext}>
                    <div className={classes.sectionLeft}>
                        <FontAwesomeIcon
                            className={classes.icon}
                            icon={faFaceSmile}
                            size="lg"
                        />
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className={classes.messageInput}
                            value={newMessage}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.sectionRight}>
                        <FontAwesomeIcon
                            className={classes.icon}
                            icon={faPaperclip}
                            color=""
                            size="xs"
                        />
                        <div
                            className={classes.sendButton}
                            onClick={handleSendMessage}
                        >
                            <FontAwesomeIcon
                                className={classes.icon}
                                icon={faPaperPlane}
                                color="#FFF"
                                size="xs"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
