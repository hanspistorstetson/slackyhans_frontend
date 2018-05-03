import React from 'react';
import Avatar from '../Avatar';

type Props = {
  user: {
    id: number,
    name: string,
  },
}

const UserListItem = ({ user }: Props) => {
  return (
    <div key={user.id} style={{ display: 'flex', marginBottom: '10px' }}>
      <Avatar email={user.email} />
      <span style={{ marginLeft: '20px' }}>{user.username}</span>
    </div>
  ); };

export default UserListItem;
