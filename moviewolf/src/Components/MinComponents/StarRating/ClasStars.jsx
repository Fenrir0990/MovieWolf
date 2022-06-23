import React, {useState} from "react";
import {FaStar} from "react-icons/fa"
import "./StarRating.css"
const StarReiting = ({rating,setRating,hover,setHover,filter})=>{
    /* const [rating,setRating] = useState(null);
    const [hover, setHover] = useState(null); */
    
    //**Functions**//
    const ratingSet = (rango)=>{
        if(rango !== rating) {
            setRating(rango)
            filter(rango)
        }
        else{
            setRating(null)
            filter(null)
        }
    }
    return (
        <div>
            {
                [...Array(5)].map((star,i)=>{
                    const ratingValue = 1+i
                    return (
                        <label key={ratingValue}>
                            <input
                                className="input"
                                type="radio" 
                                name= "rating" 
                                value={ratingValue}
                                onClick={()=>ratingSet(ratingValue)}
                                /* onChange={()=>filter(rating)} */
                                
                                />
                            <FaStar
                                className="star" 
                                color={ratingValue<=(hover||rating)?"red":"grey"} 
                                size={25}
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                                />
                            
                        </label>
                    )
                })
            }
        </div>

    )
}



export default StarReiting 