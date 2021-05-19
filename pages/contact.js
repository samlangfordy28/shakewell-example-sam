import Head from 'next/head'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
    return (
    <>
        <Head>
            <title>Sam List | Contact</title>
            <meta name="keywords" content="Sam" />
        </Head>
        <div>
        <div className={styles.logo}>
        <img src="shakewell.png" width={300} height={300}/>
        </div>
        <h1 className={styles.title}>Contact Us!!</h1>
        <h2 className={styles.text}>Sam Langford</h2>
        <h2 className={styles.text}>mrsamman2810@gmail.com</h2>
        <h2 className={styles.text}>0423077357</h2>
      </div>
    </>
    );
}
 
export default About;
