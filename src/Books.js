import { useState } from "react";

function Books({itemBooks}){
    const [showText,setShowText] = useState(false);
    const showTextClick = (element) =>{
        element.showText=!element.showText;
        setShowText (!showText);
    }
    return(
        <div>
        {itemBooks.map(( element =>{
        const {id, title,author,description,price,image,showText} = element;

            return(
                <div className="books container" key={id}>
                    <img className="booksPicture" src={image} alt ="books" width="200px" height="250px"/>
                <div className="infoAboutBook">
                    <h3 className="titleAuthor">{title}<span> by {author}</span></h3>
                    <p className="price">Price: {price}</p>
                    <p className="descriptionBook">{showText? description : description.substring(0,170) + '...'}
                    <button className="btnShowDescription" onClick={() =>showTextClick (element)}>{showText? "LESS" : "MORE"}</button></p>
                </div>
                </div>
            )
        }))}
        </div>
    )
}

export default Books;