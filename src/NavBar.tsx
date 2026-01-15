
function NavBar(){

    const navbarStyle: React.CSSProperties = {
            backgroundColor: 'darkblue',
            display: "flex",
            width: 350,
            height: 50,
            border: '3px solid',
            borderColor: "white",
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center"
    };

    const navbarButtonsStyle: React.CSSProperties = {
        marginRight: 2,
        marginLeft: 2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25 
    };


    return (
        <>
        <nav style={navbarStyle}>
            <div>
                <button style={navbarButtonsStyle}><a href="">Home</a></button>
                <button style={navbarButtonsStyle}><a href="">About</a></button>
                <button style={navbarButtonsStyle}><a href="">Experience</a></button>
            </div>
        </nav>
        </>
    )
}

export default NavBar;