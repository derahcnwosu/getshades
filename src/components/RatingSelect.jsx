import React, { useState } from 'react'
import '../App.css'

function RatingSelect({select}) {
    const [selected, setSelected] = useState(5)
    const handleChange = (e) => {
        setSelected(+e.target.value)
        select(+e.target.value)
    }
    
  return (
    <div className="rating-select">
        <ul className='rating'>
            <li>
                <div className="num num1">     
                    <input type="radio" name="rating" id="num1" value= '1' checked = {selected === 1} onChange = {handleChange}/>
                    <label htmlFor="num1">1</label>
                </div>
            </li>
            <li>
                <div className="num num2">
                    <input type="radio" name="rating" id="num2" value= '2' checked = {selected === 2} onChange = {handleChange}/>
                    <label htmlFor="num2">2</label>              
                </div>
            </li>
            <li>
                <div className="num num3">
                    <input type="radio" name="rating" id="num3" value= '3' checked = {selected === 3} onChange = {handleChange}/>
                    <label htmlFor="num3">3</label>
                </div>
            </li>
            <li>
                <div className="num num4"> 
                    <input type="radio" name="rating" id="num4" value= '4' checked = {selected === 4} onChange = {handleChange}/>
                    <label htmlFor="num4">4</label>
                </div>
            </li>
            <li>
                <div className="num num5">
                    <input type="radio" name="rating" id="num5" value= '5' checked = {selected === 5} onChange = {handleChange}/>
                    <label htmlFor="num5">5</label>
                </div>
            </li>
        </ul>    
    </div>
  )
}

export default RatingSelect