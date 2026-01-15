import './NavBar.css'


function NavBar() {


    return (
        <>
            <nav className="navbar">
                <button className="outerNavbarButtonsStyle"><a href="#">Developer</a></button>
                <div>
                    <button className="innerNavbarButtonsStyle"><a href="">Home</a></button>
                    <button className="innerNavbarButtonsStyle"><a href="">About</a></button>
                    <button className="innerNavbarButtonsStyle"><a href="">Experience</a></button>
                </div>
                <button className="outerNavbarButtonsStyle contactButton"><a href="#">Contact</a></button>

            </nav>
        </>
    )
}

export default NavBar;