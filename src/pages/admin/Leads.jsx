import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Save, Search } from 'lucide-react';
import TableToolbar from '../../components/admin/TableToolbar';
import ImportModal from '../../components/admin/ImportModal';

const STATUS_OPTIONS = ['New', 'Contacted', 'Follow Up', 'Converted', 'Not Interested'];

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [notesEdit, setNotesEdit] = useState('');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const params = new URLSearchParams();
      if (filterStatus) params.append('status', filterStatus);
      if (filterCountry) params.append('country', filterCountry);

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!response.ok) throw new Error('Failed to fetch leads');
      const data = await response.json();
      setLeads(data);
    } catch (error) {
      console.error(error);
      alert('Error fetching leads');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [filterStatus, filterCountry]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads/${id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) throw new Error('Failed to update status');
      
      // Update local state
      setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
    } catch (error) {
      console.error(error);
      alert('Error updating status');
    }
  };

  const handleSaveNotes = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads/${id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ notes: notesEdit })
      });

      if (!response.ok) throw new Error('Failed to update notes');
      
      setLeads(leads.map(lead => lead.id === id ? { ...lead, notes: notesEdit } : lead));
      alert('Notes saved successfully');
    } catch (error) {
      console.error(error);
      alert('Error saving notes');
    }
  };

  const toggleExpand = (lead) => {
    if (expandedId === lead.id) {
      setExpandedId(null);
    } else {
      setExpandedId(lead.id);
      setNotesEdit(lead.notes || '');
    }
  };

  // Unique countries for filter
  const uniqueCountries = [...new Set(leads.map(l => l.country_interested))].filter(Boolean);

  const handleImportConfirm = async (data) => {
    const token = localStorage.getItem('adminToken');
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads/import`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ leads: data })
    });
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Import failed');
    }
    
    const result = await response.json();
    alert(result.message);
    fetchLeads();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-5 border-b border-gray-100 bg-white flex flex-wrap gap-4 items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Search size={18} className="text-gray-400"/> Lead Management
        </h2>
        <div className="flex gap-3">
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-200 text-gray-700 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors cursor-pointer"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              {STATUS_OPTIONS.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-200 text-gray-700 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors cursor-pointer"
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="New Zealand">New Zealand</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="w-px h-8 bg-gray-200 mx-1"></div>
          <TableToolbar 
            onRefresh={fetchLeads}
            isRefreshing={isLoading}
            onImportClick={() => setIsImportModalOpen(true)}
            dataToExport={leads}
            exportFileName="leads_export"
            exportColumns={['name', 'phone', 'country_interested', 'source', 'status', 'notes', 'created_at']}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Notes</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="7" className="text-center py-8">Loading...</td></tr>
            ) : leads.length === 0 ? (
              <tr><td colSpan="7" className="text-center py-8">No leads found.</td></tr>
            ) : (
              leads.map((lead) => (
                <React.Fragment key={lead.id}>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5 font-medium text-gray-900">{lead.name}</td>
                    <td className="px-6 py-5">{lead.phone}</td>
                    <td className="px-6 py-5">{lead.country_interested}</td>
                    <td className="px-6 py-5">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {lead.source}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-gray-500">{new Date(lead.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-5">
                      <select 
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={`appearance-none text-center cursor-pointer text-xs font-bold px-3 py-1.5 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                          lead.status === 'New' ? 'bg-blue-100 text-blue-700 focus:ring-blue-200' :
                          lead.status === 'Converted' ? 'bg-green-100 text-green-700 focus:ring-green-200' :
                          lead.status === 'Not Interested' ? 'bg-gray-100 text-gray-600 focus:ring-gray-200' :
                          lead.status === 'Follow Up' ? 'bg-orange-100 text-orange-700 focus:ring-orange-200' :
                          'bg-amber-100 text-amber-700 focus:ring-amber-200'
                        }`}
                      >
                        {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button 
                        onClick={() => toggleExpand(lead)}
                        className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                      >
                        {expandedId === lead.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Notes Section */}
                  {expandedId === lead.id && (
                    <tr className="bg-gray-50 border-b border-gray-200 shadow-inner">
                      <td colSpan="7" className="px-8 py-6">
                        <div className="flex flex-col gap-3 max-w-4xl">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                            Internal Notes for <span className="text-gray-800">{lead.name}</span>
                          </label>
                          <textarea 
                            className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[120px] bg-white shadow-sm resize-y"
                            value={notesEdit}
                            onChange={(e) => setNotesEdit(e.target.value)}
                            placeholder="Add notes about this lead here..."
                          />
                          <div className="flex justify-end mt-2">
                            <button 
                              onClick={() => handleSaveNotes(lead.id)}
                              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
                            >
                              <Save size={16} /> Save Notes
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>

      <ImportModal 
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onConfirm={handleImportConfirm}
        entityName="Leads"
        expectedColumns={['name', 'phone', 'country']}
      />
    </div>
  );
};

export default Leads;
