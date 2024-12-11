import { motion } from "motion/react";
import team from "../../assets/Team/team.jpg";
import programmer from "../../assets/Team/programmer.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            src={team}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [120, 170, 120] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={programmer}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 40 }}
            transition={{
              duration: 0.3,
              delay: 1,
              ease: "linear",
              // repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              transition={{
                duration: 1.5,
                delay: 1,
                ease: "linear",
                repeat: Infinity,
              }}
              animate={{ color: ["#ec2607", "#6210e8", "#14f347"] }}
            >
              Job
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
