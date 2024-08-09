interface Props {
  inputs: {
    username: string,
    email: string,
  },
  onClickAddUser: React.MouseEventHandler<HTMLButtonElement>
  onChange: React.ChangeEventHandler<HTMLInputElement>,
}

const CreateUser = ({...props}: Props) => {
  return (
    <div>
      <input 
        placeholder='이름' 
        name='username' 
        onChange={props.onChange}
        value={props.inputs.username} />
      <input 
        placeholder='이메일'
        name='email'
        onChange={props.onChange}
        value={props.inputs.email}/>
      <button onClick={props.onClickAddUser}>추가</button>
    </div>
  )
}

export default CreateUser