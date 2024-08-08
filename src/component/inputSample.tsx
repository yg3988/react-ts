import React from 'react'

const InputSample = () => {
  const [inputs, setInputs] = React.useState<{
    name: string,
    nickname: string,
  }>({
    name: '',
    nickname: ''
  })
  
  function onChangeValue(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value, name } = event.target

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function onClickNull(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setInputs({
      name: '',
      nickname: ''
    })
  }

  return (
    <div>
      <input 
        placeholder='이름' 
        name='name' 
        onChange={onChangeValue} 
        value={inputs.name}/>
      <input 
        placeholder='닉네임'
        name='nickname'
        onChange={onChangeValue}
        value={inputs.nickname}/>
      <button onClick={onClickNull}>초기화</button>
      <div>
        <b>값 :</b>
        이름 (닉네임)
        {inputs.name}
        ({inputs.nickname})
      </div>
    </div>
  )
}

export default InputSample