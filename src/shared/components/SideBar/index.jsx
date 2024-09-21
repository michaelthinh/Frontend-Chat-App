import { useState } from "react";
import classes from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import sideBarItems from "../../constants/SideBarItems";

import SideBarItem from "./SideBarItem";

export default function SideBar() {
    const [currentId, setCurrentId] = useState("2");
    return (
        <div className={classes.sideBar}>
            <div className={classes.context}>
                <div className={classes.avatar}>
                    <img src="/img/avatar/1.jpg" alt="avatar" />
                </div>
                <div className={classes.name}>
                    <span>Jimi Hendrix</span>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        size="xs"
                        color="#000"
                    />
                </div>
                <ul className={classes.sideBarList}>
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
