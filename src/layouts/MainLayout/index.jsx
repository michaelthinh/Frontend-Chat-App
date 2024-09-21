import classes from "./styles.module.css";

export default function MainLayout({ children }) {
    return <div className={classes.mainLayout}>{children}</div>;
}
