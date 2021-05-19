import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <Link href="/"><a className="text">Home</a></Link>
            <Link href="/homies"><a>Work-Team</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
     );
}
 
export default Navbar;