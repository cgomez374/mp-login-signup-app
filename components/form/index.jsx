import styles from './form.module.css'

export default function Index(){
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <label htmlFor="email">email address</label><br />
                <input type="email" name='email'/>
            </form>
            <form className={styles.form}>
                <label htmlFor="password">password</label><br />
                <input type='password' name='password'/>
            </form>
            <div className={styles.alert}>
                <p>password incorrect</p>
            </div>
            <div className={styles.buttonContainer}>
                <p><a href="#">forgot password?</a></p>
                <button className={styles.button} type='submit'>login</button>
            </div>
            
        </div>
    )
}