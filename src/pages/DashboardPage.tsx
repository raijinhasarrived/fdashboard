import {
  AreaChartComponent,
  ComposedChartComponent,
  PieChartComponent,
} from '../components/charts';
import { Notifications } from '../components/notifications/Notifications';
import { Search } from '../components/search/Search';

export const DashboardPage = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full justify-between gap-3">
        <Search />
        <Notifications />
      </div>
      <AreaChartComponent />
      <div className="flex gap-3">
        <PieChartComponent />
        <ComposedChartComponent />
      </div>
    </div>
  );
};
