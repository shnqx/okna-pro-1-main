import type { Metadata } from 'next';
import { AdminPanel } from '@/components/blog/admin-panel';

export const metadata: Metadata = {
  title: 'Админка блога',
  description: 'Загрузка и управление статьями блога «Окна ПРО».',
};

export default function AdminPage() {
  return <AdminPanel />;
}
