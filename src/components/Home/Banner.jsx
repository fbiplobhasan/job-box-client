import React from "react";
import { easeInOut, motion } from "motion/react";
import team1 from "../../assets/bannerImg/team1.jpg";
import team2 from "../../assets/bannerImg/team2.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 "
            />
            <motion.img
              src={team2}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
              className="max-w-sm shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 "
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 50 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeInOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              Latest{" "}
              <motion.span
                animate={{ color: ["#FF0000", "#0F0101", "#FFFFFF"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Jobs
              </motion.span>{" "}
              For You!
            </motion.h1>
            <p className="py-6">
              We are looking for a motivated and detail-oriented individual to
              join our team. The role involves collaborating with
              cross-functional teams, managing project timelines, and ensuring
              high-quality deliverables. Candidates should demonstrate strong
              communication skills, problem-solving ability, and a willingness
              to learn new tools and technologies. Prior experience in a similar
              position will be considered an advantage.
            </p>
            <button className="btn btn-primary">Get Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
