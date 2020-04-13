// obrazy są za duże!!!!
import React from 'react'
import "../styles/header.css"
import { Route, Switch } from "react-router-dom"

import img1 from '../images/IMG_2839.JPG'
import img2 from '../images/IMG_2840.JPG'
import img3 from '../images/IMG_2841.JPG'
import img4 from '../images/IMG_2844.JPG'
import img5 from '../images/IMG_2955.JPG'



const Header = () => {
    const images=[img1,img2,img3];
    const index=Math.floor(Math.random()*3)

    const img=images[index]
    return (

        // Route i tworzenie nowego komponentu
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="oczy" />
                )} />
                <Route path="/produkty" render={() => (
                    <img src={img2} alt="oczy" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img3} alt="oczy" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img4} alt="oczy" />
                )} />
                <Route render={() => (
                    <img src={img5} alt="oczy" />
                )} />
            </Switch>
           {/* <img src={img} alt=""/> */}
        </>




    )
}


export default Header
