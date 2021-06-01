import styles from './NavigationMenu.module.css'
const NavigationMenu = () =>{
    return(<div className={styles.mainWrapper}>
        <ul>
            <li><a href='/profile'>Profile</a></li>
            <li><a href='/dialogs'>Messages</a></li>
            <li><a>News</a></li>
            <li><a>Music</a></li>
            <li><a>Settings</a></li>
        </ul>
    </div>)
}

export default NavigationMenu