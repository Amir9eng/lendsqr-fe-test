import { FC, useState } from 'react';
import '../styles/dashboard/dashboard.scss';
import TopNav from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

interface Props {}

const Dashboard: FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="dashboard-layout">
      <TopNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="dashboard-container">
        <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

        <div className="dashboard-main">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
