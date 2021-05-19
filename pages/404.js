import Link from 'next/link'
import { useEffect } from 'react'
import {Router, useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Footer from '../comps/footer'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go();
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1 href={styles.text}>Oooops...</h1>
            <h2 href={styles.text}>That page cannot be found :(</h2>
            <p href={styles.text}>Go back to the <Link href="/"><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default NotFound;