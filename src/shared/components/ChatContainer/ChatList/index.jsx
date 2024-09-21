import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./styles.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ChatList() {
    return (
        <div className={classes.chatList}>
            <div className={classes.searchBox}>
                <FontAwesomeIcon icon={faSearch} size="sm" color="#b4b4ce" />
                <input
                    className={classes.search}
                    type="text"
                    name="name"
                    placeholder="Search"
                />
            </div>
            <div className={classes.searchList}>
                <div className={classes.searchListItem}>
                    <div className={classes.avatar}>
                        <img src="/img/avatar/1.jpg" alt="avatar" />
                    </div>
                    <div className={classes.chat}>
                        <div className={classes.user}>
                            <span className={classes.name}>Humin omar</span>
                            <span className={classes.lastMessage}>
                                Sure 8PM
                            </span>
                        </div>
                        <div className={classes.status}>
                            <span className={classes.time}>03 Feb</span>
                            <div className={classes.unread}>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.searchListItem}>
                    <div className={classes.avatar}>
                        <img src="/img/avatar/1.jpg" alt="avatar" />
                    </div>
                    <div className={classes.chat}>
                        <div className={classes.user}>
                            <span className={classes.name}>Humin omar</span>
                            <span className={classes.lastMessage}>
                                Sure 8PM
                            </span>
                        </div>
                        <div className={classes.status}>
                            <span className={classes.time}>03 Feb</span>
                            <div className={classes.unread}>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.searchListItem}>
                    <div className={classes.avatar}>
                        <img src="/img/avatar/1.jpg" alt="avatar" />
                    </div>
                    <div className={classes.chat}>
                        <div className={classes.user}>
                            <span className={classes.name}>Humin omar</span>
                            <span className={classes.lastMessage}>
                                Sure 8PM
                            </span>
                        </div>
                        <div className={classes.status}>
                            <span className={classes.time}>03 Feb</span>
                            <div className={classes.unread}>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.searchListItem}>
                    <div className={classes.avatar}>
                        <img src="/img/avatar/1.jpg" alt="avatar" />
                    </div>
                    <div className={classes.chat}>
                        <div className={classes.user}>
                            <span className={classes.name}>Humin omar</span>
                            <span className={classes.lastMessage}>
                                Sure 8PM
                            </span>
                        </div>
                        <div className={classes.status}>
                            <span className={classes.time}>03 Feb</span>
                            <div className={classes.unread}>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.searchListItem}>
                    <div className={classes.avatar}>
                        <img src="/img/avatar/1.jpg" alt="avatar" />
                    </div>
                    <div className={classes.chat}>
                        <div className={classes.user}>
                            <span className={classes.name}>Humin omar</span>
                            <span className={classes.lastMessage}>
                                Sure 8PM
                            </span>
                        </div>
                        <div className={classes.status}>
                            <span className={classes.time}>03 Feb</span>
                            <div className={classes.unread}>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.searchListItem}>
                    <div className={classes.avatar}>
                        <img src="/img/avatar/1.jpg" alt="avatar" />
                    </div>
                    <div className={classes.chat}>
                        <div className={classes.user}>
                            <span className={classes.name}>Humin omar</span>
                            <span className={classes.lastMessage}>
                                Sure 8PM
                            </span>
                        </div>
                        <div className={classes.status}>
                            <span className={classes.time}>03 Feb</span>
                            <div className={classes.unread}>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
