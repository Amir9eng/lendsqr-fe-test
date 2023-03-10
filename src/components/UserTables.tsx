import React, { FC } from 'react';
import { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { UserModel } from '../utils/models';
import Filter from './Filter';
import DropDown from './DropDown';

interface Props {
  users: UserModel[];
  loading: Boolean;
}
const tableHeaders = [
  'Organization',
  'Username',
  'Email',
  'Phone number',
  'Date joined',
  'Status',
  '',
];

const UsersTable: FC<Props> = ({ users, loading }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<null | Number>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState<null | Number>(null);
  console.log(isFilterOpen);
  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => {
              return (
                <th key={index}>
                  <div>
                    <span>{header}</span>
                    {header && (
                      <img
                        src="/icons/filter-icon.svg"
                        alt="filter-icon"
                        onClick={() =>
                          isFilterOpen === index
                            ? setIsFilterOpen(null)
                            : setIsFilterOpen(index)
                        }
                      />
                    )}
                  </div>
                  {isFilterOpen === index ? <Filter /> : ''}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, index: number) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/dashboard/users/${user?.id}`}>
                    {user?.orgName}
                  </Link>
                </td>
                <td>{user?.userName}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNumber}</td>
                <td>{moment(user?.createdAt).format('MMM D, YYYY h:mm a')}</td>
                <td>
                  <span className="status active"> Active</span>
                </td>
                <td>
                  <img
                    src="/icons/more-icon.svg"
                    alt="more"
                    onClick={() =>
                      isOptionsOpen === index
                        ? setIsOptionsOpen(null)
                        : setIsOptionsOpen(index)
                    }
                  />

                  {isOptionsOpen === index ? <DropDown /> : ''}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UsersTable;
