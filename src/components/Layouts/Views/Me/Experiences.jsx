import React from "react";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "./Experiences.css";
import { Experience } from "../../../../Helpers/data";
import { IoCodeWorking } from "react-icons/io5"


const Experiences = () => {
  let experiences = Experience.map((n) => {

    return (
      <VerticalTimelineElement 
        key={n.id} 
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(70, 70, 70)", color: "#ccc" }}
        contentArrowStyle={{ borderRight: "8px solid  #fff" }}
        date={n.date} iconStyle={{ background: "rgb(70, 70, 70)", color: "#ccc" }}
        icon={<IoCodeWorking />} >
        
        <h3 className="vertical-timeline-element-title">
          {n.title}
        </h3>

        <h2 className="vertical-timeline-element-subtitle">{n.name_company}</h2>
        <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
        <p id="timelines__p">
          {n.describe} 
        </p>
        <p id="timelines__p">
          {n.describe_tecnologias} 
        </p>


        <a id="timelines__info" href={n.info}>{n.click}</a>
        
      </VerticalTimelineElement>
    )
  })
  
  return (
    <div className="flex  w-screen  flex-col items-center justify-center relative bg-primary pb-10 ">
      <section className=" md:w-full flex items-center justify-center p-4 md:max-w-screen-xl">
        <VerticalTimeline>
          { experiences }
        </VerticalTimeline>
      </section>


    </div>
  );
};

export default Experiences;
