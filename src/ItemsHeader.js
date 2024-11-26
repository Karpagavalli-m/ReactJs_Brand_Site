import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const ItemsHeader = ({title}) => {
  return (
    
    <div className='d-flex justify-content-between'>
        <h4 className='d-inline'>{title}</h4>
        <h4 className='d-inline text-primary'><IoIosArrowDroprightCircle  /></h4>
        </div>
 
  )
}

export default ItemsHeader