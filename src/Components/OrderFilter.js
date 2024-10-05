import React from 'react'

const OrderFilter = () => {
  return (
    <div>
      
      <ul class="list-group">
    <li className="list-group-item" style={{ backgroundColor: '#dcdcdc' }}>
      <h2>Price</h2>
    </li>
    
      <li class="list-group-item ">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
        Low to high
      </li>
      <li class="list-group-item" >
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
        High to low
      </li>
      </ul>
      
      </div>
  )
}

export default OrderFilter