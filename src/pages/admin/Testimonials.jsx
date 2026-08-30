import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown, Edit } from 'lucide-react';
import TableToolbar from '../../components/admin/TableToolbar';
import ImportModal from '../../components/admin/ImportModal';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    student_name: '',
    testimonial_text: '',
    country: 'USA',
    is_published: false
  });

  const fetchTestimonials = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/testimonials', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error(error);
      alert('Error fetching testimonials');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const openModal = (testimonial = null) => {
    if (testimonial) {
      setEditingId(testimonial.id);
      setFormData({
        student_name: testimonial.student_name,
        testimonial_text: testimonial.testimonial_text,
        country: testimonial.country,
        is_published: testimonial.is_published
      });
    } else {
      setEditingId(null);
      setFormData({ student_name: '', testimonial_text: '', country: 'USA', is_published: false });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      const method = editingId ? 'PATCH' : 'POST';
      const url = editingId 
        ? `http://localhost:5000/api/testimonials/${editingId}`
        : 'http://localhost:5000/api/testimonials';

      const body = { ...formData };
      if (!editingId) {
        // Find max display_order
        const maxOrder = testimonials.reduce((max, t) => Math.max(max, t.display_order), -1);
        body.display_order = maxOrder + 1;
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) throw new Error('Failed to save');
      
      closeModal();
      fetchTestimonials();
    } catch (error) {
      console.error(error);
      alert('Error saving testimonial');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) throw new Error('Failed to delete');
      setTestimonials(testimonials.filter(t => t.id !== id));
    } catch (error) {
      console.error(error);
      alert('Error deleting testimonial');
    }
  };

  const handleTogglePublish = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/testimonials/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ is_published: !currentStatus })
      });
      if (!response.ok) throw new Error('Failed to update status');
      setTestimonials(testimonials.map(t => t.id === id ? { ...t, is_published: !currentStatus } : t));
    } catch (error) {
      console.error(error);
      alert('Error updating status');
    }
  };

  const handleReorder = async (id, currentOrder, direction) => {
    const currentIndex = testimonials.findIndex(t => t.id === id);
    if (direction === 'up' && currentIndex === 0) return;
    if (direction === 'down' && currentIndex === testimonials.length - 1) return;

    const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    const swapItem = testimonials[swapIndex];

    try {
      const token = localStorage.getItem('adminToken');
      
      // Update both items in parallel
      await Promise.all([
        fetch(`http://localhost:5000/api/testimonials/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ display_order: swapItem.display_order })
        }),
        fetch(`http://localhost:5000/api/testimonials/${swapItem.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ display_order: currentOrder })
        })
      ]);

      fetchTestimonials();
    } catch (error) {
      console.error(error);
      alert('Error reordering');
    }
  };

  const handleImportConfirm = async (data) => {
    const token = localStorage.getItem('adminToken');
    const response = await fetch('http://localhost:5000/api/testimonials/import', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ testimonials: data })
    });
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Import failed');
    }
    
    const result = await response.json();
    alert(result.message);
    fetchTestimonials();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-5 border-b border-gray-100 bg-white flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Testimonials</h2>
        <div className="flex items-center gap-3">
          <TableToolbar 
            onRefresh={fetchTestimonials}
            isRefreshing={isLoading}
            onImportClick={() => setIsImportModalOpen(true)}
            dataToExport={testimonials}
            exportFileName="testimonials_export"
            exportColumns={['student_name', 'testimonial_text', 'country', 'is_published', 'display_order', 'created_at']}
          />
          <div className="w-px h-8 bg-gray-200 mx-1"></div>
          <button 
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-primary hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <Plus size={18} /> Add New
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 w-24">Order</th>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="5" className="text-center py-8">Loading...</td></tr>
            ) : testimonials.length === 0 ? (
              <tr><td colSpan="5" className="text-center py-8">No testimonials found.</td></tr>
            ) : (
              testimonials.map((t, index) => (
                <tr key={t.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1 text-gray-400">
                      <button 
                        onClick={() => handleReorder(t.id, t.display_order, 'up')}
                        disabled={index === 0}
                        className="p-1 hover:bg-gray-200 hover:text-gray-700 rounded disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition-colors"
                      >
                        <ArrowUp size={16} />
                      </button>
                      <button 
                        onClick={() => handleReorder(t.id, t.display_order, 'down')}
                        disabled={index === testimonials.length - 1}
                        className="p-1 hover:bg-gray-200 hover:text-gray-700 rounded disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition-colors"
                      >
                        <ArrowDown size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-medium text-gray-900">{t.student_name}</td>
                  <td className="px-6 py-5 text-gray-500">{t.country}</td>
                  <td className="px-6 py-5">
                    <button 
                      onClick={() => handleTogglePublish(t.id, t.is_published)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                        t.is_published ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t.is_published ? 'Published' : 'Draft'}
                    </button>
                  </td>
                  <td className="px-6 py-5 text-right space-x-2">
                    <button 
                      onClick={() => openModal(t)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors inline-flex items-center justify-center"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(t.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors inline-flex items-center justify-center"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">{editingId ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.student_name}
                  onChange={(e) => setFormData({...formData, student_name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country / Destination</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. 🇺🇸 United States"
                  className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Testimonial Text</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  value={formData.testimonial_text}
                  onChange={(e) => setFormData({...formData, testimonial_text: e.target.value})}
                />
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="is_published"
                  checked={formData.is_published}
                  onChange={(e) => setFormData({...formData, is_published: e.target.checked})}
                />
                <label htmlFor="is_published" className="text-sm font-medium text-gray-700">Publish immediately</label>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-primary hover:bg-purple-700 text-white rounded text-sm font-medium"
                >
                  {editingId ? 'Save Changes' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ImportModal 
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onConfirm={handleImportConfirm}
        entityName="Testimonials"
        expectedColumns={['student_name', 'testimonial_text', 'country', 'photo_url']}
      />
    </div>
  );
};

export default Testimonials;
