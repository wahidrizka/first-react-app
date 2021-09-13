import React from "react";
import EduItems from "./edu.items";

export default class EduTimeline extends React.Component {
  render() {
    return (
      <section>
        <div className="edu__line"></div>
        <ul>
          <EduItems
            date="07/2015 - 05/2018"
            school="SMK Negeri 1 Binangun"
            major="Computer and Network Engineering"
            description="Successfully passed with the final grade average in the study results report 84."
          />
          <EduItems
            date="05/2021 - 06/2021"
            school="Amikom University Yogyakarta"
            major="Informatics"
            description="Currently studying 7th semester at the University
            Amikom Yogyakarta, Undergraduate Informatics and GPA (IP) study program 3.75 for now."
          />
          <EduItems
            date="02/2021 - 07/2021"
            school="Bangkit 2021 Academy"
            major="Cloud Computing"
            description="Have finished taking the Bangkit 2021 program, in this program there are many gain career skills and experience from the company well-known technology (Google, Gojek, Tokopedia, Traveloka). At the end program, graduates have the opportunity to take part in certification from Google."
          />
        </ul>
      </section>
    );
  }
}
