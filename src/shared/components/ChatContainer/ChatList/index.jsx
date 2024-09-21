import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./styles.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchListItem from "./SearchListItem";

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
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
                <SearchListItem />
            </div>
        </div>
    );
}
