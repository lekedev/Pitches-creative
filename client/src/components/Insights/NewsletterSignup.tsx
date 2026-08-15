import { motion } from "framer-motion";

function NewsletterSignup() {
  return (
    <section className=" px-5 pb-20 font-[Aspekta] lg:px-12 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl border border-white/10 p-8 lg:flex-row lg:items-center lg:p-12"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-white sm:text-3xl">
            <span className="text-[#FFC24F]">Get Sharper Ideas</span> For
            Building A Better Brand.
          </h2>
          <p className="max-w-sm text-sm text-white/70">
            Receive practical insights on branding, design, websites,
            marketing, and digital growth.
          </p>

          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Your email Address"
              className="w-full rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/40 sm:w-72"
            />
            <button
              type="submit"
              className="inline-flex w-fit items-center rounded-full bg-[#FFC24F] px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#ffb84f]"
            >
              Join the List
            </button>
          </form>
        </div>

        <img
          src="/insight/mail.png"
          alt=""
          className="hidden h-[203px] w-[220px] object-contain lg:block"
        />
      </motion.div>
    </section>
  );
}

export default NewsletterSignup;