import { Restaurant } from "../utils/mockData";

interface CardProps {
    dummyData: Restaurant
}

const Card = (props: CardProps) => {
    const { 
        name, 
        description, 
        imgSrc, 
        rating, 
        reviews, 
        cuisine, 
        priceRange 
    } = props.dummyData;
    
    return (
        <div className='card'>
            <img src={imgSrc} alt='card-image' />
            <h2>{name}</h2>
            <h4>{description}</h4>
            <div className='card-footer'>
                <p>Rating: {rating} ({reviews} reviews)</p>
                <p>Cuisine: {cuisine} | {priceRange}</p>
            </div>
        </div>
    )
}
export default Card;