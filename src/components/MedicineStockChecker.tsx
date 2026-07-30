import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, RefreshCw, Info } from 'lucide-react';
import medicineData from '../data/medicineStock.json';

interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: string;
  dosageForm: string;
  description: string;
}

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onOrderClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    medicineData.forEach((item: MedicineItem) => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (medicineData as MedicineItem[]).filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: string, qty: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Available ({qty} units)
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Limited Stock ({qty} left)
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div id="medicine-stock-checker" className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
      {/* Component Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 mb-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" /> Live Inventory System
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Medicine Stock & Price Checker
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Search real-time availability of prescription medicines, equipment & OTC items at Vijay Medical Store, Gaya.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700">
          <Info className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Don't see your medicine listed? Call or WhatsApp us directly for custom procurement!</span>
        </div>
      </div>

      {/* Search Bar & Filters */}
      <div className="space-y-4 mb-8">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name (e.g. Paracetamol, Dolo 650, Pan-D, Omron BP Machine)..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base focus:ring-2 focus:ring-sky-500 outline-none shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 px-1">
        <span>Showing {filteredMedicines.length} items</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedStatus(prev => prev === 'Available' ? 'All' : 'Available')}
            className={`px-2.5 py-1 rounded-md transition-colors ${selectedStatus === 'Available' ? 'bg-emerald-100 text-emerald-800 font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            Only Available
          </button>
        </div>
      </div>

      {/* Medicine Items List / Table */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between p-5 rounded-xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-950/80 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  {getStatusBadge(item.status, item.availableQuantity)}
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                  Brand: {item.brand} • {item.dosageForm}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">MRP Price</div>
                  <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                    ₹{item.mrp.toFixed(2)}
                  </div>
                </div>

                <button
                  onClick={() => onOrderClick && onOrderClick(`${item.name} (${item.brand})`)}
                  disabled={item.status === 'Out of Stock'}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                    item.status === 'Out of Stock'
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20 hover:scale-105'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{item.status === 'Out of Stock' ? 'Unavailable' : 'Order Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
          <XCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No matching medicines found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-4">
            We might still have this medicine in our physical stock or can order it specially for you within 24 hours.
          </p>
          <button
            onClick={() => onOrderClick && onOrderClick(searchTerm || 'Custom Medicine Order')}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-2"
          >
            <span>Inquire Medicine on WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
};
