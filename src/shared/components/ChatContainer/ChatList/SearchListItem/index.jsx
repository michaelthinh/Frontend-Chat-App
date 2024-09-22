import classes from "./styles.module.css";

import { getLastSender } from "../../../../../utils/getLastSender";

const formatDate = (time) => {
    if (!time) return "";
    const date = new Date(time);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`;
};

export default function SearchListItem({ isActive, user, onUserSelect }) {
    const handleUserClick = (user) => {
        onUserSelect(user);
    };

    return (
        <div className={classes.searchListItemWrapper}>
            <div
                className={
                    isActive
                        ? `${classes.searchListItem} ${classes.activeItem}`
                        : `${classes.searchListItem}`
                }
                onClick={() => {
                    handleUserClick(user);
                }}
            >
                <div className={classes.avatar}>
                    <img src={user.profilePic} alt="avatar" />
                </div>
                <div className={classes.chat}>
                    <div className={classes.user}>
                        <span className={classes.name}>{user.name}</span>
                        <span className={classes.lastMessage}>
                            {getLastSender(user.chats) === "You" && "You: "}
                            {user.lastMessage || (
                                <span className={classes.newChat}>
                                    --- Start a new conversation now ---
                                </span>
                            )}
                        </span>
                    </div>
                    <div className={classes.status}>
                        <span className={classes.time}>
                            {formatDate(user.lastMessageTime)}
                        </span>
                        <div
                            className={classes.unread}
                            style={
                                user.unreadMessages === 0
                                    ? { opacity: "0" }
                                    : { opacity: "1" }
                            }
                        >
                            <span>{user.unreadMessages}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
