import React from 'react'

const withChildFunction=(Wrapped)=>{
 return  (props)=>{
  return <Wrapped {...props}>
    {i=>i.name}
  </Wrapped>
 }
}

export default withChildFunction;