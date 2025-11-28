import React, { useState } from 'react';
import { Mail, MapPin, Send, Handshake, CheckCircle2, ArrowLeft } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    type: 'consultation',
    budget: 'unknown',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('پیام شما دریافت شد. تیم نکسورا به زودی با شما تماس می‌گیرد.');
  };

  return (
    <div className="pt-12 pb-24 container mx-auto px-4">
      
      {/* Strategic Consultation Banner (Green Animated Field) */}
      <div className="mb-16 relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-900/20 to-dark p-1 shadow-[0_0_40px_rgba(16,185,129,0.1)] animate-fade-in-up">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-300 animate-pulse"></div>
        <div className="bg-dark/80 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-500/10 p-3 rounded-full border border-emerald-500/20 hidden md:block">
              <CheckCircle2 className="text-emerald-400 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="md:hidden"><CheckCircle2 className="text-emerald-400 w-5 h-5 inline" /></span>
                اطمینان از بازگشت سرمایه (ROI)
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl text-justify">
                هنوز مطمئن نیستید که اتوماسیون برای سازمان شما مناسب است؟ 
                نکسورا به شما یک <strong>جلسه نیازسنجی و تحلیل شکاف (Gap Analysis) رایگان</strong> هدیه می‌دهد. 
                ما فرآیندهای فعلی شما را آنالیز کرده و دقیقا نشان می‌دهیم کجا در حال هدر دادن منابع هستید و تکنولوژی ما چقدر برایتان سود می‌سازد.
              </p>
            </div>
          </div>
          <button onClick={() => document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth' })} className="whitespace-nowrap px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2">
            رزرو جلسه رایگان <ArrowLeft size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Info - Corporate Style */}
        <div>
          <div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5">
            <span className="text-xs font-mono text-gray-400">CONTACT & LOCATIONS</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-6 tracking-tight">پل ارتباطی با <span className="text-primary">نکسورا</span></h1>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed border-l-2 border-white/10 pl-4">
            ما آماده‌ایم تا معماری دیجیتال سازمان شما را بازطراحی کنیم. 
            برای گفتگو درباره پروژه‌های سازمانی، پارتنرشیپ یا پیوستن به تیم، از مسیرهای زیر اقدام کنید.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 p-4 bg-surface border border-white/5 rounded-xl hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <Mail className="text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">امور پروژه‌ها</h3>
                <p className="text-white font-mono text-lg">projects@nexora.ai</p>
              </div>
            </div>

             <div className="flex items-center gap-5 p-4 bg-surface border border-white/5 rounded-xl hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <Handshake className="text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">همکاری تجاری</h3>
                <p className="text-white font-mono text-lg">partners@nexora.ai</p>
              </div>
            </div>

             <div className="flex items-center gap-5 p-4 bg-surface border border-white/5 rounded-xl hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <MapPin className="text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">دفتر مرکزی</h3>
                <p className="text-white">تهران، ناحیه نوآوری شریف، برج فناوری</p>
              </div>
            </div>
          </div>
        </div>

        {/* Smart B2B Form - Enterprise Edition */}
        <div id="b2b-form" className="bg-[#0a0a0f] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            فرم درخواست همکاری
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">نام کامل</label>
                <input required type="text" name="name" onChange={handleChange} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all" />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">نام سازمان</label>
                 <input type="text" name="companyName" onChange={handleChange} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">شماره تماس / تلگرام</label>
                <input required type="text" name="phone" onChange={handleChange} placeholder="+98 912 ..." className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all font-mono text-left dir-ltr" style={{direction: 'ltr'}} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">ایمیل سازمانی</label>
                <input required type="email" name="email" onChange={handleChange} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all font-mono text-left" style={{direction: 'ltr'}} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">نوع درخواست</label>
                <div className="relative">
                  <select name="type" onChange={handleChange} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:bg-primary/5 focus:outline-none appearance-none cursor-pointer">
                    <option value="consultation">اتوماسیون صنعتی / اداری</option>
                    <option value="ai-agent">هوش مصنوعی و ایجنت</option>
                    <option value="partnership">همکاری استراتژیک (Partnership)</option>
                    <option value="other">سایر موارد</option>
                  </select>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
               <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">بودجه تخصیص یافته</label>
                 <div className="relative">
                  <select name="budget" onChange={handleChange} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:bg-primary/5 focus:outline-none appearance-none cursor-pointer">
                    <option value="unknown">نیاز به برآورد هزینه دارم</option>
                    <option value="startup">سطح Startup (اقتصادی)</option>
                    <option value="growth">سطح Growth (متوسط)</option>
                    <option value="enterprise">سطح Enterprise (سازمانی)</option>
                  </select>
                   <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">شرح نیاز</label>
              <textarea name="message" rows={4} onChange={handleChange} placeholder="لطفاً چالش اصلی کسب‌وکار خود را شرح دهید..." className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all flex items-center justify-center gap-2 group border border-primary/50">
              <span>ثبت درخواست رسمی</span>
              <Send size={18} className="transform rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;