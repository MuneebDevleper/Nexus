import { useState } from 'react';

interface Transaction {
  type: string;
  amount: number;
  status: string;
}

const Payments = () => {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleDeposit = (amount: number) => {
    setBalance(balance + amount);
    setTransactions([...transactions, { type: 'Deposit', amount, status: 'Completed' }]);
  };

  return (
    <div className="p-4 border rounded-lg shadow bg-white mb-4">
      <h2 className="text-xl font-bold mb-2">Wallet Balance: ${balance}</h2>
      <div className="flex gap-2 flex-wrap mb-2">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 hover:scale-105 transition-all duration-200"
          onClick={() => handleDeposit(100)}
        >
          Deposit $100
        </button>
      </div>
      <h3 className="font-semibold">Transactions:</h3>
      <ul className="list-disc list-inside">
        {transactions.map((tx, i) => (
          <li key={i}>{tx.type} - ${tx.amount} - {tx.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;