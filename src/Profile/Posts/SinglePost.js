import styles from './SinglePost.module.css'
import postUserAvatarImage from "../../images/postUserAvatarImage.png";

const SinglePost = () =>{
    return(<div className={styles.mainWrapper}>
        <img className={styles.postUserAvatarImage} src={postUserAvatarImage}/>
        <p className={styles.postText}>Hello, how are you</p>
    </div>)
}

export default SinglePost