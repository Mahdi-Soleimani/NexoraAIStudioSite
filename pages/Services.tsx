import React, { useState, useEffect, useRef } from 'react';
import { Network, Bot, Database, Check, Zap, MessageSquare, Mail, Terminal, Code, ArrowDown } from 'lucide-react';
import WorkflowBackground from '../components/WorkflowBackground';

const Services: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Simulated log generation
  useEffect(() => {
    const logMessages = [
      "[INFO] Workflow triggered: New Order Received",
      "[INFO] Parsing JSON payload...",
      "[SUCCESS] Customer data extracted: { id: 4421, region: 'Tehran' }",
      "[n8n] Executing node: 'Check Inventory'",
      "[DB] Querying PostgreSQL database...",
      "[SUCCESS] Inventory confirmed. 12 items reserved.",
      "[AI] Agent 'SalesBot' activated.",
      "[AI] Generating invoice PDF...",
      "[INFO] Sending invoice via Telegram API...",
      "[SUCCESS] Message delivered to user @ali_dev",
      "[SYSTEM] Workflow completed in 142ms."
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev, logMessages[index % logMessages.length]];
        if (newLogs.length > 8) newLogs.shift();
        return newLogs;
      });
      index++;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20">
      
      {/* NEW HERO SECTION with Workflow Background */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
        <WorkflowBackground />
        
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-black/40 backdrop-blur-md">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Engineering The Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
             معماری <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 neon-text">جریان‌های هوشمند</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            تخصص ما <span className="text-white font-bold border-b-2 border-primary">اتصال نقطه‌هاست</span>. <br/>
            ما ابزارهای جداگانه شما را به یک اکوسیستم واحد، زنده و خودکار تبدیل می‌کنیم.
          </p>

          <div className="mt-12 animate-bounce">
            <ArrowDown className="text-gray-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Workflow Visualizer & Logs */}
      <section className="container mx-auto px-4 -mt-20 relative z-30 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
        
        {/* Workflow Visualizer (Left - 2 Cols) */}
        <div className="lg:col-span-2 bg-surface/80 backdrop-blur-xl border border-white/20 rounded-3xl p-1 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[450px]">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
          
          {/* Mock UI Header */}
          <div className="bg-dark/50 border-b border-white/10 p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-500 font-mono ml-4">nexora_automation_workflow.json</div>
            <div className="mr-auto px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] rounded uppercase font-bold tracking-wider animate-pulse">Active</div>
          </div>

          {/* Workflow Canvas */}
          <div className="relative h-[390px] w-full bg-[#0f0f13] flex items-center justify-center overflow-hidden">
            
            {/* Connecting Lines (Animated) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b3b3b" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b3b3b" />
                </linearGradient>
              </defs>
              <path d="M100,170 L300,170" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
              <path d="M400,170 C450,170 450,100 500,100" stroke="#333" strokeWidth="2" fill="none" />
              <path d="M400,170 C450,170 450,240 500,240" stroke="#333" strokeWidth="2" fill="none" />
              
              <circle r="4" fill="#fff">
                <animateMotion dur="2s" repeatCount="indefinite" path="M100,170 L300,170" />
              </circle>
              <circle r="4" fill="#8b5cf6">
                 <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M400,170 C450,170 450,100 500,100" />
              </circle>
               <circle r="4" fill="#8b5cf6">
                 <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M400,170 C450,170 450,240 500,240" />
              </circle>
            </svg>

            {/* Nodes */}
            <div className="absolute left-[5%] md:left-[10%] flex flex-col items-center z-10">
              <div className="w-16 h-16 bg-[#1a1a2e] border-2 border-primary/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <MessageSquare className="text-primary" />
              </div>
              <span className="mt-2 text-xs font-mono text-gray-400 bg-black/50 px-2 py-1 rounded">Trigger</span>
            </div>

            <div className="absolute left-[40%] -translate-x-1/2 flex flex-col items-center z-10">
               <div className="relative">
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-75 animate-pulse"></div>
                 <div className="relative w-20 h-20 bg-[#1a1a2e] border border-white/20 rounded-xl flex items-center justify-center">
                   <Bot size={40} className="text-white" />
                 </div>
               </div>
               <span className="mt-3 text-xs font-mono text-white font-bold bg-primary/20 px-2 py-1 rounded border border-primary/30">AI Brain</span>
            </div>

            <div className="absolute right-[5%] md:right-[15%] flex flex-col gap-24 z-10">
               <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1a1a2e] border border-green-500/30 rounded-xl flex items-center justify-center">
                    <Database className="text-green-500" />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400">Save Data</span>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1a1a2e] border border-blue-500/30 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-500" />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400">Email Client</span>
               </div>
            </div>
          </div>
        </div>

        {/* Live Terminal (Right - 1 Col) */}
        <div className="lg:col-span-1 bg-black border border-white/20 rounded-3xl p-4 overflow-hidden flex flex-col h-[450px] font-mono shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
            <Terminal size={16} className="text-gray-400" />
            <span className="text-xs text-gray-400">System Logs</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
             <div ref={logsContainerRef} className="space-y-2 absolute bottom-0 w-full transition-all">
                {logs.map((log, i) => (
                  <div key={i} className={`text-xs p-1 animate-fade-in-up border-l-2 pl-2 ${
                    log.includes('[SUCCESS]') ? 'text-green-400 border-green-500' :
                    log.includes('[ERROR]') ? 'text-red-400 border-red-500' :
                    log.includes('[AI]') ? 'text-primary border-primary' :
                    'text-gray-400 border-gray-700'
                  }`}>
                    <span className="opacity-50 mr-2 block text-[10px]">{new Date().toLocaleTimeString().split(' ')[0]}</span>
                    {log}
                  </div>
                ))}
             </div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2">
            <span className="text-green-500 animate-pulse">●</span>
            <span className="text-xs text-gray-500">Processing live events...</span>
          </div>
        </div>

      </section>

      {/* Detailed Services */}
      <section className="container mx-auto px-4 space-y-24">
        
        {/* Automation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Network size={36} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">اتوماسیون فراگیر (n8n Mastery)</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              قدرت n8n به ما اجازه می‌دهد هر API را به هر سرویس دیگری متصل کنیم. ما سناریوهای پیچیده‌ای می‌نویسیم که نرم‌افزارهای گران‌قیمت هم از پس آن برنمی‌آیند.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-500" /> اتصال فرم‌های وب‌سایت به تلگرام و CRM
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-500" /> پردازش خودکار اکسل و گوگل شیت
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-500" /> سیستم‌های هشدار هوشمند برای مدیران
              </li>
            </ul>
          </div>
          <div className="p-8 bg-surface rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-colors">
            {/* Tech Decoration */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br-lg"></div>

            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Network size={150} />
            </div>
            <h3 className="text-xl font-bold mb-4">تکنولوژی‌های مورد استفاده</h3>
            <div className="flex flex-wrap gap-3">
                {['n8n', 'Python', 'Webhook', 'REST API', 'JSON', 'Docker'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 flex items-center gap-1 hover:border-primary hover:text-white transition-colors cursor-default">
                      <Code size={12} className="text-primary"/> {tag}
                    </span>
                ))}
            </div>
          </div>
        </div>

        {/* AI Agents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Bot size={36} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">ایجنت‌های خودمختار (Autonomous Agents)</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              ما فراتر از چت‌بات‌های ساده می‌رویم. ما ایجنت‌هایی می‌سازیم که "فکر می‌کنند"، "تصمیم می‌گیرند" و "عمل می‌کنند".
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-500" /> RAG: پاسخگویی بر اساس دیتابیس اختصاصی شما
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-500" /> ایجنت‌های فروش و مذاکره‌کننده
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-500" /> تحلیلگر خودکار گزارشات مالی
              </li>
            </ul>
          </div>
          <div className="lg:order-1 relative rounded-3xl overflow-hidden border border-white/10 aspect-video group shadow-2xl">
              {/* Tech Decoration */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse z-20"></div>

             <img src="https://picsum.photos/800/600?grayscale" alt="AI Agent" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
             
             {/* Floating AI Chat Mockup */}
             <div className="absolute bottom-6 right-6 left-6 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                 <div className="flex gap-2 items-center mb-3">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-xs text-green-400 font-mono">System Status: Thinking...</span>
                 </div>
                 <div className="space-y-2">
                    <div className="bg-white/10 p-2 rounded-lg rounded-br-none text-xs text-gray-300 w-fit ml-auto">آخرین وضعیت فروش چطور بود؟</div>
                    <div className="bg-primary/20 p-2 rounded-lg rounded-bl-none text-xs text-white w-fit mr-auto border-r-2 border-primary">
                      فروش ۳۰٪ رشد داشته. نمودار آماده شد.
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 mt-32">
        <h2 className="text-3xl font-bold text-center mb-12">تفاوت نکسورا</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-4 text-gray-400 font-medium">ویژگی</th>
                <th className="p-4 text-white font-bold text-lg opacity-50">روش سنتی</th>
                <th className="p-4 text-primary font-bold text-lg bg-primary/10 rounded-t-xl border-t border-x border-primary/30">روش نکسورا (AI-First)</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5">
                <td className="p-4 font-bold">معماری سیستم</td>
                <td className="p-4 text-gray-500">جزیره‌ای و دستی</td>
                <td className="p-4 text-white bg-primary/5 border-x border-primary/30">یکپارچه و اتوماتیک (n8n)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4 font-bold">هزینه توسعه</td>
                <td className="p-4 text-gray-500">سنگین (استخدام چندین نیرو)</td>
                <td className="p-4 text-white bg-primary/5 border-x border-primary/30">بهینه (پرداخت برای نتیجه)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">هوشمندی</td>
                <td className="p-4 text-gray-500">قانون‌محور (If/Then ساده)</td>
                <td className="p-4 text-white bg-primary/5 rounded-b-xl border-b border-x border-primary/30">استنتاجی (Generative AI)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Services;