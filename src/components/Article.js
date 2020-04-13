import React from 'react'

const Article = ({title, author, text}) => {

    const styles={
        marginTop:40,
    }
    return(
        <article style={styles}>
            <h3 style={{
                textTransform:"uppercase",
                marginBottom:5
            }}
            >{title}</h3>
            <span style={{
                fontSize:12
            }}>{author}</span>
            <p style={{
                fontSize:15
            }}>{text}</p>
        </article>
    )
}

export default Article