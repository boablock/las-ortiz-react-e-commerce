

import React from 'react'

const ItemListContainer = (props) => {
    const{greeting} = props;
  return (
    <div>
        <p className='greeting' style={{fontSize: "2rem"}}>
            {greeting}
        </p>
    </div>
  )
}

export default ItemListContainer