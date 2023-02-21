import {
  AreaChartComponent,
  ComposedChartComponent,
  PieChartComponent,
} from '../components/charts';
import { Notifications } from '../components/notifications/Notifications';
import { Search } from '../components/search/Search';

export const DashboardPage = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex w-full justify-between gap-3">
        <Search />
        <Notifications />
      </div>
      <AreaChartComponent />
      <div className="flex h-[42%] gap-3">
        <PieChartComponent />
        <ComposedChartComponent />
      </div>
    </div>
  );
};
