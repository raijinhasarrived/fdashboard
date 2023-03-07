import { Routes, Route } from 'react-router-dom';
import {
  DashboardPage,
  PaymentsPage,
  CalendarPage,
  ProfilePage,
  SettingsPage,
  NotFound,
  ProductsPage,
} from '../pages';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/payments" element={<PaymentsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
