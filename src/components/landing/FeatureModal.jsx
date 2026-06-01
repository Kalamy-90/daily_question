import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const FeatureModal = ({ isOpen, onClose, title, description, icon }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="premium-card max-h-[85vh] w-[92vw] max-w-xl border-amber-200/20 bg-[#080914]/95 p-0 text-slate-100 shadow-2xl shadow-black/60">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <DialogHeader className="border-b border-white/10 p-7 pr-16 text-left">
              <div className="mb-5 flex items-center gap-4">
                <div className="rounded-2xl border border-amber-200/25 bg-amber-200/10 p-3 [&_svg]:h-7 [&_svg]:w-7 [&_svg]:text-amber-200">
                  {icon}
                </div>
                <DialogTitle className="font-display text-3xl font-bold text-amber-100">{title}</DialogTitle>
              </div>
            </DialogHeader>
            <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4 rounded-full text-slate-300 hover:bg-white/10 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
            <div className="max-h-[48vh] overflow-y-auto p-7">
              <div className="text-base leading-8 text-slate-300">
                {description}
              </div>
            </div>
            <div className="border-t border-white/10 p-6 text-right">
              <Button onClick={onClose} className="premium-button px-6 py-5">
                {t.sections.close}
              </Button>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
};

export default FeatureModal;
