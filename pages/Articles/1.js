import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Articles.module.css'
import Image from 'next/image'
import Footer from '../../comps/footer'
import Navbar from '../../comps/Navbar'

const One = () => {
    return (
        <>
        <section>
        <div>
            <a href="../"><span className={styles.styles_button}>←</span> </a>
            <h1 className={styles.styles_main_article_title__pIN8z}>Sam's BMW 325i</h1>
            <p className={styles.paragraph}>The BMW E36 is the third generation of the BMW 3 Series range of compact executive cars, and was produced from 1990 to 2000. The initial models were of the four-door sedan body style, followed by the coupe, convertible, wagon ("Touring") and hatchback ("Compact") body styles in later years.

The E36 was the first 3 Series to be offered in a hatchback body style. It was also the first 3 Series to be available with a six-speed manual transmission (in the 1996 M3), a five-speed automatic transmission and a four-cylinder diesel engine. The multi-link rear suspension was also a significant upgrade as compared to the previous generations of the 3 Series. All-wheel drive was not available for the E36, unlike the previous (E30) and successive (E46) generations.

The E36 was named in Car and Driver magazine's 10Best list for every year it was on sale.[3]

The high performance E36 M3 is powered by the BMW S50 or BMW S52 straight-six engine (depending on country). The E36 M3 was introduced in 1992 and was available in coupé, sedan and convertible body styles.</p>            
            <p className={styles.paragraph}> Below is an awful pic of Sam dressed as Samta with his e36 325i with an m52b28 in it. </p>
        </div>

<div className={styles.logo}>
<img src="../325iSanta.jpg" width={700} height={700}/>
</div>
</section>
</>
    );
}
 
export default One