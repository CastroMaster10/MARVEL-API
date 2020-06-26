import React,{useState} from 'react';
import { IoIosStar , IoIosStarOutline } from "react-icons/io";
import '../assets/styles/Rating.css'

const Rating = () => {

    const [rating,setRating] = useState(1)
    const styles = {
        starStyle:{
            color   : 'gold'
        }
    }

    return (
      <div className="rating-container" style= {styles.starStyle}>
        {rating >= 1 ? (
          <IoIosStar  onClick={() => setRating(1)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(1)} />
        )}
        {rating >= 2 ? (
          <IoIosStar  onClick={() => setRating(2)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(2)} />
        )}
        {rating >= 3 ? (
          <IoIosStar  onClick={() => setRating(3)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(3)} />
        )}
        {rating >= 4 ? (
          <IoIosStar  onClick={() => setRating(4)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(4)} />
        )}
        {rating >= 5 ? (
          <IoIosStar  onClick={() => setRating(5)} />
        ) : (
          <IoIosStarOutline onClick={() => setRating(5)} />
        )}

      </div>
    );
}

export default Rating