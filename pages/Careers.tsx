import React from 'react';
import { Briefcase, Heart, Globe, Zap, Users, Code } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pt-12 pb-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">به تیم نکسورا بپیوندید</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          ما یک استارتاپ چابک و پیشرو هستیم. اینجا خبری از کارت‌زنی و بوروکراسی اداری نیست. 
          اگر عاشق <span className="text-primary font-bold">هوش مصنوعی</span> و <span className="text-primary font-bold">اتوماسیون</span> هستید، جای شما کنار ماست.
        </p>
      </div>

      {/* Culture / Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-surface border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all">
          <Globe className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">دورکاری کامل (Remote)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            مهم نیست کجای ایران هستید. ما به خروجی کار اهمیت می‌دهیم، نه ساعت حضور. 
            با پیژامه کد بزنید، اما کد تمیز بزنید!
          </p>
        </div>
        <div className="bg-surface border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all">
          <Zap className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">لبه تکنولوژی</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            در نکسورا با ابزارهایی کار می‌کنید (n8n, LangChain, OpenAI Agents) که ۹۹٪ شرکت‌ها هنوز اسمشان را نشنیده‌اند. 
            اینجا دانشگاه واقعی هوش مصنوعی است.
          </p>
        </div>
        <div className="bg-surface border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all">
          <Users className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">رشد و پارتنرشیپ</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            ما به دنبال کارمند نیستیم، به دنبال هم‌تیمی هستیم. 
            در پروژه‌های موفق سهیم شوید و رزومه‌ای بسازید که شما را متمایز می‌کند.
          </p>
        </div>
      </div>

      {/* Positions */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="text-primary" /> موقعیت‌های باز فعلی
        </h2>
        
        <div className="space-y-4">
            {[
                { 
                  title: 'توسعه‌دهنده اتوماسیون (n8n & Python)', 
                  type: 'پروژه‌ای / درصدی', 
                  exp: 'Junior/Mid',
                  desc: 'مسلط به منطق برنامه‌نویسی و علاقه‌مند به ساخت ورک‌فلوهای پیچیده.' 
                },
                { 
                  title: 'کارآموز مشتاق Frontend (React)', 
                  type: 'کارآموزی (منجر به همکاری)', 
                  exp: 'Junior',
                  desc: 'عاشق دیزاین‌های مدرن و انیمیشن‌سازی در وب. یادگیری حین کار واقعی.'
                },
                { 
                  title: 'متخصص فروش B2B', 
                  type: 'کمیسیون محور (Commission)', 
                  exp: 'Mid/Senior',
                  desc: 'اگر می‌توانید پروژه‌های اتوماسیون بفروشید، شریک تجاری ما شوید.'
                },
            ].map((job, i) => (
                <div key={i} className="group bg-surface border border-white/10 p-6 rounded-xl transition-all hover:bg-white/5 hover:border-primary/30">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{job.title}</h3>
                              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/20">{job.exp}</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-2">{job.desc}</p>
                            <div className="flex gap-4 text-xs text-gray-500 font-mono">
                                <span className="flex items-center gap-1"><Code size={12}/> {job.type}</span>
                                <span className="flex items-center gap-1"><Globe size={12}/> ریموت</span>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-white/5 hover:bg-primary hover:text-white border border-white/20 text-white rounded-lg transition-all whitespace-nowrap text-sm font-bold">
                            ارسال درخواست
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-transparent border-r-4 border-primary rounded-r-xl">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-bold text-white">نکته مهم:</span> ما در حال حاضر یک تیم کوچک و چابک هستیم. همکاری‌ها عمدتاً به صورت <span className="text-primary">پروژه‌ای و دورکاری</span> تعریف می‌شوند. اگر به دنبال یادگیری سریع و ساختن یک پورتفولیوی خفن هستید، نکسورا سکوی پرتاب شماست.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;