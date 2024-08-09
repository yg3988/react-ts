import React from 'react'
import {User} from '../models/user'

interface Prop{
  user: User
  onDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: string) => void,
  onSelect: (event: React.MouseEvent<HTMLElement, MouseEvent>,id: string) => void,
}
const UserCard = ({...props}: Prop) => {
  return (
    <div>
      <b 
        style={{
          color : props.user.selected ? 'red' : 'black',
          cursor: 'pointer'
        }}
        onClick={(e) => props.onSelect(e, props.user.id)}
      >
        {props.user.username}
      </b>
      <span>({props.user.email})</span>
      <button onClick={(e) => props.onDelete(e, props.user.id)}>삭제</button>
    </div>
  )
}

export default UserCard