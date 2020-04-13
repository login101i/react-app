import React from 'react'
import '../styles/loginPage.css'

const LoginPage = () =>{
    return(
        <div>
<label htmlFor="">Podaj login <input type="text"/></label>
<label htmlFor="">Podaj haslo <input type="text"/></label>
<button>Zaloguj się koleżko</button>
</div>
    )
} 

export default LoginPage