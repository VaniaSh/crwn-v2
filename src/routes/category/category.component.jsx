import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../contexts/product.context";
import Card from "../../components/Card/card.component";

import './category.styles.scss'

const Category = () => {

    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])


    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-page-container'>
                {products && products.map((product) => <Card product={product} key={product.id}/>)}
            </div>
        </>
    );
};

export default Category;