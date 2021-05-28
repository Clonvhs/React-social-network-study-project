import userMainPageBackgroundPhoto from './images/userMainPageBackgroundPhoto.jpeg'
import userProfileImage from './images/userProfileImage.png'
import styles from './MyProfilePage.module.css'
import SinglePost from './SinglePost'

const MyProfilePage = () => {
    return (<div>
        <img className={styles.userMainPageBackgroundPhoto} src={userMainPageBackgroundPhoto}/>
        <div className={styles.userInfoBlock}>
            <div className={styles.userInfoBlockLeftSide}><img className={styles.userAvatar} src={userProfileImage}
                                                               alt="user profile image"/></div>
            <div className={styles.userInfoBlockRightSide}>
                <div className={styles.userName}>VoVa B.</div>
                <div className={styles.descriptionBlock}>
                    <div className={styles.bitrhDate}>13 october</div>
                    <div className={styles.userCity}>Khmelnitskiy</div>
                    <div className={styles.userEducation}>KUoL</div>
                    <div className={styles.userWebSite}><a href={'https://youtube.com'}> https://youtube.com</a></div>
                </div>
            </div>
        </div>
        <div className={styles.userPostsBlock}>
            <div className={styles.userPostsTittle}>My posts</div>
            <div className={styles.userSendNewPostBlock}>
                <input className={styles.newPostInput} value={'New Post'}/>
                <button className={styles.newPostButton}>Send new post</button>
            </div>
            <div className={styles.postsTapeBlock}>
                <SinglePost/>
                <SinglePost/>
            </div>
        </div>


    </div>)
}

export default MyProfilePage