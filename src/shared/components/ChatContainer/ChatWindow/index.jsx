import { faFaceSmile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import classes from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const messages = [
    {
        from: "Hali",
        text: "We invite you at our office for a visit ",
        time: "10:00",
    },

    {
        from: "You",
        text: "It’s like a dream come true, thank you so much!",
        time: "10:05",
    },
    { from: "Hali", text: "Welcome", time: "10:06" },
    {
        from: "Hali",
        text: "We invite you at our office for a visit ",
        time: "10:00",
    },

    {
        from: "You",
        text: "It’s like a dream come true, thank you so much!",
        time: "10:05",
    },
    { from: "Hali", text: "Welcome", time: "10:06" },
    {
        from: "Hali",
        text: "We invite you at our office for a visit ",
        time: "10:00",
    },

    {
        from: "You",
        text: "It’s like a dream come true, thank you so much!",
        time: "10:05",
    },
    { from: "Hali", text: "Welcome", time: "10:06" },
];

export default function ChatWindow() {
    return (
        <div className={classes.chatWindow}>
            <div className={classes.chatInfo}>
                <div className={classes.chatName}>
                    <span>Gold Coast</span>
                </div>
                <div className={classes.sender}>
                    <span>From: Hali</span>
                </div>
            </div>
            <div className={classes.chatContext}>
                <div className={classes.messages}>
                    {messages.map((item, index) => (
                        <div
                            key={index}
                            className={
                                item.from === "You"
                                    ? `${classes.messageItem} ${classes.sent}`
                                    : `${classes.messageItem}`
                            }
                        >
                            {item.from !== "You" && (
                                <div className={classes.avatar}>
                                    <img
                                        src="/img/avatar/1.jpg"
                                        alt="avatar"
                                        width={36}
                                        height={36}
                                    />
                                    <span>{item.time}</span>
                                </div>
                            )}
                            <div className={classes.message}>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.messageInputSection}>
                <div className={classes.recommend}>
                    <div className={classes.recommendItem}>
                        <span>Request visit</span>
                    </div>
                    <div className={classes.recommendItem}>
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
                        />
                    </div>
                    <div className={classes.sectionRight}>
                        <FontAwesomeIcon
                            className={classes.icon}
                            icon={faPaperclip}
                            color=""
                            size="xs"
                        />
                        <div className={classes.sendButton}>
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
