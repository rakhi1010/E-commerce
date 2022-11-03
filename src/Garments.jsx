import React from 'react'
import img1 from './gp2.jpg'
import img2 from './gp3.jpg'
import img3 from './gp5.png'
import img4 from './gp6.png'
import img5 from './gp1.jpg'
import img6 from './gp4.png'

function Garments() {
  return (
    <>
      <div className="hedaer">
        <h1>Mens Jean's , T-shirts & Shirts Collections</h1>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-4">
            <img src={img1} alt="p1"></img>
            <p>
              <span>Men's Jeans</span>{' '}
            </p>
            <span>Price : 699.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img2} alt="p2"></img>
            <p>
              <span>Men's Jeans</span>{' '}
            </p>
            <span>Price : 799.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img3} alt="p2"></img>
            <p>
              <span>Men's Shirt's</span>{' '}
            </p>
            <span>Price : 599.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <img src={img4} alt="p2"></img>
            <p>
              <span>Men's Shirt's</span>{' '}
            </p>
            <span>Price : 499.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img5} alt="p2"></img>
            <p>
              <span>Men's Jacket</span>{' '}
            </p>
            <span>Price : 999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img6} alt="p2"></img>
            <p>
              <span>Men's Sweat T-Shirt</span>{' '}
            </p>
            <span>Price : 699.00 Only</span>
            <br />
            <button>AddToCart</button>

            <button>ByNow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Garments
