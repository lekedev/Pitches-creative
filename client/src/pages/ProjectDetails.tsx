import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { brandingProjects } from "../data/brandingProjects";
import NewsletterSignup from "../components/Insights/NewsletterSignup";

function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = brandingProjects.findIndex((p) => p.slug === slug);
  const project = brandingProjects[projectIndex];
  const nextProject =
    brandingProjects[(projectIndex + 1) % brandingProjects.length];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0a0a] px-5 text-center text-white">
        <p className="text-xl">Project not found.</p>
        <NavLink
          to="/branding"
          className="rounded-full border border-white/30 px-5 py-2 text-sm text-white no-underline transition-all duration-200 hover:scale-[1.03] active:scale-95"
        >
          Back to Branding
        </NavLink>
      </div>
    );
  }

  return (
    <div className="relative bg-[#0a0a0a] font-[Aspekta]">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/technology/stars-bg.png)" }}
      />

      <div className="relative z-10 px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md lg:p-10"
        >
          <h1 className="max-w-2xl text-2xl font-medium text-[#FFC24F] sm:text-3xl">
            {project.title}
          </h1>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">
                Client
              </p>
              <p className="mt-1 text-sm text-white">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">
                Service
              </p>
              <p className="mt-1 text-sm text-white">{project.service}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">
                Scope Of Work
              </p>
              <p className="mt-1 text-sm text-white">
                {project.scopeOfWork}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">
                Year
              </p>
              <p className="mt-1 text-sm text-white">{project.year}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-wide text-[#FFC24F]">
              Description
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
              {project.description}
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2">
          {project.gallery.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`${project.title} detail ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl justify-end">
          <NavLink
            to={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white no-underline transition-all hover:scale-[1.03] active:scale-95 hover:bg-white/10"
          >
            Next project →
          </NavLink>
        </div>
      </div>

      <div className="relative z-10">
        <NewsletterSignup />
      </div>
    </div>
  );
}

export default ProjectDetail;