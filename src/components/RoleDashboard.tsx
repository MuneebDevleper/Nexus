interface Props {
  role: 'Investor' | 'Entrepreneur';
}

const RoleDashboard = ({ role }: Props) => {
  return (
    <div className="p-4 border rounded shadow mb-4">
      {role === 'Investor' ? (
        <div>
          <h2 className="text-xl font-bold">Investor Dashboard</h2>
          <p>View deals, invest, and manage your wallet</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Entrepreneur Dashboard</h2>
          <p>Manage projects, receive investments, track documents</p>
        </div>
      )}
    </div>
  );
};

export default RoleDashboard;