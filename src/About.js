import {Link} from "react-router-dom";

function About(){
    return(
        <div>
        <div>
            <h1 className="about">About us</h1>
        <div className="imageAboutUsOne">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="person" width="150px" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="person" width="150px" />
            <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="person" width="150px" />
        <div className="imageAboutUsTwo">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="person" width="150px" />
            <img src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="person" width="150px" />
            <img src="https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="person" width="150px" />

        </div>
        </div>
        </div>
        <div className="containerAboutUs">
            <p className="textAboutUs">We are a team of people who love books, so why not share our love and open a store for everyone.
            We know the feeling when good novels end too quickly, there is not enough time on the road to finish reading a chapter, and the heroine cannot find her love in any way. 
            We know how fast time flies in the company of a new favorite author and how much we want to stretch this pleasure.
            In addition to books, you can find stationery, sweets, gift wrapping and ideas for surprises for loved ones. 
            We ourselves develop designs for many diaries, bookmarks, creative goods and other interesting things, so you can't find them anywhere else except in our company.</p>
        </div>
        <div className="container">
        <Link to ='/home' target='_blank'>
            <button className="btnChose btnShop">CHOOSE BOOK</button>
        </Link>
            </div>
        </div>
    )
}

export default About;