import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceCategories = [
  "Brand Identity",
  "Website Development",
  "App Development",
  "Marketing Campaign",
  "Full Creative System",
  "Other",
];

function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to POST /api/contact once the backend route exists
    console.log("Enquiry submitted");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md"
          />

          {/* Centered modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            role="dialog"
            aria-modal="true"
            className="fixed left-1/2 top-1/2 z-[201] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 font-[Aspekta]"
          >
            <div className="mb-6 flex items-start justify-between">
              <img
                src="/contact/paper-plane-small.png"
                alt=""
                className="h-10 w-10 object-contain"
              />
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-xl text-white/50 transition-colors hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="border-b border-white/20 pb-2">
                <label className="mb-1 block text-xs text-white/50">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
              </div>

              <div className="border-b border-white/20 pb-2">
                <label className="mb-1 block text-xs text-white/50">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
              </div>

              <div className="border-b border-white/20 pb-2">
                <label className="mb-1 block text-xs text-white/50">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
              </div>

              <div className="border-b border-white/20 pb-2">
                <label className="mb-1 block text-xs text-white/50">
                  Service Category
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-transparent text-sm text-white outline-none [&>option]:bg-[#0a0a0a]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border-b border-white/20 pb-2">
                <label className="mb-1 block text-xs text-white/50">
                  Your Company
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
              </div>

              <div className="border-b border-white/20 pb-2">
                <label className="mb-1 block text-xs text-white/50">
                  Message
                </label>
                <textarea
                  rows={2}
                  className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default EnquiryModal;