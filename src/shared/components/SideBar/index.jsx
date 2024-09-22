import { useState } from "react";
import classes from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { sideBarItems } from "../../constants/sideBarItems";

import SideBarItem from "./SideBarItem";

export default function SideBar() {
    const [currentId, setCurrentId] = useState("2");
    const [isShown, setIsShown] = useState(true);
    const handleShowSideBar = () => {
        setIsShown((prev) => !prev);
    };
    return (
        <div className={classes.sideBar}>
            <div className={classes.context}>
                <div className={classes.avatar}>
                    <img src="/img/avatar/thinhava.jpg" alt="avatar" />
                </div>
                <div className={classes.name}>
                    <span>Michael Thinh</span>
                    <div
                        className={
                            isShown
                                ? `${classes.icon}`
                                : `${classes.icon} ${classes.iconReverse}`
                        }
                        onClick={handleShowSideBar}
                    >
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            size="xs"
                            color="#000"
                        />
                    </div>
                </div>
                <ul
                    className={
                        isShown
                            ? `${classes.sideBarList}`
                            : `${classes.sideBarList} ${classes.hidden}`
                    }
                >
                    {sideBarItems.map((item, index) => (
                        <SideBarItem
                            item={item}
                            key={index}
                            activeId={currentId}
                            onClick={() => {
                                setCurrentId(item.id);
                            }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
