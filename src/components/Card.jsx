const Card = (props) => {
    const { name, description, imgSrc, rating, reviews } = props?.data;
    return (
        <div className='card'>
            <img src={imgSrc} alt='card-image' />
            <h2>{name}</h2>
            <h4>{description}</h4>
            <div className='card-footer'>
                <p>Rating: {rating} ({reviews} reviews)</p>
            </div>
        </div>
    )
}
export default Card;