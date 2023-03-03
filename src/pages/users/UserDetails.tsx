import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/users/user-details.scss';
import UserDetailsHeader from '../../components/UserDetailsHeader';
import UserDetailsMain from '../../components/UserDetailsMain';
import { baseUrl } from '../../utils/config';

interface Props {}
const UserDetails: FC<Props> = () => {
  const [loading, setLoading] = useState<Boolean>();
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`${baseUrl}/users/${id}`);
      console.log(data, 'data');
      setUser(data);
    } catch (error: any) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
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
        <UserDetailsMain user={user} />
      </div>
    </section>
  );
};

export default UserDetails;
