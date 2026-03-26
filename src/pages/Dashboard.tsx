import MeetingCalendar from '../components/MeetingCalendar';
import VideoCall from '../components/VideoCall';
import DocumentChamber from '../components/DocumentChamber';
import Payments from '../components/Payments';
import RoleDashboard from '../components/RoleDashboard';


function Dashboard() {
  const userRole: 'Investor' | 'Entrepreneur' = 'Investor'; // Replace with actual login role

  return (
    <div className="container mx-auto p-6 space-y-6 bg-gray-50 min-h-screen">
      <RoleDashboard role={userRole} />
      <MeetingCalendar />
      <VideoCall />
      <DocumentChamber />
      <Payments />
    </div>
  );
}

export default Dashboard;