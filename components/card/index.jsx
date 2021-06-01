import styles from './card.module.css'
import Form from '../form/index'

export default function Index() {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardLeft}>
                <div className={styles.contentContainer}>
                   <div className={styles.cardLeftLogo}>
                        <img src="./mp-icon.png" alt="icon" />
                    </div>
                    <div className={styles.innerText}>
                        <h1>welcome back</h1>
                        <p>To keep connecting with us please <br /> register with your perfonal info</p>
                    </div> 
                </div>
            </div>
            <div className={styles.cardRight}>
                <div className={styles.cardRightText}>
                    <div className={styles.imgContainer}>
                        <img src="./closeIcon.png" alt="icon" />
                    </div>
                    <h2>sign in</h2>
                    <p>new to register?<a href="#"> sign up</a></p>
                </div>
                <ul className={styles.socialMedia}>
                    <li><img src="./google.png" alt="icon" /></li>
                    <li><img src="./linkin.png" alt="icon" /></li>
                    <li><img src="./github.png" alt="icon" /></li>
                    <li><img src="./facebook.png" alt="icon" /></li>
                </ul>
                <div className={styles.mid}>
                    <div className={styles.line}></div>
                    <p>or</p>
                    <div className={styles.line}></div>
                </div>
                <Form />
            </div>
        </div>
    )
}