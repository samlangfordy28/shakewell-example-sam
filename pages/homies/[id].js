import Head from 'next/head'
import Footer from '../../comps/footer'
import Navbar from '../../comps/Navbar'
import styles from '../../styles/sams.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(homie => {
      return {
        params: { id: homie.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { homie: data }
    }
  }
  
  const Details = ({ homie }) => {
    return (
      <div>
        <h1 className={styles.title}>{ homie.name }</h1>
        <p className={styles.text}>{ homie.email }</p>
        <p className={styles.text}>{ homie.website }</p>
        <p className={styles.text}>{ homie.address.city }</p>
      </div>
    );
  }
  
  export default Details;