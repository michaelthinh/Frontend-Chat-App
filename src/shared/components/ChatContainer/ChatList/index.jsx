import { useState } from "react";
import classes from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchListItem from "./SearchListItem";

export default function ChatList({ users, onUserSelect }) {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const sortedUsers = users.sort((a, b) => {
        const lastMessageA = a.chats[a.chats.length - 1];
        const lastMessageB = b.chats[b.chats.length - 1];

        if (!lastMessageA || !lastMessageB) return 0;

        return lastMessageB.timestamp - lastMessageA.timestamp;
    });

    const filteredUsers = sortedUsers.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleUserClick = (user) => {
        setSelectedUserId(user.id);

        onUserSelect({
            ...user,
            unreadMessages: 0,
        });
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
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className={classes.scrollWrapper}>
                <div className={classes.searchList}>
                    {filteredUsers.map((user) => (
                        <SearchListItem
                            isActive={selectedUserId === user.id}
                            key={user.id}
                            user={user}
                            onUserSelect={() => handleUserClick(user)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
