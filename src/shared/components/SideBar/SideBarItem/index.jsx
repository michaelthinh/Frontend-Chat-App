import classes from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarItems({ item, activeId }) {
    return (
        <li
            className={
                activeId === item.id
                    ? `${classes.sideBarItem} ${classes.active}`
                    : `${classes.sideBarItem}`
            }
        >
            <FontAwesomeIcon icon={item.icon} size="sm" />
            <span>{item.name}</span>
        </li>
    );
}
