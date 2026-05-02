import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, File, CheckCircle, XCircle } from 'lucide-react';

const FileUpload = ({ onFileSelect, accept = ".xlsx, .xls, .csv" }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  }, [onFileSelect]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };

  const clearFile = (e) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect(null);
  };

  return (
    <div 
      className={`relative w-full h-64 rounded-[32px] border-2 border-dashed transition-all duration-500 flex flex-col items-center justify-center p-8 overflow-hidden
        ${dragActive 
          ? 'border-[#12E7FF] bg-[#12E7FF]/5 shadow-[0_0_30px_rgba(18,231,255,0.1)]' 
          : file 
            ? 'border-green-500/50 bg-green-500/5' 
            : 'border-white/10 bg-white/[0.01] hover:border-white/20'
        }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept={accept}
        onChange={handleChange}
      />

      <AnimatePresence mode="wait">
        {!file ? (
          <motion.label
            key="empty"
            htmlFor="file-upload"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-4 cursor-pointer w-full h-full justify-center"
          >
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
               <Upload className="text-[#12E7FF]" size={32} />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm tracking-tight mb-1 text-white">Drag & Drop Source File</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Supports XLSX, CSV, Sheets</p>
            </div>
          </motion.label>
        ) : (
          <motion.div
            key="selected"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500">
               <File size={32} />
            </div>
            <div className="text-center overflow-hidden w-full px-4">
              <p className="font-bold text-sm tracking-tight truncate text-white mb-1">{file.name}</p>
              <p className="text-[9px] font-black text-green-500 uppercase tracking-widest flex items-center justify-center gap-1">
                <CheckCircle size={10} /> Node Validated
              </p>
            </div>
            <button 
              onClick={clearFile}
              className="mt-2 text-[10px] font-black text-red-500/60 uppercase tracking-widest hover:text-red-500 transition-colors flex items-center gap-1"
            >
              <XCircle size={10} /> Disconnect Node
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FileUpload;
