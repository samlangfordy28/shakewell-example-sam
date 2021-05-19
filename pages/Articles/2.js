import Footer from '../../comps/footer'
import Navbar from '../../comps/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Articles.module.css'
import Image from 'next/image'

const Two = () => {
    return (
<>
        <div>
        <a href="../"><span className={styles.styles_button}>←</span> </a>
        <h1 className={styles.styles_main_article_title__pIN8z}>Sam's BMW 735i</h1>
        <p className={styles.paragraph}>The BMW E32 is the second generation of the BMW 7 Series luxury cars and was produced from 1986 to 1994. It replaced the E23 and was initially available with straight-six or V12 powerplants. In 1992, V8 engines became available. From its inception, the E32 was widely considered the most technologically advanced series of cars in its day and set the standard for performance luxury cars well into the 1990s.

The E32 introduced several features for the first time in a BMW: Electronic Damper Control,;[7] Traction Control System;[8] standard and long wheelbase length (i and iL); and dual-zone climate control.[9] The E32 750i was the first car adhering to "gentlemen's agreement" amongst the German manufacturers limiting maximum speed to 250 km/h (155 mph).[10]

Additionally, some of world's first automotive features for passenger vehicles were introduced in E32: projector lens headlamps (1986); double glazing windows (1991, beating Mercedes-Benz by a few months); HID (Xenon) headlamps (1991);[11]

E32 also introduced BMW's first V8 engine since the BMW 501/502, last produced in 1962, and their first V12 engine, which was also Germany's first post-war V12 engine for a passenger vehicle. The surprise news of BMW's V12 also caused Mercedes-Benz to delay the introduction of W140 by two years from 1989 to 1991.</p>
        <p className={styles.paragraph}> Below is a pic of Sam's project e32 with an m30b35, and somehow isn't done yet. </p>
        </div>
        <div className={styles.logo}>
        <img src="../735i.jpg" width={500} height={500}/>
        </div>
        </>
    );
}
 
export default Two