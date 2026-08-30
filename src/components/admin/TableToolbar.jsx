import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw, Download, UploadCloud } from 'lucide-react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

const TableToolbar = ({ 
  onRefresh, 
  isRefreshing, 
  onImportClick, 
  dataToExport, 
  exportFileName,
  exportColumns 
}) => {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsExportOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const prepareExportData = () => {
    return dataToExport.map(row => {
      const filteredRow = {};
      exportColumns.forEach(col => {
        filteredRow[col] = row[col];
      });
      return filteredRow;
    });
  };

  const handleExportCSV = () => {
    const data = prepareExportData();
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${exportFileName}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportOpen(false);
  };

  const handleExportExcel = () => {
    const data = prepareExportData();
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, `${exportFileName}_${new Date().toISOString().split('T')[0]}.xlsx`);
    setIsExportOpen(false);
  };

  const buttonClass = "flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary/50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={onRefresh}
        disabled={isRefreshing}
        className={`${buttonClass} ${isRefreshing ? 'opacity-70 cursor-not-allowed' : ''}`}
        title="Refresh data"
      >
        <RefreshCw size={16} className={isRefreshing ? "animate-spin text-primary" : ""} />
        <span className="hidden sm:inline">Refresh</span>
      </button>

      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsExportOpen(!isExportOpen)}
          className={buttonClass}
        >
          <Download size={16} />
          <span className="hidden sm:inline">Export</span>
        </button>

        {isExportOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
            <button 
              onClick={handleExportCSV}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Export as CSV
            </button>
            <button 
              onClick={handleExportExcel}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Export as Excel (.xlsx)
            </button>
          </div>
        )}
      </div>

      <button 
        onClick={onImportClick}
        className={buttonClass}
      >
        <UploadCloud size={16} />
        <span className="hidden sm:inline">Import</span>
      </button>
    </div>
  );
};

export default TableToolbar;
