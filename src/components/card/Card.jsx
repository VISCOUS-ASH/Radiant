import React from 'react'
import "./Card.scss"
import pc1 from "../../assets/pc1.png"
const Card = () => {
  return (
    <div className='card_container'>
        <div className='heading'>Related deals you might like for</div>
        <div className='cards'>
        <div className='card'>
            <div className='card_in'>
                <img src={pc1} alt="imag"  />
                <div className='card_des'>
                <div><span className='disc'>20% off</span><span className='disc'>Limited time</span></div>
                <p className='web'><strong>Web Builder 1</strong></p>
                <p className='line'>Computer Modern classic with wix support</p>
                <div className='lasty'>
                <span>$39.96</span><span>$49.96</span><span>(20% off)</span>
                </div>
                </div>
                <button>View</button>
            </div>
        </div>

        <div className='card'>
            <div className='card_in'> 
                <img src={pc1} alt="imag"  />
                <div className='card_des'>
                <div><span className='disc'>20% off</span><span className='disc'>Limited time</span></div>
                <p className='web'><strong>Web Builder 1</strong></p>
                <p className='line'>Computer Modern classic with wix support</p>
                <div className='lasty'>
                <span>$39.96</span><span>$49.96</span><span>(20% off)</span>
                </div>
                </div>
            <button>View</button>
            </div>
        </div>

        <div className='card'>
            <div className='card_in'>
                <img src={pc1} alt="imag"  />
                <div className='card_des'>
                <div ><span className='disc'>20% off</span><span className='disc'>Limited time</span></div>
                <p className='web'><strong>Web Builder 1</strong></p>
                <p className='line'>Computer Modern classic with wix support</p>
                <div className='lasty'>
                    <span>$39.96</span><span>$49.96</span><span>(20% off)</span>
                </div>
                </div>
            <button>View</button>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Card