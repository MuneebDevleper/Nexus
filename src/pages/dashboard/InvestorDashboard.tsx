// src/pages/dashboard/InvestorDashboard.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, PieChart, Filter, Search, PlusCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardBody, CardHeader } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { EntrepreneurCard } from '../../components/entrepreneur/EntrepreneurCard';
import { useAuth } from '../../context/AuthContext';
import { entrepreneurs } from '../../data/users';
import { getRequestsFromInvestor } from '../../data/collaborationRequests';
import Dashboard from '../Dashboard';

export const InvestorDashboard: React.FC = (): JSX.Element => {

  const { user } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  if (!user) return null;

  const sentRequests = getRequestsFromInvestor(user.id);

  const filteredEntrepreneurs = entrepreneurs.filter(e => {
    const matchesSearch =
      searchQuery === '' ||
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.startupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.pitchSummary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry =
      selectedIndustries.length === 0 ||
      selectedIndustries.includes(e.industry);

    return matchesSearch && matchesIndustry;
  });

  const industries = Array.from(new Set(entrepreneurs.map(e => e.industry)));

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries(prev =>
      prev.includes(industry)
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  return (

    <div className="space-y-6 animate-fade-in" style={{ padding: '20px' }}>

      {/* Calendar Button */}

    <Dashboard />

      {/* Dashboard Header */}

      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">

        <div>

          <h1 className="text-2xl font-bold text-gray-900">
            Discover Startups
          </h1>

          <p className="text-gray-600">
            Find and connect with promising entrepreneurs
          </p>
             
        </div>

        <Link to="/entrepreneurs">

          <Button leftIcon={<PlusCircle size={18} />}>
            View All Startups
          </Button>

        </Link>

      </div>
      

      {/* Filters */}

      <div className="flex flex-col md:flex-row gap-4">

        <div className="w-full md:w-2/3">

          <Input
            placeholder="Search startups, industries, or keywords..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            fullWidth
            startAdornment={<Search size={18} />}
          />

        </div>

        <div className="w-full md:w-1/3">

          <div className="flex items-center space-x-2">

            <Filter size={18} className="text-gray-500" />

            <span className="text-sm font-medium text-gray-700">
              Filter by:
            </span>

            <div className="flex flex-wrap gap-2">

              {industries.map(industry => (

                <Badge
                  key={industry}
                  variant={selectedIndustries.includes(industry) ? 'primary' : 'gray'}
                  className="cursor-pointer"
                  onClick={() => toggleIndustry(industry)}
                >
                  {industry}
                </Badge>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Startups */}

      <Card>

        <CardHeader>

          <h2 className="text-lg font-medium text-gray-900">
            Featured Startups
          </h2>

        </CardHeader>

        <CardBody>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredEntrepreneurs.map(e => (

              <EntrepreneurCard
                key={e.id}
                entrepreneur={e}
              />

            ))}

          </div>

        </CardBody>

      </Card>

    </div>

  );
  

};
