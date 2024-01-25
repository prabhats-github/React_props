import React from 'react'


export const Home=(props)=> {
  return (
    <div>
        {props.p1.map((item,i)=>{
            return <h1>{item.Name},{i}</h1>
        })}
    </div>
  )
}
export default Home;