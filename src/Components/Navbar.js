import '../Styles/Navbar.css';
import { MobileNav } from './MobileNav';

export const Navbar = () =>{
    return (
        <>
        <div className="nav-container">
            <p className='logo'>room</p>
            <nav>
                <a className = "nav-1" href="/">home</a>
                <a className = "nav-2" href="/">shop</a>
                <a className = "nav-3" href="/">about</a>
                <a className = "nav-4" href="/">contact</a>
            </nav>
        </div>
        <MobileNav />
        </>
    )
}
