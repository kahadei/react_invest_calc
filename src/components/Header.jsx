import logo from '../assets/logo.png'

function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Investment calculator logo"/>
            <h1>Investment Calculator</h1>
        </header>
     );
}

export default Header;