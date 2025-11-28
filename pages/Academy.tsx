import React, { useEffect, useRef, useState } from 'react';
import { Play, FileText, Mail } from 'lucide-react';

// Helper component for scroll animations
const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we can stop observing to keep it visible
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Academy: React.FC = () => {
  return (
    <div className="pt-12 pb-24 container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">آکادمی و رسانه</h1>
        <p className="text-gray-400">دانش خود را در دنیای هوش مصنوعی به‌روز نگه دارید.</p>
      </div>

      {/* Video Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <Play className="text-primary fill-primary" />
            <h2 className="text-2xl font-bold">آخرین ویدیوها</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
                <AnimatedSection key={i} delay={i * 100}>
                    <div className="group cursor-pointer">
                        <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-primary transition-all shadow-lg group-hover:shadow-primary/20">
                            <img src={`https://picsum.photos/600/400?random=${i+20}`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                    <Play size={20} className="text-white fill-white ml-1" />
                                </div>
                            </div>
                        </div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">چطور با n8n در خواب هم پول در بیاوریم؟ (قسمت {i})</h3>
                        <span className="text-xs text-gray-500 mt-2 block">۱۰ دقیقه • ۲ روز پیش</span>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <FileText className="text-primary" />
            <h2 className="text-2xl font-bold">مقالات تازه</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
                <AnimatedSection key={i} delay={i * 100}>
                    <div className="flex gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:bg-white/5 transition-colors hover:border-primary/30">
                        <div className="w-24 h-24 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                            <img src={`https://picsum.photos/200/200?random=${i+30}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Article"/>
                        </div>
                        <div>
                            <span className="text-xs text-primary font-bold mb-1 block">آموزشی</span>
                            <h3 className="font-bold mb-2 hover:text-primary transition-colors cursor-pointer">راهنمای جامع استفاده از Gemini API در ری‌اکت</h3>
                            <p className="text-xs text-gray-400 line-clamp-2">در این مقاله یاد می‌گیرید چطور از مدل‌های جدید گوگل برای ساخت برنامه‌های هوشمند استفاده کنید...</p>
                        </div>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </section>

      {/* Newsletter */}
      <AnimatedSection delay={200}>
        <section className="bg-gradient-to-r from-primary/20 to-purple-900/20 border border-primary/30 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <Mail className="mx-auto text-primary mb-4 w-12 h-12 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4">عقب نمانید!</h2>
                <p className="text-gray-300 mb-8">عضویت در خبرنامه نکسورا یعنی دریافت جدیدترین ترفندهای هوش مصنوعی مستقیماً در ایمیل شما.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input type="email" placeholder="ایمیل خود را وارد کنید..." className="flex-1 px-6 py-3 rounded-xl bg-dark border border-white/20 text-white focus:border-primary focus:outline-none placeholder-gray-500" />
                    <button className="px-8 py-3 bg-primary hover:bg-secondary text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary/20">عضویت رایگان</button>
                </div>
            </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Academy;