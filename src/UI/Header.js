
import { Link } from 'react-router-dom'
import logo from '../starter-code/assets/shared/logo.svg'
import hamburger from '../starter-code/assets/shared/icon-hamburger.svg'
import '../Styles/Header.css'
import { useState } from 'react'

export default function Header(){

    // use conditional rendering for the links on the page
    let [Mainlink,setMainlink]=useState(false)
      function handlelink(){
        setMainlink((prevMianlink)=>!prevMianlink)
      }

    return(
        <header className="page-header flex">
        <img src={logo} alt="star-logo" className="star-logo" />
        <nav className="main-navigation">
            { Mainlink&&<ul className="nav-links flex">
                <li className="home-link">
                    <Link to='/' ><span className="link-num">00</span>HOME</Link>
                </li>
                <li className="destination-link">
                    <Link to='destination'><span className="link-num">01</span>DESTINATION</Link>
                </li>
                <li className="crew-link">
                    <Link to='crew'><span className="link-num">02</span>CREW</Link>
                </li>
                <li className="technology-link">
                    <Link to='technology'><span className="link-num">03</span>TECHNOLOGY</Link>
                </li>
            </ul>}
        </nav>
        <img src={hamburger} alt="hamburger" className="hamburger" onClick={handlelink} />
        </header>
    )
}
