import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  const onClickIncrease = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
  {
    //setCount(prev => prev + 1)
    setCount(count + 1)
  }

  function onClickDecrease(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //setCount(prev => prev - 1)
    setCount(count - 1)
  }

  return (
  <div>
    <h1>{count}</h1>
    <button onClick={onClickIncrease}>+1</button>
    <button onClick={onClickDecrease}>-1</button>
  </div>
  )
}

export default Counter
