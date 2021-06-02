import styles from './NavigationMenu.module.css'
import {NavLink} from "react-router-dom";
const NavigationMenu = () =>{
    return(<div className={styles.mainWrapper}>
        <ul>
            <li><NavLink to='/profile' activeClassName={styles.activeTab}>Profile</NavLink></li>
            <li><NavLink to='/dialogs' activeClassName={styles.activeTab}>Messages</NavLink></li>
            <li><a>News</a></li>
            <li><a>Music</a></li>
            <li><a>Settings</a></li>
        </ul>
    </div>)
}

export default NavigationMenu