import { Sidebar, ProfileInfo, Pro } from '../components';
import { Routing } from '../routes/Routing';

export const Layout = () => {
  return (
    <div className="flex h-screen w-full gap-5 p-5">
      <div className="flex flex-col justify-between gap-5">
        <Sidebar />
        <Pro />
      </div>
      <Routing />
      <ProfileInfo />
    </div>
  );
};
