import Head from 'next/head'
import styles from '../../styles/sams.module.css'
import Link from 'next/link'
import Footer from '../../comps/footer'
import Navbar from '../../comps/Navbar'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { homies: data }
    }

}

const Homies = ({ homies }) => {
    return (
        <>
            <Head>
                <title>Sam List | Work</title>
                <meta name="keywords" content="Homies" />
            </Head>
            <div>
                {homies.map(homie =>(
                    <Link href={'/homies/' + homie.id} key={homie.id}>
                        <a className={styles.single}>
                            <h3>{homie.name}</h3>
                        </a>
                    </Link>
                ))}
            </div> 
        </>
    );
}
 
export default Homies;