
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (<div className={styles.mainWrapper} >
        <div className="title"></div>
        <div className={styles.separatorLeftSideBlock}>
            <div className={styles.userListBlock}>
                <div className={styles.userDialogName}>Dimych</div>
                <div className={styles.userDialogName}>Andrey</div>
                <div className={styles.userDialogName}>Sveta</div>
                <div className={styles.userDialogName}>Sasha</div>
                <div className={styles.userDialogName}>Masha</div>
                <div className={styles.userDialogName}>Ivan</div>
                <div className={styles.userDialogName}>Ivasdadadadadasdasdasdasdadsadadasdasdasdan</div>
            </div>
            <div className={styles.dialogBlock}>
                <div className={styles.messageItem}>hi</div>
                <div className={styles.messageItem}>Hi may mate</div>
                <div className={styles.messageItem}>how Are you?</div>
            </div>
        </div>
    </div>)
}

export default Dialogs