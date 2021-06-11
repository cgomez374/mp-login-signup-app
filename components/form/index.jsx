import styles from './form.module.css'

export default function Index({ signIn }){
    return(
        <div className={styles.container}>
            {signIn === false ? 
                <form className={styles.form}>
                    <label htmlFor='name'> full name </label><br />
                    <input type='name' name='name'/>
                </form>
                : null }
            <form className={styles.form}>
                <label htmlFor='email'> email address </label><br />
                <input type='email' name='email'/>
            </form>
            <form className={styles.form}>
                <label htmlFor="password">password</label><br />
                <input type='password' name='password'/>
            </form>
            <div className={styles.alert}>
                <p>password incorrect</p>
            </div>
            <div className={styles.buttonContainer}>
                <p><a href="#"> {signIn === false ? null : 'forgot password?'}</a></p>
                <button className={styles.button} type='submit'> {signIn === false ? 'register' : 'login'} </button>
            </div>
        </div>
    )
}