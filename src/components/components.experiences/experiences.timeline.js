import React from "react";
import ExperiencesItems from "./experiences.items";

export default class ExperiencesTimeline extends React.Component {
  render() {
    return (
      <section>
        <div className="experiences__line"></div>
        <ul>
          <ExperiencesItems
            date="06/2020 - 08/2020"
            title="Front-end Web Developer"
            company="Karto - Aplikasi Crowdsourcing untuk Kebaikan Sosial"
            description="Slicing UI from figma for Karto application front-end (beta.karto.id) using vue.js framework and vuetify."
          />
          <ExperiencesItems
            date="05/2021 - 06/2021"
            title="Cloud Engineer"
            company="G-Parking - Integrated Parking App"
            description="Deploy machine learning API for application recommendation system
            GParking uses Google Cloud Platform."
          />
          <ExperiencesItems
            date="07/2021 - Now"
            title="Front-end Web Developer"
            company="Kodekarta - from Howbizz Academy"
            description="Creating a static landing page for a startup guided by Amikom Business Park (ABP), namely Kodekarta: Howbizz Academy (how.biz.id)."
          />
        </ul>
      </section>
    );
  }
}
