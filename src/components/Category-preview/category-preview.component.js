import Card from "../Card/card.component";

import './category-preview.styles.scss'

const CategoryPreview = ({title, products}) => {

    return (
        <div className='category-preview-container'>
            <h2>
                <span>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {products.filter((_, idx) => idx < 4).map((product) => <Card key={product.id} product={product}></Card>)}
            </div>
        </div>
    )
}
export default CategoryPreview