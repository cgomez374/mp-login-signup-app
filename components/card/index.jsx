import styles from './card.module.css'
import Form from '../form/index'

export default function Index() {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardLeft}>
                {/* <img src="./mp-icon.png" alt="icon" /> */}
                <div className={styles.innerText}>
                    <h1>welcome back</h1>
                    <p>To keep connecting with us please <br /> register with your perfonal info</p>
                </div>
            </div>
            <div className={styles.cardRight}>
                <h4>sign in</h4>
                <p>new to register? <a href="#">sign up</a></p>
                <ul>
                    <li>g</li>
                    <li>l</li>
                    <li>git</li>
                    <li>f</li>
                </ul>
                <div>
                    <p><span><hr /></span> or <span><hr /></span></p>
                </div>
                <Form />
            </div>
        </div>
    )
}