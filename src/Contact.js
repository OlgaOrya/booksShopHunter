import './App.css';
import { FaBell,FaGlobe,FaHourglassStart,FaFacebookF, FaTelegram, FaVk } from "react-icons/fa";


function Contact(){
    return(
        <div>
        <div>
            <h1 className='about'> Can to find us</h1>
            <p className='contactInfo'><FaBell style={{color:'#187498',fontSize:'25px'}}/><span className='titleContact'> Phone number: </span> +7 287 0998 090 090</p>
            <p className='contactInfo'><FaGlobe style={{color:'#FCD900',fontSize:'25px'}} /><span className='titleContact'> Adress: </span> Amper street, 37 Paris France </p>
        <div>
            <p className='contactInfo'><FaHourglassStart style={{color:'#001E6C',fontSize:'25px'}}/><span className='titleContact'> Hours opening: </span>  from 8 a.m. to 7 p.m.</p>
        </div>
        </div>
        <div className='container socialContact'>
            <FaFacebookF style={{background:'#001E6C', color:'white',borderRadius:'90px',padding:'10px',marginRight:'20px'}}/> 
            <FaTelegram style={{background:'#001E6C', color:'white',borderRadius:'90px',padding:'10px',marginRight:'20px'}} /> 
            <FaVk style={{background:'#001E6C', color:'white',borderRadius:'90px',padding:'10px'}}/>
        </div>
        <div className='container'>
        <p className='lastTextContact'>Welcome to BOOK'S HUNTER</p>
        </div>
        </div>

    )
}

export default Contact;