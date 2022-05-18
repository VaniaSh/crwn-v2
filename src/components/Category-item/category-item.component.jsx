import './category-item.styles.scss'
import {useNavigate} from "react-router-dom";

const CategoryItemComponent = ({category}) => {
    const {imageUrl, title, size, route} = category;
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)
    return (
        <div className={`${size} category-container`} onClick={onNavigateHandler}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='category-body-container'>
                <h2 className='title-main' >{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItemComponent