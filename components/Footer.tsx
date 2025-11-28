import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">نکسورا استودیو</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ما آینده کسب‌وکار شما را با هوش مصنوعی بازنویسی می‌کنیم. 
              ترکیبی از خلاقیت انسانی و قدرت ماشین.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#/services" className="hover:text-primary">راهکارها</a></li>
              <li><a href="#/portfolio" className="hover:text-primary">پروژه‌ها</a></li>
              <li><a href="#/academy" className="hover:text-primary">آکادمی</a></li>
              <li><a href="#/careers" className="hover:text-primary">استخدام</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">خدمات</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>اتوماسیون هوشمند (n8n)</li>
              <li>طراحی ایجنت‌های AI</li>
              <li>تحلیل داده‌های کلان</li>
              <li>ربات‌های تلگرام پیشرفته</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">ارتباط با ما</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                info@nexora.ai
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                تهران، ناحیه نوآوری شریف
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-600 text-sm">
          © ۲۰۲۴ استودیو هوش مصنوعی نکسورا. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;