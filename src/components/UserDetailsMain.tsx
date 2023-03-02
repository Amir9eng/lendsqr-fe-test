import React, { FC } from 'react';
import UserCard from './UserCard';

interface Props {}

const UserDetailsMain: FC<Props> = () => {
  return (
    <div className="user-details-main">
      <UserCard />
    </div>
  );
};

export default UserDetailsMain;
