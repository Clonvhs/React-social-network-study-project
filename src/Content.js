import userMainPageBackgroundPhoto from './images/userMainPageBackgroundPhoto.jpeg'
import styles from './Content.module.css'

const Content = () => {
    return (<div>
        <img className={styles.userMainPageBackgroundPhoto} src={userMainPageBackgroundPhoto}/>
        <div className={styles.userInfoBlock}>
            <div className={styles.userAvatar}>user Ava</div>
            <div className={styles.userName}></div>
            <div className={styles.descriptionBlock}>
                <div className={styles.bitrhDate}></div>
                <div className={styles.userCity}></div>
                <div className={styles.userEducation}></div>
                <div className={styles.userWebSite}></div>
            </div>
            <div className={styles.userPostsBlock}>
                <div className={styles.userPostsTittle}>My posts</div>
                <div className={styles.userSendNewPostBlock}>
                    <div className={styles.newPostInput}>NewPost</div>
                    <div className={styles.newPostButton}></div>
                </div>
                <div className={styles.postsTapeBlock}>
                    post1
                    <br/>
                    post2
                </div>
            </div>
        </div>

    </div>)
}

export default Content