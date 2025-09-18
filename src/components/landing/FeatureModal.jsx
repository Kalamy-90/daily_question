import React from 'react';
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
    import { motion, AnimatePresence } from 'framer-motion';
    import { X } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const FeatureModal = ({ isOpen, onClose, title, description, icon }) => {
      if (!isOpen) return null;

      return (
        <AnimatePresence>
          {isOpen && (
            <Dialog open={isOpen} onOpenChange={onClose}>
              <DialogContent className="bg-slate-800 border-purple-600 text-gray-100 p-0 max-w-lg w-[90vw] rounded-xl shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <DialogHeader className="p-6 pr-16 relative bg-slate-800 rounded-t-xl">
                    <div className="flex items-center space-x-4">
                      {React.cloneElement(icon, { className: "h-8 w-8 text-purple-400" })}
                      <DialogTitle className="text-2xl font-bold text-purple-300">{title}</DialogTitle>
                    </div>
                    <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 hover:bg-slate-700 rounded-full"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                        <span className="sr-only">Fermer</span>
                    </Button>
                  </DialogHeader>
                  <div className="p-6 max-h-[60vh] overflow-y-auto bg-slate-800 flex-grow">
                    <DialogDescription className="text-md text-gray-300 whitespace-pre-line">
                      {description}
                    </DialogDescription>
                  </div>
                  <div className="px-6 py-4 bg-slate-800 rounded-b-xl flex justify-end border-t border-slate-700">
                    <Button 
                      onClick={onClose}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Fermer
                    </Button>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      );
    };

    export default FeatureModal;