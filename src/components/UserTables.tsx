import React, { FC } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { UserModel } from '../utils/models';
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
const UserTable: FC<Props> = ({ users, loading }) => {
  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => {
              return (
                <th key={index}>
                  <>
                    <span>{header}</span>
                    {header && (
                      <img src="/icons/filter-icon.svg" alt="filter-icon" />
                    )}
                  </>
                </th>
              );
            })}
          </tr>
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td>
                <div className="loader">
                  <img src="/images/loader.gif" alt="/loader" />
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
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
                  <td>
                    {moment(user?.createdAt).format('MMM D, YYYY h:mm a')}
                  </td>
                  <td>{user?.status}</td>
                  <td>
                    <img src="/icons/more-icon.svg" alt="more" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};
export default UserTable;
