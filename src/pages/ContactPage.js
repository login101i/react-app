import React from 'react'
import "../styles/contactPage.css"
import {Prompt} from "react-router-dom"


class ContactPage extends React.Component{
    state={
        value:"",
        isEmpty:true,
        
    }

    handleChange=(e)=>{
        if(e.target.value.length>0){
        this.setState({
            value:e.target.value,
            isEmpty:false
        })
    }
    else{
        this.setState({
            value:e.target.value,
            isEmpty:true
        })
    }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            value:""
        })
    }
render(){
    return(
        <div className="contact">
            <form>
                <h3>Napisz do nas</h3>
                <textarea value={this.state.value}
                onChange={this.handleChange}
                placeholder="Wpisz wiadomość"
                onSubmit={this.handleSubmit}></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt
            when={!this.state.isEmpty}
            message="Masz niewypełniony formularz koleżko. Chcesz przejść jednak dalej?"
            />
        </div>
        
    )
}
}


export default ContactPage