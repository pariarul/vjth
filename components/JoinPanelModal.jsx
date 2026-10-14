"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users } from "lucide-react";
import JoinPanelForm from "./JoinPanelForm";

/**
 * JoinPanelModal Component
 *
 * Uses React Portal to mount to document.body, avoiding any stacking context
 * or backdrop-filter traps from parent headers/sections.
 */
export const openJoinPanelModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-join-panel-modal"));
  }
};

export default function JoinPanelModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isControlled = typeof controlledIsOpen === "boolean";
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  // Listen for global custom event to open the modal
  useEffect(() => {
    const handleOpenEvent = () => {
      setInternalIsOpen(true);
    };

    window.addEventListener("open-join-panel-modal", handleOpenEvent);
    return () => window.removeEventListener("open-join-panel-modal", handleOpenEvent);
  }, []);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Full Screen Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#0E2436]/75 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-panel-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#D2E0EC] overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 bg-[#F0F5FA]/60 flex items-start justify-between gap-4 shrink-0">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/70 border border-blue-200 text-[11px] font-bold text-blue-800">
                  <Users size={12} />
                  <span>VjTH Global Panel Community</span>
                </div>
                <h2
                  id="join-panel-modal-title"
                  className="text-xl sm:text-2xl font-black text-[#183B56] tracking-tight"
                >
                  Join Our Research Panel
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Share your voice, shape products & earn rewards for studies.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 overflow-y-auto">
              <JoinPanelForm
                onSuccess={() => {
                  setTimeout(() => {
                    handleClose();
                  }, 2500);
                }}
                onClose={handleClose}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
