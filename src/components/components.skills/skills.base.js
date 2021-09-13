import React from "react";
import SkillsItems from "./skills.items";
import {
  DiGit,
  DiJavascript,
  DiPython,
  DiReact,
  DiGoogleCloudPlatform,
  DiCisco,
  DiLinux,
  DiMysql,
} from "react-icons/di";

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <h1 className="skills__heading">My Skills</h1>
        <div className="container__skills">
          <SkillsItems icon={<DiGit />} title="Version Control" />
          <SkillsItems icon={<DiJavascript />} title="JavaScript" />
          <SkillsItems icon={<DiPython />} title="Python" />
          <SkillsItems icon={<DiReact />} title="React" />
          <SkillsItems icon={<DiGoogleCloudPlatform />} title="Google Cloud" />
          <SkillsItems icon={<DiCisco />} title="Cisco" />
          <SkillsItems icon={<DiLinux />} title="Linux" />
          <SkillsItems icon={<DiMysql />} title="Mysql" />
        </div>
      </div>
    );
  }
}

