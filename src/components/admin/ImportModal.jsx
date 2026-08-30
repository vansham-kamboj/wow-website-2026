import React, { useState } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { UploadCloud, X, AlertCircle } from 'lucide-react';

const ImportModal = ({ isOpen, onClose, onConfirm, expectedColumns, entityName }) => {
  const [file, setFile] = [useState(null)[0], useState(null)[1]];
  const [previewData, setPreviewData] = useState([]);
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const resetState = () => {
    setFile(null);
    setPreviewData([]);
    setError('');
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setError('');
    const fileExt = selectedFile.name.split('.').pop().toLowerCase();

    if (fileExt === 'csv') {
      Papa.parse(selectedFile, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length && !results.data.length) {
            setError('Failed to parse CSV file.');
            return;
          }
          setPreviewData(results.data);
        }
      });
    } else if (fileExt === 'xlsx' || fileExt === 'xls') {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: 'binary' });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
          setPreviewData(data);
        } catch (err) {
          setError('Failed to parse Excel file.');
        }
      };
      reader.readAsBinaryString(selectedFile);
    } else {
      setError('Unsupported file type. Please upload a .csv or .xlsx file.');
    }
    
    // Clear input so same file can be uploaded again if needed
    e.target.value = null;
  };

  const handleConfirm = async () => {
    if (previewData.length === 0) return;
    setIsProcessing(true);
    try {
      await onConfirm(previewData);
      handleClose();
    } catch (err) {
      setError(err.message || 'Error during import');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between shrink-0">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <UploadCloud className="text-primary" /> Import {entityName}
          </h3>
          <button onClick={handleClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto flex-1 bg-gray-50/50">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3">
              <AlertCircle size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {previewData.length === 0 ? (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-white flex flex-col items-center justify-center">
              <UploadCloud size={48} className="text-gray-400 mb-4" />
              <p className="text-gray-600 font-medium mb-2">Drag and drop or select a file to import</p>
              <p className="text-sm text-gray-400 mb-6">Supports .csv, .xlsx</p>
              
              <label className="cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm inline-flex items-center gap-2">
                Browse Files
                <input 
                  type="file" 
                  className="hidden" 
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                  onChange={handleFileUpload} 
                />
              </label>

              <div className="mt-8 text-left bg-blue-50/50 p-4 rounded-lg border border-blue-100 w-full max-w-md">
                <h4 className="text-sm font-bold text-blue-900 mb-2">Expected Columns:</h4>
                <div className="flex flex-wrap gap-2">
                  {expectedColumns.map(col => (
                    <span key={col} className="bg-white border border-blue-200 text-blue-800 text-xs px-2 py-1 rounded">
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">Preview Data ({previewData.length} rows)</h4>
                <button 
                  onClick={() => setPreviewData([])}
                  className="text-sm text-gray-500 hover:text-gray-800 underline underline-offset-4"
                >
                  Choose a different file
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white flex-1 min-h-[300px]">
                <div className="overflow-x-auto max-h-[400px]">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200 sticky top-0">
                      <tr>
                        {Object.keys(previewData[0] || {}).map((header, i) => (
                          <th key={i} className="px-4 py-3">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {previewData.slice(0, 10).map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          {Object.values(row).map((val, j) => (
                            <td key={j} className="px-4 py-3 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                              {val !== null && val !== undefined ? String(val) : ''}
                            </td>
                          ))}
                        </tr>
                      ))}
                      {previewData.length > 10 && (
                        <tr>
                          <td colSpan={Object.keys(previewData[0]).length} className="px-4 py-3 text-center text-gray-500 italic bg-gray-50/50">
                            ... and {previewData.length - 10} more rows hidden in preview
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {previewData.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-white flex items-center justify-end gap-3 shrink-0">
            <button 
              onClick={handleClose}
              className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleConfirm}
              disabled={isProcessing}
              className="px-5 py-2.5 bg-primary hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm disabled:opacity-70 flex items-center gap-2"
            >
              {isProcessing ? 'Importing...' : 'Confirm Import'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportModal;
