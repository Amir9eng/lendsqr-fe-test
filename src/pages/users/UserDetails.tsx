import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/users/user-details.scss';
import UserDetailsHeader from '../../components/UserDetailsHeader';
import UserDetailsMain from '../../components/UserDetailsMain';

interface Props {}
const UserDetails: FC<Props> = () => {
  const [loading, setLoading] = useState<Boolean>();
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fetchUser = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_BASE_API_URL}/users/${id}`)
      .then((response) => {
        console.log(response.data, 'data');
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        const err = error.response.data;
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <section className="user-details">
      <Link to="/dashboard/users" className="back">
        <img src="/icons/back-icon.svg" alt="back" /> <span>Back to Users</span>
      </Link>
      <div className="header-btns">
        <h1>User Details</h1>
        <div className="">
          <button type="button">BLACKLIST USER</button>
          <button type="button">ACTIVATE USER</button>
        </div>
      </div>
      <div>
        <UserDetailsHeader user={user} />
        <UserDetailsMain />
      </div>
    </section>
  );
};

export default UserDetails;
