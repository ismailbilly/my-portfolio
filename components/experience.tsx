"use client";

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import {useSectionInView} from "@/lib/hooks"
import { useTheme } from "@/context/theme-context";
// const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;
export default function Experience() {
  const { ref, inView } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-20">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={inView}>
        {experiencesData.map((item, index) => {
         return (
           <React.Fragment key={index}>
             <VerticalTimelineElement
               visible={true}
               contentStyle={{
                 background:
                   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                 boxShadow: "none",
                 border: "1px solid rgba(0,0,0,0.05)",
                 textAlign: "left",
               }}
               contentArrowStyle={{
                 borderRight:
                   theme === "light"
                     ? "0.4rem solid #9ca3af"
                     : "0.4rem solid rgba(255, 255, 255, 0.5)",
               }}
               date={item.date}
               icon={item.icon}
               iconStyle={{
                 backgroundColor: theme === "light" ? "white" : "0.4rem solid rgba(255, 255, 255, 0.15)",
               }}
             >
               <h3 className="font-bold capitalize">{item.title}</h3>
               <p className="font-normal !mt-0">{item.location}</p>
               <p className="!mt-1 !font-normal text-gray-700 dark:text-white/90">{item.description}</p>
             </VerticalTimelineElement>
           </React.Fragment>
         );
})}
      </VerticalTimeline>
    </section>

    // <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
    //   <SectionHeading>My experience</SectionHeading>
    //   <VerticalTimeline lineColor="">
    //     {experiencesData.map((item, index) => (
    //       <React.Fragment key={index}>
    //         <VerticalTimelineElement
    //           contentStyle={{
    //             background: "#f3f4f6"
    //              // theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
    //             boxShadow: "none",
    //             border: "1px solid rgba(0, 0, 0, 0.05)",
    //             textAlign: "left",
    //             padding: "1.3rem 2rem",
    //           }}
    //           contentArrowStyle={{
    //             borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)"
    //             //   theme === "light"
    //             //     ? "0.4rem solid #9ca3af"
    //             //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
    //           }}
    //           date={item.date}
    //           icon={item.icon}
    //           iconStyle={{
    //             background: "white"
    //               //theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
    //             fontSize: "1.5rem",
    //           }}
    //         >
    //           <h3 className="font-semibold capitalize">{item.title}</h3>
    //           <p className="font-normal !mt-0">{item.location}</p>
    //           <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
    //             {item.description}
    //           </p>
    //         </VerticalTimelineElement>
    //       </React.Fragment>
    //     ))}
    //   </VerticalTimeline>
    // </section>
  );
}
