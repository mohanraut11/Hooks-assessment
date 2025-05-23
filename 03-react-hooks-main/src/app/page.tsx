// pages/page.tsx
'use client';
import UserDashboard from './components/UserDashboard';
import { User } from './types/types';
import AppHeader from './components/AppHeader';
import ProtectedRoute from './components/ProtectedRoute';

const initialUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    role: 'Admin',
    department: 'IT',
    location: 'New York',
    joinDate: '2020-01-15',
    isActive: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    role: 'Editor',
    department: 'Content',
    location: 'Los Angeles',
    joinDate: '2021-03-20',
    isActive: true,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    role: 'Viewer',
    department: 'Marketing',
    location: 'Chicago',
    joinDate: '2019-11-05',
    isActive: false,
  },
  {
    id: 4,
    name: 'Sara Williams',
    email: 'sara@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    role: 'Editor',
    department: 'Design',
    location: 'Seattle',
    joinDate: '2022-05-10',
    isActive: true,
  },
  {
    id: 5,
    name: 'Mike Brown',
    email: 'mike@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    role: 'Viewer',
    department: 'Sales',
    location: 'Boston',
    joinDate: '2021-08-15',
    isActive: false,
  },
];

export default function Home() {
  return (
    <ProtectedRoute>
      <div className='min-h-screen flex flex-col'>
        <AppHeader currentPage='dashboard' />
        <main className='flex-1 p-4'>
          <UserDashboard initialUsers={initialUsers} />
        </main>
      </div>
    </ProtectedRoute>
  );
}