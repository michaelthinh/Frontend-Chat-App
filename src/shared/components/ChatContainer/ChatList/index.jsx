import { useState } from "react";
import classes from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchListItem from "./SearchListItem";

export default function ChatList({ users, onUserSelect }) {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const handleUserClick = (user) => {
        setSelectedUserId(user.id);
        onUserSelect(user);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className={classes.chatList}>
            <div className={classes.searchBox}>
                <FontAwesomeIcon icon={faSearch} size="sm" color="#b4b4ce" />
                <input
                    className={classes.search}
                    type="text"
                    name="name"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className={classes.searchList}>
                {filteredUsers.map((user) => (
                    <SearchListItem
                        key={user.id}
                        user={user}
                        lastMessage={user.lastMessage}
                        lastMessageTime={user.lastMessageTime}
                        onUserSelect={() => handleUserClick(user)}
                    />
                ))}
            </div>
        </div>
    );
}
