import React from 'react'

interface Props {
  children?: React.ReactNode
}
const Wrapper = ({...props}: Props) => {
  // const style = {
  //   border: '2px solid black',
  //   padding: '16px'
  // }
  const style: React.CSSProperties = {
    
  }
  return <div style={style}>
    {props.children}
  </div>
}

export default Wrapper