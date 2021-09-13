import React from "react";

export default class AboutText extends React.Component {
  render() {
    return (
      <div>
        <h1 className="about__heading">Hello!</h1>

        <p className="about__describe">
          I am a final year Informatics student at Amikom University. I have
          developed my skills in the interface design of a web application.
          Using Nuxt.js to develop the frontend, then combined with Vuetify to
          enhance the appearance of the web application that my team and I
          developed. The team succeeded in bringing the product developed to the
          campus level ICT event. In February 2021 to July 2021, I had the
          opportunity to study technical and soft skills at the Bangkit Academy
          for Path Cloud Computing. At the end of the program, I was entrusted
          with developing and deploying a recommendation system backend to
          Google Cloud Platfrom using Cloud Run for the team capstone project.
          Besides, I was given an offer to develop an mvp for a small startup
          called Kodekarta from Howbizz. I used React.js combined with Chakra UI
          for Interface slicing which was created by our team's UX Designer.
        </p>
      </div>
    );
  }
}
