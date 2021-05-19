import Footer from '../../comps/footer'
import Navbar from '../../comps/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Articles.module.css'
import Image from 'next/image'

const Three = () => {
    return (
        <>
        <div>
            <a href="../"><span className={styles.styles_button}>←</span> </a>
            <h1 className={styles.styles_main_article_title__pIN8z}>The cool next car</h1>
            <p className={styles.paragraph}>The Toyota Hilux (Japanese: トヨタ・ハイラックス, Toyota Hairakkusu) (stylized as HiLux and historically as Hi-Lux) is a series of pickup trucks produced and marketed by the Japanese automobile manufacturer Toyota. The majority of these vehicles are sold as pickup truck or cab chassis variants, although they could be configured in a variety of body styles. The pickup truck was sold with the HiLux name in most markets, but in North America, the Hilux name was retired in 1976 in favor of Truck, Pickup Truck, or Compact Truck. In North America, the popular option package, the SR5 (Sport Runabout 5-Speed), was colloquially used as a model name for the truck, even though the option package was also used on other Toyota models, like the 1972 to 1979 Corolla. In 1984, the Toyota Trekker, the camper version of the Hilux, was renamed the 4Runner in Venezuela, Australia and North America, and the Hilux Surf in Japan. In 1995, Toyota introduced a new pickup model, the Tacoma, in North America, thus discontinuing the Hilux/Pickup. The 4Runner is now a full SUV, and the more recent models of the Hilux are separate in appearance from the Tacoma.</p>
            <p className={styles.paragraph}>In June 2020, Toyota unveiled the second facelift of the AN120/130 series Hilux for select Asian and European markets. The second facelift model received revised front and rear with LED headlamps and tail-lamps and front LED indicators, a first for the Hilux, and redesigned 18-inch alloy wheels. For some South-East Asian market, the Hilux is equipped with Toyota Safety Sense. This facelift of the Hilux was introduced in Japan in August 2020 after skipping the 2018 facelift and is currently offered in base X and Z trim levels. The power and torque figures for 2.8-litre 1GD-FTV engine has been upgraded to 204 PS (150 kW; 201 hp) and 500 N⋅m (369 lbf⋅ft) (in automatic transmission).[64]</p>
        </div>
        <div className={styles.logo}>
        <img src="../lux.jpg" width={1000} height={700}/>
        </div>
        </>
    );
}
 
export default Three