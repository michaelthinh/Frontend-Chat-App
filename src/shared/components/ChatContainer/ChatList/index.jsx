import { useState } from "react";
import classes from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchListItem from "./SearchListItem";
import { mockUsers } from "../../../constants/mockUsers";

export default function ChatList({ onUserSelect }) {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const handleUserClick = (user) => {
        setSelectedUserId(user.id);
        onUserSelect(user);
    };
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
                {mockUsers.map((user) => (
                    <SearchListItem
                        key={user.id}
                        user={user}
                        onUserSelect={(user) => handleUserClick(user)}
                    />
                ))}
            </div>
        </div>
    );
}
