import { Component } from "preact";
import style from "./style.css";
import { Sidebar } from "../../components/sidebar";

export default class About extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className={style.Componentcontainer} />
        <div className={style.main}>About</div>
        <div className={style.goals}>
          Goals and Objectives
          <ul>
            <li>Writing high quality, clean code</li>
            <li>
              Defining systems that fully satisfy user needs and that delight
              their customers
            </li>
            <li>
              Managing large projects and teams effectively and efficiently,
              including architecting large systems successfully
            </li>
            <li>
              Conducting high-risk projects in ways that minimize risks and
              maximize desirable outcomes
            </li>
            <li>
              Achieving low defect counts and high levels of released quality
            </li>
            <li>
              Maintaining quality and flexibility as software evolves and
              matures over time
            </li>
            <li>Testing thoroughly, reliably and productively</li>
            <li>Achieving the full flexibility promised by Agile practices</li>
            <li>
              Delivering dozens or hundreds of product permutations, on time,
              with high quality
            </li>
            <li>
              Making technical decisions that fully consider impacts on business
              profit and loss
            </li>
            <li>
              Measuring software development processes and continually improving
              customer satisfaction, quality, schedule, and productivity
            </li>
          </ul>
        </div>
        <div className={style.capabilityLevels}>
          <div className={style.introductory}>
            <img
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5a43f059b894c90d5c057252/0x0.png"
              alt="TaxSlayer"
              width="150"
              height="150"
            />
            <br />
            Introductory
          </div>
          <div className={style.competence}>
            <img
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5a43f059b894c90d5c057252/0x0.png"
              alt="TaxSlayer"
              width="150"
              height="150"
            />
            <br />
            Competence
          </div>
          <div className={style.leadership}>
            <img
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5a43f059b894c90d5c057252/0x0.png"
              alt="TaxSlayer"
              width="150"
              height="150"
            />
            <br />
            Leadership
          </div>
          <div className={style.mastery}>
            {" "}
            <img
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5a43f059b894c90d5c057252/0x0.png"
              alt="TaxSlayer"
              width="150"
              height="150"
            />
            <br />
            Mastery
          </div>
          <div className={style.paragraph1}>
            The professional performs or is capable of performing basic work in
            an area, generally under supervision. The professional is taking
            effective steps to develop his or her knowledge and skills.
          </div>

          <div className={style.paragraph2}>
            The professional performs effective, independent work in an area,
            serves as a role model for less expert professionals, and
            occasionally coaches others.
          </div>

          <div className={style.paragraph3}>
            The professional performs exemplary work in an area. The
            professional regularly coach professionals and provides
            project-level and possibly company-wide leadership. The professional
            is recognized within the company as a major resource in an area.
          </div>

          <div className={style.paragraph4}>
            The employee has deep experience across multiple projects and
            performs reference work in an area. The employee provides
            industry-level leadership and is recognized outside the company for
            expertise in the area. Industry-wide, only a handful of
            professionals will attain this level within each KA.
          </div>
        </div>
        <div className={style.knowledgeAreas}>
          <div className={style.KA}>Knowledge Area</div>
          <div className={style.description}>Description</div>
          <div className={style.area}>Configuration Management</div>
          <div className={style.paragraph}>
            Defining how project artifacts are organized and stored, how changes
            to those artifacts are controlled and managed, and how the system is
            released to the customer.
          </div>
          <div className={style.area}>Construction</div>
          <div className={style.paragraph}>
            Defining how project artifacts are organized and stored, how changes
            to those artifacts are controlled and managed, and how the system is
            released to the customer.
          </div>
          <div className={style.area}>Design</div>
          <div className={style.paragraph}>
            Defining the architecture, components, interfaces, and other
            characteristics of a system or component—the bridge that analyzes
            requirements and defines the internal structure that serves as the
            basis for construction.
          </div>
          <div className={style.area}>Foundations</div>
          <div className={style.paragraph}>
            Combines the SWEBOK knowledge areas of professional practices,
            computing foundations, mathematical foundations, engineering
            foundations, and engineering economics.
          </div>
          <div className={style.area}>Maintenance</div>
          <div className={style.paragraph}>
            Supporting already-built software—including system installation,
            deployment, operation, adaptation, perfection, evolution, and
            migration.
          </div>
          <div className={style.area}>Models and Methods</div>
          <div className={style.paragraph}>
            Syntax, semantics, and pragmatics of notations; representations of
            information, behavior, and structure; and defining and assessing
            heuristics, formal methods, prototyping, and Agile methods.
          </div>
          <div className={style.area}>Process</div>
          <div className={style.paragraph}>
            Defining Agile software lifecycles and other lifecycles; measuring
            software quality, timeliness, and productivity; and assessing and
            improving software quality, timeliness, and productivity.
          </div>
          <div className={style.area}>Management</div>
          <div className={style.paragraph}>
            Activities related to initiating, estimating, planning, tracking,
            and managing risks on projects. Involves both managing things and
            managing people.
          </div>
          <div className={style.area}>Quality</div>
          <div className={style.paragraph}>
            Activities associated with providing confidence that software will
            satisfy stated and implied needs under specific conditions,
            including needs for functionality, performance, and safety. Includes
            planning, managing, measuring, assessing, conducting, and improving
            these activities.
          </div>
          <div className={style.area}>Requirements</div>
          <div className={style.paragraph}>
            Elicitation, analysis, modeling, specification, documentation, and
            management of the functions to be implemented in software.
          </div>
          <div className={style.area}>Testing</div>
          <div className={style.paragraph}>
            Dynamic verification that a program or system exhibits expected
            behaviors, performed by executing software to detect defects and
            evaluate features.
          </div>
        </div>
      </div>
    );
  }
}
