import classes from "./styles.module.css";

export default function SearchListItem({ user }) {
    return (
        <div className={classes.searchListItem}>
            <div className={classes.avatar}>
                <img src={user.profilePic} alt="avatar" />
            </div>
            <div className={classes.chat}>
                <div className={classes.user}>
                    <span className={classes.name}>{user.name}</span>
                    <span className={classes.lastMessage}>
                        {user.lastMessage}
                    </span>
                </div>
                <div className={classes.status}>
                    <span className={classes.time}>{user.lastMessageTime}</span>
                    <div className={classes.unread}>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
