// components/About/MeetTheTeam.tsx
import { motion } from "framer-motion";
import aboutBg from "/bgAbout.png";
import MacGrace from "../../assets/images/MacGrace.png"

interface TeamMember {
  name: string;
  photo: string;
  bgColor: string;
}

const team: TeamMember[] = [
  {
    name: "Funmi Olaobaju",
    photo: "/about/team-funmi.png",
    bgColor: "#D9D9D9",
  },
  {
    name: "Sbo",
    photo: "/about/team-sbo.png",
    bgColor: "#2DBEB0",
  },
  {
    name: "Arifalo McGrace",
    photo: MacGrace,
    bgColor: "#E8622C",
  },
  {
    name: "New Member 4",
    photo: "/about/team-4.png",
    bgColor: "#4A7FBF",
  },
 {
    name: "New Member 4",
    photo: "/about/team-4.png",
    bgColor: "#4A7FBF",
  },

];

function MeetTheTeam() {
  return (
    <section
      id="our-team"
      className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] px-5 py-20 lg:px-12 lg:pr-64 lg:py-28"
    >
      <img
        src={aboutBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]/95" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl"
        >
          <span className="text-[#FFC24F]">The minds</span> behind the
          strategy, design, and digital execution.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex max-w-2xl flex-col gap-4"
        >
          <p className="text-sm leading-relaxed text-white/80">
            Pitches Creative is built by creative thinkers, designers,
            strategists, developers, and problem-solvers who understand that
            great work needs both imagination and structure.
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            Our team brings together different skills with one shared goal:
            helping businesses show up better, communicate clearer, and
            build brand experiences that people remember.
          </p>
        </motion.div>

        {/* Team cards  */}
        <div className="mt-16 flex flex-wrap gap-4 lg:mt-20">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-[292px] w-[267px] overflow-hidden rounded-xl"
              
            >
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/50 px-3 py-2 backdrop-blur-sm">
                <p className="text-sm font-medium text-white">
                  {member.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;