import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Tag } from 'lucide-react';

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'ایجنت پشتیبانی هتل ۵ ستاره',
    category: 'nlp',
    challenge: 'حجم بالای تماس‌ها برای رزرو و سوالات تکراری',
    solution: 'طراحی ایجنت صوتی و متنی متصل به سیستم رزرواسیون',
    result: 'کاهش ۷۰٪ تماس‌های ورودی اپراتور',
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: '2',
    title: 'اتوماسیون انبار فروشگاه اینترنتی',
    category: 'automation',
    challenge: 'عدم هماهنگی موجودی بین سایت و انبار فیزیکی',
    solution: 'سناریوی n8n برای سینک لحظه‌ای موجودی و صدور فاکتور',
    result: 'حذف کامل خطای "عدم موجودی" بعد از خرید',
    image: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: '3',
    title: 'ربات تلگرام مدیریت کریپتو',
    category: 'telegram',
    challenge: 'نیاز به رصد ۲۴ ساعته قیمت‌ها و اخبار',
    solution: 'ربات تلگرام با قابلیت تحلیل احساسات اخبار و هشدار قیمت',
    result: 'جذب ۵۰۰۰ کاربر فعال در ماه اول',
    image: 'https://picsum.photos/600/400?random=12'
  },
  {
    id: '4',
    title: 'تشخیص خرابی خط تولید با بینایی ماشین',
    category: 'vision',
    challenge: 'خطای انسانی در کنترل کیفیت قطعات',
    solution: 'مدل پردازش تصویر برای شناسایی ترک‌های میکروسکوپی',
    result: 'افزایش دقت کنترل کیفیت به ۹۹.۸٪',
    image: 'https://picsum.photos/600/400?random=13'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'telegram' | 'automation' | 'vision' | 'nlp'>('all');

  const filteredProjects = filter === 'all' 
    ? mockProjects 
    : mockProjects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'همه' },
    { id: 'automation', label: 'اتوماسیون' },
    { id: 'telegram', label: 'ربات تلگرام' },
    { id: 'nlp', label: 'پردازش متن (NLP)' },
    { id: 'vision', label: 'بینایی ماشین' },
  ];

  return (
    <div className="pt-12 pb-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">نمونه کارهای ما</h1>
        <p className="text-gray-400">نتیجه اعتماد کسب‌وکارهای پیشرو به نکسورا</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`px-6 py-2 rounded-full border transition-all ${
              filter === cat.id 
                ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-full">
            {/* Image Side */}
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 md:w-3/5 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={14} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{project.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <h4 className="text-sm font-bold text-gray-300 mb-1">چالش:</h4>
                  <p className="text-sm text-gray-500">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-300 mb-1">راهکار:</h4>
                  <p className="text-sm text-gray-500">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-green-400 mb-1">نتیجه:</h4>
                  <p className="text-sm text-gray-300">{project.result}</p>
                </div>
              </div>

              <button className="mt-auto w-full py-3 border border-white/20 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors font-bold text-sm">
                مشاهده دمو <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;