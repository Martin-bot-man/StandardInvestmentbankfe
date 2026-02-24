import React from 'react';
import MembershipCard from './components/MembershipCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-12">
      {/* 1. Status & Profile Header [cite: 1, 2] */}
      <nav className="p-6 flex justify-between items-center max-w-xl mx-auto">
        <span className="font-bold text-sm">9:41 </span>
        <div className="flex items-center gap-3">
          <span className="font-bold text-gray-800">Michael </span>
          <img 
            src="Martin.png" 
            alt="Michael Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-100 object-cover" 
          />
        </div>
      </nav>

      {/* 2. Welcome Message [cite: 3] */}
      <header className="px-6 max-w-xl mx-auto mb-10">
        <h1 className="text-3xl font-black leading-tight text-slate-900">
          You've officially joined your first investment knowledge club! 
        </h1>
      </header>

      {/* 3. User Statistics Grid [cite: 4-12] */}
      <section className="px-6 max-w-xl mx-auto grid grid-cols-2 gap-4 mb-12">
        <div className="bg-slate-50 p-5 rounded-3xl relative overflow-hidden">
          <p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-tighter">
            Benard Makodingo 
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">350 </span>
            <span className="text-gray-400 text-sm font-bold">/ 225</span>
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-3xl relative overflow-hidden border-b-4 border-blue-500 text-blue-600">
          <p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-tighter">
            Caroline Ukhol 
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">117 </span>
            <span className="text-gray-400 text-sm font-bold">/ 321 </span>
          </div>
        </div>
      </section>

      {/* 4. Recommendation Content [cite: 13, 16, 17] */}
      <div className="px-6 max-w-xl mx-auto mb-8">
        <h2 className="text-2xl font-black mb-2">Now let's make you great! </h2>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
          From your profile we recommend these memberships. Pick one that fits you best and start your financial adventure. 
        </p>
      </div>

      {/* 5. Interactive Memberships  */}
      <main className="px-6 max-w-xl mx-auto">
        <MembershipCard 
          title="Foundation Membership [cite: 34]"
          description="We invest for you, in shares and in the Mansa-X global fund. [cite: 35]"
          subDescription="Service is free online with your personal representative, but service in the office may have extra charges. [cite: 36]"
        />
        
        <MembershipCard 
          title="Economy Membership [cite: 37]"
          description="We will invest your money for you at a guaranteed rate with the Mansa-X global fund. [cite: 38]"
          subDescription="Service is free online with your personal representative, but service in the office may have extra charges. [cite: 39]"
        />
      </main>

      {/* 6. Action Footer [cite: 40] */}
      <footer className="px-6 max-w-xl mx-auto mt-10">
        <button className="bg-blue-600 text-white w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
          Continue Adventure
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-6 uppercase font-bold tracking-widest">
          A closer look at the memberships 
        </p>
      </footer>
    </div>
  );
}

export default App;