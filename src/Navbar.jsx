import React, {useState, useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
               handleShow(true)
           }else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className = {`nav ${show && 'nav_black'}`}>
            <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix logo"
                className="nav_logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
                className="nav_avatar" />
        </div>
    )
}

export default Navbar
