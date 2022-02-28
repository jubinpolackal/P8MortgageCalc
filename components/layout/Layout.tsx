import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';
import { Fragment } from "react";

interface LayoutProps {
    children: React.ReactNode;
}
  
const Layout = (props: LayoutProps) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
}

export default Layout;