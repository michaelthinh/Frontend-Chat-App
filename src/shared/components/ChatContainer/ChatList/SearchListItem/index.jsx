import classes from "./styles.module.css";

// Helper function to format the time to dd/mm
const formatDate = (time) => {
    if (!time) return ""; // Handle cases where time is undefined or null
    const date = new Date(time);
    const day = String(date.getDate()).padStart(2, "0"); // Get day and add leading 0 if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-indexed) and add leading 0
    return `${day}/${month}`;
};

export default function SearchListItem({ user, onUserSelect }) {
    console.log(user);
    const handleUserClick = (user) => {
        onUserSelect(user);
    };

    return (
        <div
            className={classes.searchListItem}
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
                        {user.lastMessage}
                    </span>
                </div>
                <div className={classes.status}>
                    {/* Use the helper function to format the lastMessageTime */}
                    <span className={classes.time}>
                        {formatDate(user.lastMessageTime)}
                    </span>
                    <div className={classes.unread}>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
