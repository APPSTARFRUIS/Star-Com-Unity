import React from 'react';
import { UserRole, AppConfig } from '../types';

export type ViewType =
  | 'accueil'
  | 'evenements'
  | 'equipe'
  | 'messages'
  | 'idees'
  | 'documents'
  | 'sondages'
  | 'humeur'
  | 'celebrations'
  | 'bienetre'
  | 'social'
  | 'newsletter'
  | 'jeux'
  | 'boutique'
  | 'parametres'
  | 'admin';

interface SidebarProps {
  currentView: ViewType;
  userRole: UserRole;
  setView: (view: ViewType) => void;
  onLogout: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  appConfig: AppConfig;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  userRole,
  setView,
  onLogout,
  isOpen,
  onClose,
  appConfig
}) => {
  const menuItems: Array<{
    id: ViewType;
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: 'accueil', label: 'Accueil', icon: <path d="M3 12l2-2 7-7 7 7M5 10v10h3v-4h8v4h3V10" /> },
    { id: 'evenements', label: 'Événements', icon: <path d="M8 7V3m8 4V3M5 21h14V7H5z" /> },
    { id: 'equipe', label: 'Équipe', icon: <path d="M12 4a4 4 0 110 8 4 4 0 010-8zm-8 16v-1a6 6 0 0112 0v1" /> },
    { id: 'messages', label: 'Messages', icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
    { id: 'idees', label: 'Boîte à idées', icon: <path d="M12 2a7 7 0 00-4 12v4h8v-4a7 7 0 00-4-12z" /> },
    { id: 'documents', label: 'Documents', icon: <path d="M7 2h6l4 4v14H7z" /> },
    {
      id: 'sondages',
      label: 'Sondages',
      icon: (
        <>
          <path d="M11 3v8h8" />
          <path d="M12 2a10 10 0 1010 10" />
        </>
      )
    },
    { id: 'humeur', label: 'Humeur', icon: <path d="M9 10h.01M15 10h.01M12 14a4 4 0 01-4-4h8a4 4 0 01-4 4z" /> },
    { id: 'celebrations', label: 'Célébrations', icon: <path d="M5 8h14v12H5zM12 2v6" /> },
    { id: 'bienetre', label: 'Bien-être', icon: <path d="M12 21l-8-8a5 5 0 017-7l1 1 1-1a5 5 0 017 7z" /> },
    { id: 'social', label: 'Social', icon: <path d="M18 8a3 3 0 11-6 0 3 3 0 016 0zM6 14a3 3 0 100-6 3 3 0 000 6zm6 8v-2a4 4 0 00-8 0v2" /> },
    { id: 'newsletter', label: 'Newsletter', icon: <path d="M4 4h16v16H4zM4 4l8 8 8-8" /> },
    { id: 'jeux', label: 'Jeux', icon: <path d="M6 12h12M12 6v12" /> },
    { id: 'boutique', label: 'Boutique', icon: <path d="M6 6h12l-1 14H7z" /> },
    {
      id: 'parametres',
      label: 'Paramètres',
      icon: (
        <>
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
          <path d="M2 12h2m16 0h2M12 2v2m0 16v2" />
        </>
      )
    }
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`fixed left-0 top-0 h-full w-64 bg-white border-r z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 border-b flex items-center gap-3">
          <img src={appConfig.logoUrl} className="w-10 h-10" />
          <span className="font-bold">{appConfig.appName}</span>
        </div>

        <nav className="p-3 space-y-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setView(item.id);
                onClose?.();
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded ${
                currentView === item.id ? 'bg-green-900 text-white' : 'hover:bg-slate-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {item.icon}
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 border-t">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 text-red-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 16l4-4-4-4M7 12h14" />
            </svg>
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
