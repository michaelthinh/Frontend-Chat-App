import classes from "./styles.module.css";

export default function SearchListItem() {
    return (
        <div className={classes.searchListItem}>
            <div className={classes.avatar}>
                <img src="/img/avatar/1.jpg" alt="avatar" />
            </div>
            <div className={classes.chat}>
                <div className={classes.user}>
                    <span className={classes.name}>Humin omar</span>
                    <span className={classes.lastMessage}>Sure 8PM</span>
                </div>
                <div className={classes.status}>
                    <span className={classes.time}>03 Feb</span>
                    <div className={classes.unread}>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
