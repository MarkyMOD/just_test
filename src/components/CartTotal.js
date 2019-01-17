import React from 'react'


  const CartTotal = (props)=> {
    let totalPIC = props.cartItemsList.map(price => price.product.priceInCents)
    let total = totalPIC.reduce((a,b) => a+b)

    return (
      <div className="container">
      <br/>
        <div className="col-md-12">
          <div className="row">
            Total Price: ${(total/100).toFixed(2)}
          </div>
        </div>
        <br/>
      </div>



    )
  }

export default CartTotal
