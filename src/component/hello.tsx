import React from 'react'

/*
function Hello() {
  return <div>안녕하세요</div>
}
*/
/*
  java, C# : 람다식,
  js : 화살표 함수
 */


interface Props {
  name?: string | number,
  color?: string,
  isSpecial?: boolean
}

const Hello = ({...props}: Props) => {
  const {name = '문윤기'} = props

  function render() {
    if(props.isSpecial)
      return <b>*</b>
    
    return null
  }
  return (
    <div style={{ color: props.color }}>
      { render() }
      안녕하세요. {name}
    </div>
  )
}

export default Hello;