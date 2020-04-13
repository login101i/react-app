import React from 'react'
import Article from '../components/Article'


const articles = [
  {
    id: 1,
    title: "Pierwszy",
    author: "Mac Krus",
    text: "11111111Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, temporibus impedit!"
  },
  {
    id: 2,
    title: "Drugi",
    author: "Anna",
    text: "22222222222222222222Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, temporibus impedit!"
  },
  {
    id: 3,
    title: "Trzeci",
    author: "Milena",
    text: "3333333333333333Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, temporibus impedit!"
  }
]

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id}{...article} />
  ))
  return (
    <>
      <div className="home">
        {artList}

      </div>
    </>
  )
}

export default HomePage