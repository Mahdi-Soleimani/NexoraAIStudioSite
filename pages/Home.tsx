import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, Zap, ChevronLeft, User, Clock, AlertTriangle, CheckCircle, FileText, Activity, Briefcase, ShoppingCart, Building2, Gavel } from 'lucide-react';
import NeuralBackground from '../components/NeuralBackground';

const Home: React.FC = () => {
  // Simple ROI Calculator State
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(200000); // Tomans
  const [activeIndustry, setActiveIndustry] = useState('ecommerce');

  const techStack = [
    "OpenAI", "TensorFlow", "Python", "n8n", "React", "Docker", "PyTorch", "LangChain", "FastAPI"
  ];

  const calculateSavings = () => {
    // Assuming automation saves 80% of time
    const weeklyCost = hours * rate;
    const monthlyCost = weeklyCost * 4;
    const saved = monthlyCost * 0.8;
    return new Intl.NumberFormat('fa-IR').format(saved);
  };

  const industries = {
    ecommerce: {
      title: "فروشگاه‌های اینترنتی",
      icon: <ShoppingCart />,
      problem: "پراکندگی موجودی بین انبار و سایت، پاسخگویی دیرهنگام به مشتریان و رها شدن سبد خرید.",
      solution: "ایجنت فروش که ۲۴ ساعته سوالات را پاسخ می‌دهد + ربات n8n که موجودی را لحظه‌ای سینک می‌کند."
    },
    corporate: {
      title: "شرکت‌ها و ادارات",
      icon: <Building2 />,
      problem: "اتلاف وقت پرسنل روی کارهای تکراری اکسل، نامه‌نگاری‌های دستی و گم شدن داده‌ها.",
      solution: "اتوماسیون کامل گردش کار (Workflow Automation) و تولید گزارشات مدیریتی با یک کلیک."
    },
    legal: {
      title: "موسسات حقوقی",
      icon: <Gavel />,
      problem: "زمان‌بر بودن بررسی پرونده‌ها، تنظیم قراردادهای تکراری و نوبت‌دهی دستی.",
      solution: "سیستم RAG برای جستجو در قوانین و تولید پیش‌نویس قراردادها توسط هوش مصنوعی."
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section - Refined & Formal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40 z-10"></div>
        
        <div className="container mx-auto px-4 z-20 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-300 text-xs font-mono uppercase tracking-widest">Enterprise AI Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            هوش مصنوعی؛ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-white">
              معماری نوین سازمان شما
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-8">
            در نکسورا، ما فقط کد نمی‌نویسیم؛ ما <strong className="text-white">فرآیندهای پولساز</strong> خلق می‌کنیم. 
            گذار از مدیریت سنتی به سازمان هوشمند را با تیم متخصص ما تجربه کنید.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
             <Link to="/contact" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
               مشاوره رایگان سازمانی <ArrowLeft size={20} />
             </Link>
             <Link to="/portfolio" className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3">
               بررسی سوابق اجرایی
             </Link>
          </div>
        </div>
        
        {/* Formal Tech Decor */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>
      </section>

      {/* Tech Stack - Corporate Ticker */}
      <section className="py-8 bg-black border-b border-white/10 z-20 relative">
        <div className="container mx-auto px-4 flex items-center gap-8 overflow-hidden">
          <span className="text-xs font-bold text-gray-500 uppercase whitespace-nowrap hidden md:block">Technologies used:</span>
          <div className="relative flex overflow-x-hidden w-full mask-linear">
            <div className="animate-marquee whitespace-nowrap flex gap-16 text-lg font-bold text-gray-600 opacity-60">
              {techStack.map((tech, i) => (
                <span key={i} className="font-mono hover:text-white transition-colors cursor-default">{tech}</span>
              ))}
               {techStack.map((tech, i) => (
                <span key={`dup-${i}`} className="font-mono hover:text-white transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Industries (Creating Indirect Need) */}
      <section className="py-24 bg-surface border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">کاربرد عملیاتی در صنایع</h2>
              <p className="text-gray-400 text-lg">
                هوش مصنوعی دیگر یک کالای لوکس نیست، بلکه شرط بقای کسب‌وکارهاست. 
                سازمان شما در کدام دسته قرار دارد؟ ببینید نکسورا چطور چالش‌های شما را حل می‌کند.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tabs Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.entries(industries).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveIndustry(key)}
                  className={`flex items-center gap-4 p-5 rounded-xl text-right transition-all border ${
                    activeIndustry === key
                      ? 'bg-white/5 border-primary text-white shadow-lg shadow-primary/5'
                      : 'bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeIndustry === key ? 'bg-primary text-white' : 'bg-white/5'}`}>
                    {data.icon}
                  </div>
                  <span className="font-bold text-lg">{data.title}</span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:col-span-8">
              <div className="h-full bg-dark border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">چالش و راهکار</span>
                  <h3 className="text-3xl font-bold text-white mb-8">
                    {industries[activeIndustry as keyof typeof industries].title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-red-400 font-bold">
                        <AlertTriangle size={20} />
                        وضعیت فعلی (سنتی)
                      </div>
                      <p className="text-gray-400 leading-relaxed border-r-2 border-red-500/20 pr-4">
                        {industries[activeIndustry as keyof typeof industries].problem}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-green-400 font-bold">
                        <CheckCircle size={20} />
                        راهکار نکسورا
                      </div>
                      <p className="text-gray-300 leading-relaxed border-r-2 border-green-500/20 pr-4">
                        {industries[activeIndustry as keyof typeof industries].solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/5">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-bold">
                      درخواست دموی اختصاصی برای این صنعت <ArrowLeft size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human vs AI Visualization (Refined) */}
      <section className="py-24 bg-dark relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">گذار به سازمان هوشمند</h2>
            <p className="text-gray-400">مقایسه عملکردی در یک نگاه</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="bg-[#0e0e12] border border-white/5 rounded-xl p-8 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8 opacity-50">
                <User size={24} />
                <span className="font-bold">فرآیند دستی (انسانی)</span>
              </div>
              <ul className="space-y-6 text-gray-500">
                <li className="flex gap-4">
                  <Clock className="flex-shrink-0" />
                  <span>میانگین زمان پاسخگویی: ۴ ساعت اداری</span>
                </li>
                <li className="flex gap-4">
                  <AlertTriangle className="flex-shrink-0" />
                  <span>نرخ خطا: ۳ الی ۵ درصد در ورود داده</span>
                </li>
                <li className="flex gap-4">
                  <Activity className="flex-shrink-0" />
                  <span>ظرفیت: محدود به ساعات کاری</span>
                </li>
              </ul>
            </div>

            {/* The New Way */}
            <div className="bg-surface border border-primary/30 rounded-xl p-8 shadow-2xl shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex items-center gap-3 mb-8">
                <Cpu size={24} className="text-primary" />
                <span className="font-bold text-white">فرآیند اتوماتیک (نکسورا)</span>
              </div>
              <ul className="space-y-6 text-white">
                <li className="flex gap-4">
                  <CheckCircle className="text-green-400 flex-shrink-0" />
                  <span>میانگین زمان پاسخگویی: <span className="text-primary font-bold">۳ ثانیه</span></span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-green-400 flex-shrink-0" />
                  <span>نرخ خطا: <span className="text-primary font-bold">۰ درصد</span> (تضمینی)</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-green-400 flex-shrink-0" />
                  <span>ظرفیت: <span className="text-primary font-bold">نامحدود ۲۴/۷</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-surface relative border-t border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">ماشین حساب بازگشت سرمایه</h2>
              <p className="text-gray-400 mb-8 text-lg text-justify leading-relaxed">
                بسیاری از مدیران از هزینه‌های پنهان کارهای دستی بی‌خبرند. 
                با ابزار زیر، میزان پولی که ماهانه به دلیل عدم استفاده از اتوماسیون از دست می‌دهید را محاسبه کنید.
              </p>
              <div className="space-y-8 bg-white/5 p-6 rounded-xl border border-white/10">
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-300 mb-4">
                    <span>ساعات کار تکراری پرسنل در هفته</span>
                    <span className="text-primary font-bold">{hours} ساعت</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="200" 
                    value={hours} 
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">میانگین هزینه هر ساعت کار (تومان)</label>
                  <input 
                    type="number" 
                    value={rate} 
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none font-mono"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0f] to-[#13131f] border border-white/10 p-10 rounded-3xl text-center relative group">
              <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-50"></div>
              
              <h3 className="text-gray-400 mb-4 relative z-10 text-sm font-bold uppercase tracking-widest">پتانسیل صرفه‌جویی ماهانه</h3>
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-4 relative z-10 font-mono tracking-tighter">
                {calculateSavings()}
              </div>
              <span className="text-lg text-gray-500 relative z-10">تومان</span>
              
              <div className="mt-8 relative z-10">
                <Link to="/contact" className="inline-block w-full py-4 bg-primary hover:bg-secondary text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20">
                  دریافت گزارش تحلیلی کامل
                </Link>
                <p className="mt-4 text-xs text-gray-500">
                  * محاسبه بر اساس جایگزینی ۸۰٪ فرآیندها با AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;