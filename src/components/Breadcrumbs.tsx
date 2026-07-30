import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-slate-600 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-slate-900 dark:text-slate-100" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
