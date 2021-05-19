import Head from 'next/head'
import Footer from '../comps/footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
   <>
    <Head>
    <title>Sam's Website | Home</title>
    <meta name="keywords" content="Sam" />
    </Head>

<main className={styles.styles_main__1UtR1}>
<section>
          <div className={styles.logo}>
            <img src="shakewell.png" width={700} height={700}/>
          </div>
          <h1 className={styles.Home_title__28pEg}>A group of devs, making internet things</h1>

          <div className={styles.Home_wrapper__2dFPW}>
            <div className={styles.styles_grid__2L3Az}>

              <div className={styles.styles_card__3MUSM}> 
                <div className={styles.styles_content_wrapper__1xPs3}>
                <div className={styles.logo}>
                <img src="shakewell.png" width={128} height={128}/>
                </div>
                <a className = {styles.stuff} href="../Articles/1">
                    <h3>Article 1 ➡ </h3>
                    <p>Published: Wed 20 September 2017</p>
                    <p>This is about Sam's BMW 325i</p>
                    <p>Author: Sam Langford</p>
                    </a>
                <div className={styles.styles_article_tag_wrapper__3TN_o}>
                  <li className={styles.styles_article_tag__Rf}>#BMW</li>
                  <li className={styles.styles_article_tag__Rf}>#E36</li>
                  <li className={styles.styles_article_tag__Rf}>#MICHAELISCOOL</li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={50} height={50}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div> 
                </div>
              </div>

              <div className={styles.styles_card__3MUSM}>
              <div className={styles.styles_content_wrapper__1xPs3}>
              <div className={styles.logo}>
                <img src="shakewell.png" width={128} height={128}/>
                </div>
                <a className={styles.stuff} href="../Articles/2">
                    <h3>Article 2 ➡ </h3>
                    <p>Published: Wed 28 October 2020</p>
                    <p>This is about Sam's BMW 735i</p>
                    <p>Author: Sam Langford</p>
                  </a>
                <div className={styles.styles_article_tag_wrapper__3TN_o}>
                  <li className={styles.styles_article_tag__Rf}>#BMW</li>
                  <li className={styles.styles_article_tag__Rf}>#E36</li>
                  <li className={styles.styles_article_tag__Rf}>#MICHAELISCOOL</li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={50} height={50}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div> 
              </div>
              </div>

              <div className={styles.styles_card__3MUSM}>
              <div className={styles.styles_content_wrapper__1xPs3}>
              <div className={styles.logo}>
                <img src="shakewell.png" width={128} height={128}/>
                </div> 
                <a className={styles.stuff} href="../Articles/3">
                <h3>Article 3 ➡ </h3>
                    <p>Published: Wed 18 May 2021</p>
                    <p>This is about Sam's next car: a Hilux</p>
                    <p>Author: Sam Langford</p>
                </a>
                <div className={styles.styles_article_tag_wrapper__3TN_o}>
                  <li className={styles.styles_article_tag__Rf}>#BMW</li>
                  <li className={styles.styles_article_tag__Rf}>#E36</li>
                  <li className={styles.styles_article_tag__Rf}>#MICHAELISCOOL</li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={50} height={50}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>

              </div>
              </div>   

            </div>
          </div>
        </section> 
</main>


    </>
  )
}


