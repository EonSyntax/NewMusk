import React from "react";

interface AdminTopbarProps {
  page: string;
}

export default function AdminTopbar({ page }: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <nav className="flex text-sm font-medium text-slate-500">
          <span>Admin</span>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900 dark:text-slate-100 font-bold">
            {page}
          </span>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-500"
            placeholder="Search data..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </button>
        </div>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
          <div className="text-right">
            <p className="text-sm font-bold">Elon Jr.</p>
            <p className="text-xs text-primary font-semibold">Admin Role</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 overflow-hidden shadow-sm">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              data-alt="Portrait of a professional administrator"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdHTB7LB5haZ0ESOAKwtBfgPDpa6jKdP7fOaMdrXwkeRVvm3J8ldShqm3Qmx11LMhL7lbizY2_ed4rENEpPUvhGTsZbpgH2zVGa8LAccxsg7201FNrjuNuIQ-f33adUt23nh5-LgGuQ5JCrwOem-9vLeSm_Fs5GaGpu90rtk-A9OHZKdn4yMH11KyaR9SJ0TDOnnHbDRnYoSN6ov76MLIE64OFJgVRYsl71QfmrNPqjnyEkbxOuxLZJkSNen9AZk1pM1PP50uWCvY"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
