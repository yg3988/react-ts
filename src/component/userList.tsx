import React from 'react'

import { User } from '../models/user'
import UserCard from './user'

interface Prop {
  users: User[],
  onDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: string) => void,
  onSelect: (event: React.MouseEvent<HTMLElement, MouseEvent>,id: string) => void,
}

const UserList = ({...props}: Prop) => {
  return (
    <div>
      {
        props.users.map(user => (
          <UserCard 
            user={user} 
            onDelete={props.onDelete}
            onSelect={props.onSelect}/>
        ))
      }
    </div>
  )
}

export default UserList