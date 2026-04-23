import React, { useState } from 'react';
import { LayoutDashboard, Plus, Image as ImageIcon, Save, Trash2, LogOut } from 'lucide-react';
import Navbar from '../components/Navbar';
import { MENU_DATA } from '../data/menuData';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-secondary">Admin <span className="text-primary">Portal</span></h1>
              <p className="text-zinc-400 text-sm font-bold">Manage your restaurant content</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-zinc-400 font-bold hover:text-red-500 transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 space-y-2">
            {['Menu Management', 'Orders', 'Catering Enquiries', 'Gallery'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`w-full text-left p-4 rounded-2xl font-bold transition-all ${activeTab === tab.toLowerCase() ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-zinc-500 hover:bg-zinc-100'}`}
              >
                {tab}
              </button>
            ))}
          </aside>

          <div className="lg:col-span-9 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black text-secondary capitalize">{activeTab}</h2>
              <button className="flex items-center gap-2 px-6 py-3 neu-button-primary font-bold text-sm">
                <Plus size={18} /> Add New Item
              </button>
            </div>

            <div className="space-y-6">
              {MENU_DATA.map((cat) => (
                <div key={cat.id} className="space-y-4">
                  <h3 className="text-lg font-black text-zinc-400 uppercase tracking-widest">{cat.title}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {cat.items.map((item) => (
                      <div key={item.id} className="neu-card p-6 bg-white flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-32 h-32 rounded-2xl bg-zinc-100 flex items-center justify-center overflow-hidden relative group">
                          <img src={item.image} className="w-full h-full object-cover" />
                          <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                            <ImageIcon size={24} />
                          </button>
                        </div>
                        <div className="flex-grow space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input defaultValue={item.name} className="p-3 bg-zinc-50 rounded-xl border-none font-bold text-sm" placeholder="Item Name" />
                            <input defaultValue={item.price} className="p-3 bg-zinc-50 rounded-xl border-none font-bold text-sm" placeholder="Price" />
                          </div>
                          <textarea defaultValue={item.description} className="w-full p-3 bg-zinc-50 rounded-xl border-none font-bold text-sm" rows={2} placeholder="Description"></textarea>
                        </div>
                        <div className="flex md:flex-col gap-2">
                          <button className="p-3 neu-button text-primary"><Save size={20} /></button>
                          <button className="p-3 neu-button text-zinc-300 hover:text-red-500"><Trash2 size={20} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}