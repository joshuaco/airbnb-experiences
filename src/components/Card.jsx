import './Card.css';

const Card = ({ img, rating, review, country, price, title, openSpots }) => {
  let badgeText = "";
  openSpots > 0 
    ? badgeText = "ONLINE" 
    : badgeText = "SOLD OUT"
  return (
    <div className='card'>
      <div className='card--badge'>
        {badgeText}
      </div>
      <img src={img} alt='katie' className='card--img' />
      <div className='card--stats'>
        <img src='../svg/star.svg' alt='star' className='card--star' />
        <span>{rating}</span>
        <span className='gray'>({review})</span>
        <span className='gray'>• {country}</span>
      </div>
      <p>{title}</p>
      <p>
        <strong>From {price}$</strong> / person
      </p>
    </div>
  );
};

export default Card;
