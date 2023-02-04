import { useState } from "react";
import { datas } from "./datas";
import './App.css'
import {Link} from "react-router-dom";

function Slider(){
    const [slider,setSlider] = useState(0);
    const {image} = datas[slider];

    const previousFoto =() =>{
        setSlider((slider =>{
            slider --;
            if(slider <0){
                return datas.length-1;
            }
            return slider;
        }))
    }

    const nextFoto = () =>{
        setSlider ((slider =>{
        slider ++;
        if(slider > datas.length -1){
            slider =0;
        }
        return slider;
        }))
    }

    return(
        <div>
            <div className="container">
            <button className="btnSlider" onClick ={previousFoto} >Previous</button>
            <img className="sliderPicture" src = {image} alt ="persons" width="600px" />
            <button className="btnSlider" onClick={nextFoto}>Next</button>
            </div>

            <div className="container">
                <h2 className="titleSlider">How do you like to read the books?!</h2>
            </div>

            <div className="container">
            <Link to ='/home' target='_blank'>
                <button className="btnChose btnShop">CHOOSE BOOK</button>
            </Link>
            </div>
            </div>
    );
}
export default Slider;