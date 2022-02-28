import classes from './MainNavigation.module.css';
import Link from 'next/link';
import Image from 'next/image';
import P8 from '../../public/p8Wordmark.svg';
import Menu from '../../public/menu.svg'

const MainNavigation = (props: {}) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <P8/>
            </div>
            <nav>
                <ul>
                    <li>
                            <Menu/>
                        
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;