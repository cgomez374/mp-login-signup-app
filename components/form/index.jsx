import { useState } from 'react'
import styles from './form.module.css'

export default function Index({ signIn }){
    /*
        depending if the signin tag is false or true the 
        text and input will change; need to figure how to 
        set the text from the beginning
    */


    const [inputOne, setinputOne] = useState({
        name: 'email',
        text: 'email address'
    });

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <label htmlFor={inputOne.name}> {inputOne.text} </label><br />
                <input type={inputOne.name} name={inputOne.name}/>
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