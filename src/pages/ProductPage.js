import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'


const ProductPage = () => {
    return (
        <>
            <div>Strona produktu koleżko :)</div>
            <Product />
            <Link to='/produkty'>Powrót do listy produktów kolleeżżkkoo</Link>

        </>
    )
}

export default ProductPage