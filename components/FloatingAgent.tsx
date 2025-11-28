import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const FloatingAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'agent', text: string}[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Initial greeting effect
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          role: 'agent',
          text: "سلام! من ایجنت هوشمند نکسورا هستم. می‌خوای نمونه‌کارهای مرتبط با صنعت خودت رو نشونت بدم؟"
        }]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, text: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    // Simulated response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'agent',
        text: "ممنون از پیامتان. همکاران انسانی من به زودی برای مشاوره دقیق‌تر با شما تماس می‌گیرند. در حال حاضر می‌توانید بخش نمونه‌کارها را بررسی کنید."
      }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-surface border border-primary/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-primary/20 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">دستیار نکسورا</h4>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  آنلاین
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-dark/95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white/10 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-surface border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            />
            <button type="submit" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
              <Send size={18} className="text-white transform rotate-180" /> {/* Rotated for RTL if needed, usually Send icon points right/up */}
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 bg-primary hover:bg-secondary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-dark animate-bounce"></span>
        {isOpen ? <X size={28} className="text-white" /> : <MessageSquare size={28} className="text-white" />}
      </button>
    </div>
  );
};

export default FloatingAgent;