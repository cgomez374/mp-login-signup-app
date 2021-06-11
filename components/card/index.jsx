import styles from './card.module.css'
import Form from '../form/index'
import Head from 'next/head'
import { useState } from 'react'

export default function Index() {
    //Instead of another page we will set the text to variables
    const [cardText, setCardText] = useState({
        signIn: true,
        h1Title: 'welcome back',
        h2Title: "sign in",
        para: 'new to register?',
        link: 'sign up'
    });

    // const [signIn, setSignIn] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();

        if(cardText.signIn === true){
            setCardText({
                signIn: false,
                h1Title: 'register for MPA',
                h2Title: "sign up",
                para: 'already have an account?',
                link: 'sign in'
            });
        }
        else if(cardText.signIn === false){
            setCardText({
                signIn: true,
                h1Title: 'welcome back',
                h2Title: "sign in",
                para: 'new to register?',
                link: 'sign up'
            });
        }
    }

    return(
        <div className={styles.cardContainer}>
            <Head>
                <title>MPA Sign In</title>
            </Head>
            <div className={styles.cardLeft}>
                <div className={styles.contentContainer}>
                   <div className={styles.cardLeftLogo}>
                        <img src="./mp-icon.png" alt="icon" />
                    </div>
                    <div className={styles.innerText}>
                        <h1>{cardText.h1Title}</h1>
                        <p>To keep connecting with us please <br /> register with your perfonal info</p>
                    </div> 
                </div>
            </div>
            <div className={styles.cardRight}>
                <div className={styles.cardRightText}>
                    <div className={styles.imgContainer}>
                        <img src="./closeIcon.png" alt="icon" />
                    </div>
                    <h2>{cardText.h2Title}</h2>
                    <p>{cardText.para} 
                        <a href='#' onClick={ handleClick }> {cardText.link}</a>
                    </p>
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
                <Form signIn={cardText.signIn}/>
            </div>
        </div>
    )
}