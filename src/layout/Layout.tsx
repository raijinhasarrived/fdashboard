import { Sidebar, ProfileInfo, Pro } from '../components';
import { Routing } from '../routes/Routing';

export const Layout = () => {
  return (
    <div className="flex gap-5 w-full h-screen p-5">
      <div className="flex flex-col justify-between">
        <Sidebar />
        <Pro />
      </div>
      <Routing />
      <ProfileInfo />
    </div>
  );
};
