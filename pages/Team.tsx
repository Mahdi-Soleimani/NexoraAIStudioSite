import React from 'react';
import { TeamMember } from '../types';
import { Linkedin, Github } from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'آرش کمانگیر',
    role: 'Lead AI Architect',
    skills: ['Python', 'TensorFlow', 'LLMs'],
    image: 'https://picsum.photos/400/400?random=50',
  },
  {
    id: '2',
    name: 'سارا تهرانی',
    role: 'Senior Automation Engineer',
    skills: ['n8n', 'Zapier', 'Node.js'],
    image: 'https://picsum.photos/400/400?random=51',
  },
  {
    id: '3',
    name: 'علی رضاپور',
    role: 'Frontend Developer',
    skills: ['React', 'Three.js', 'UI/UX'],
    image: 'https://picsum.photos/400/400?random=52',
  },
];

const Team: React.FC = () => {
  return (
    <div className="pt-12 pb-24 container mx-auto px-4">
      
      {/* Story Section */}
      <section className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">داستان نکسورا</h1>
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="text-gray-300 leading-8">
            ما گروهی از مهندسان نرم‌افزار و محققان هوش مصنوعی هستیم که از انجام کارهای تکراری خسته شده بودیم. 
            باور ما این است که انسان‌ها برای خلاقیت ساخته شده‌اند، نه برای کپی-پیست کردن داده‌ها در اکسل.
            در سال ۲۰۲۳ دور هم جمع شدیم تا استودیو نکسورا را با یک هدف بسازیم: 
            <span className="text-primary font-bold mx-1">دموکراتیزه کردن هوش مصنوعی برای کسب‌وکارهای ایرانی.</span>
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
            { t: 'شفافیت مطلق', d: 'بدون هزینه‌های پنهان. کدها و فرآیندها کاملاً در اختیار مشتری است.' },
            { t: 'سرعت نور', d: 'ما در دنیای AI زندگی می‌کنیم. پروژه‌های ما در روز تحویل داده می‌شوند، نه ماه.' },
            { t: 'یادگیری مداوم', d: 'تکنولوژی دیشب، امروز قدیمی است. ما همیشه لبه تکنولوژی هستیم.' }
        ].map((v, i) => (
            <div key={i} className="bg-surface border border-white/5 p-8 rounded-2xl text-center hover:bg-white/5 transition-colors group">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{v.t}</h3>
                <p className="text-gray-400 text-sm">{v.d}</p>
            </div>
        ))}
      </section>

      {/* Members Grid */}
      <h2 className="text-3xl font-bold text-center mb-12">تیم متخصص ما</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
            <div key={member.id} className="bg-surface border border-white/10 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]">
                <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {member.skills.map((skill, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/5 group-hover:border-primary/30 transition-colors">{skill}</span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/5">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Linkedin size={18} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"><Github size={18} /></a>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Team;