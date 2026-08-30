import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

const contactDetails = [
  {
    icon: "/contactimg/Email.png",
    label: "info@pitchescreative.com",
    href: "mailto:info@pitchescreative.com",
  },
  {
    icon: "/contactimg/Location.png",
    label: "12, Moore heaven road, Ikeja, Lagos.",
    href: undefined,
  },
  {
    icon: "/contactimg/Whatsapp.png",
    label: "+234 824 908 75567",
    href: "tel:+23482490875567",
  },
];

function ContactInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a0a] px-5 pb-20 pt-32 font-[Aspekta] lg:px-12 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 "
          >
            <h1 className="w-full max-w-2xl text-3xl font-medium leading-[1.15] text-white sm:text-4xl lg:text-5xl">
              <span className="text-[#FFC24F]">Tell us</span> what you are
              building. We will help you{" "}
              <span className="text-[#FFC24F]">shape</span> the{" "}
              <span className="text-[#FFC24F]">next</span> move.
            </h1>

            <p className="max-w-md text-[16px] leading-relaxed text-white/70">
              Whether you need a brand identity, website, app, campaign, or
              full creative system, share the details with us and we will
              help you find the clearest path forward.
            </p>

            <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex w-fit items-center rounded-full border border-white/15 bg-black/20 px-6 py-3 text-sm my-3 lg:my-0 font-medium text-white backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_20px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.03] hover:border-white/25 hover:bg-black/30 active:scale-95"
                >
            Start your Enquiry
            </button>
            <p className="max-w-md text-[16px] leading-relaxed text-white/70">
              Great projects begin with clear conversations. Use the form
              below to tell us about your business, what you need, what you
              are trying to achieve, and where you want the project to go.
            </p>

            <NavLink
              to="/services"
              className="inline-flex w-fit items-center rounded-full border border-white/40 px-6 py-3 text-sm my-3 lg:my-0 font-medium text-white no-underline transition-all hover:scale-[1.03] active:scale-95 hover:bg-white hover:text-black"
            >
              Explore Our Services
            </NavLink>
          </motion.div>

          {/* Right column: contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col  gap-6  lg:mt-4"
          >
            <div className="flex top-0 justify-end">
              <img
                src="/contactimg/Arror.png"
                alt=""
                className="h-[158px] w-[115px] object-contain"
              />
            </div>

            {contactDetails.map((detail, i) => {
              const Wrapper = detail.href ? "a" : "div";
              return (
                <div key={i} className="border-b border-white/10 pb-6">
                  <Wrapper
                    {...(detail.href ? { href: detail.href } : {})}
                    className="flex items-center gap-4 sm:gap-8 font-[inter] text-[19px] text-white no-underline"
                  >
                    <img
                      src={detail.icon}
                      alt=""
                      className="h-[47px] w-[48px] flex-shrink-0 object-contain"
                    />
                    <span className="text-base">{detail.label}</span>
                  </Wrapper>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default ContactInfo;