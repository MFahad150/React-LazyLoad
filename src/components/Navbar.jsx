import "../App.css";

function Navbar (){
    return(
        <>
 <header>
        <div class="brand"><a href="#">React LazyLoad</a></div>
        <nav>
            <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#contact-us">CONTACT US</a></li>
            </ul>
        </nav>
    </header>
        </>
    );
}

export default Navbar;