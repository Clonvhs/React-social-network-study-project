import pepsiLogo from '../images/pepsiLogo.png';
import styles from './Header.module.css'

const Header = () => {
    return (<div className={styles.mainWrapper} >
        <img className={styles.logo} src={pepsiLogo}/>

    </div>)
}

export default Header