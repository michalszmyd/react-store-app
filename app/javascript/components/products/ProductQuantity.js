import React from 'react';

export default function ProductQuantity ({ quantity, onChange }) {
  return (
    <div className="quantity">
      <label htmlFor="quantity">Quantity</label>
      <div className="input-group">
        <input
          id="quantity"
          className="form-control"
          type="number"
          value={quantity}
          onChange={onChange}
          name="quantity"
        />
      </div>
    </div>
  )
}
