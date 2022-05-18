import {Fragment, useContext} from "react";
import {CategoriesContext} from "../../contexts/product.context";
import CategoryPreview from "../../components/Category-preview/category-preview.component";


const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    console.log(categoriesMap)
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title]
                return (
                    <CategoryPreview key={title} title={title} products={products}/>
                )
            }) }

        </Fragment>
    )

}
export default CategoriesPreview


