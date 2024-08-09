import React from "react";
import CreateUser from "./component/createUser";
import UserList from "./component/userList";
import { User } from "./models/user";
import { v4 } from 'uuid'

function App() {
  const [inputs, setInputs] = React.useState<{
    username: string,
    email: string,
  }>({
    username: '',
    email: ''
  })
  const [users, setUsers] = React.useState<User[]>([
    {
      id: v4(),
      username: 'nnt',
      email: 'nnt@nnt.kr',
      selected: false
    },
    {
      id: v4(),
      username: 'cv',
      email: 'cv@nnt.kr',
      selected: false
    },
    {
      id: v4(),
      username: 'sc',
      email: 'sc@nnt.kr',
      selected: false
    },
  ])
  
  function onClickAddUser(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setUsers([
      ...users,
      {
        id: v4(),
        username: inputs.username,
        email: inputs.email,
        selected: false
      }
    ])

    setInputs({
      username: '',
      email: ''
    })
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value, name } = event.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  
  function onDelete(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string): void {
    setUsers(users.filter(user => user.id !== id))
  }

  function onSelect(event: React.MouseEvent<HTMLElement, MouseEvent>, id: string): void {
    setUsers(users.map(user => {
      if (user.id === id) user.selected = !user.selected
      return user
    }))
  }

  return (
    <>
      <CreateUser inputs={inputs} onClickAddUser={onClickAddUser} onChange={onChange} />
      <UserList users={users} onDelete={onDelete} onSelect={onSelect}/>
    </>
  );
}

export default App;
