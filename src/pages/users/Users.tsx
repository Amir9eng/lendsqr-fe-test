import '../../styles/users/users.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import UsersStats from '../../components/UserStats';
import UserTables from '../../components/UserTables';
import { baseUrl } from '../../utils/config';

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`${baseUrl}/users`);
      console.log(data, 'data');
      setUsers(data);
    } catch (error: any) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  return (
    <section className="users">
      <h1>Users</h1>
      <div>
        <UsersStats />
        <UserTables users={currentItems} loading={loading} />
        <div className="users-paginate">
          <div className="user-page-info">
            <p>
              Showing{' '}
              <span>
                {itemOffset + 10}{' '}
                <img src="/icons/down-arrow.svg" alt="down arrow" />
              </span>{' '}
              out of {users.length}
            </p>
          </div>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="arrow"
            nextClassName="arrow"
            breakLabel="..."
            containerClassName="pagination"
            activeClassName="active"
            // renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Users;
