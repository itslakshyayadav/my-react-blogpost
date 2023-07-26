import commonUtils from "../utils/common";

function Portfolio(props) {
  return (
    <div className="section1 !bg-violet-950">
      <span className="pro"> PRO </span>
      <div className="py-1">
        <div className="dp mt-1">
          <img src={props.dp} alt="" className="img-dp" />
        </div>
      </div>

      <div className="name">
        <p>{commonUtils.greet(props.fullName)}</p>
        {/* <p>{props.fullName}</p> */}

        {/* <span>Isnumber : {commonUtils.isNumber(props.fullName)}</span> */}
        <p className="small-text">{props.address}</p>
      </div>

      <div className="large-text">
        <p>{props.intro}</p>
      </div>

      <div className="btn">
        <button className="btn-message">Message</button>
        <button className="btn-following">following</button>
      </div>

      <div className="skill-section">
        <div className="p-1/2">
          <p className="s-para">SKILLS</p>
          <div>
            {props.skills.map((skill) => {
              return <span className="skills">{skill}</span>;
            })}
          </div>
          <br />

          <p className="s-para">Sub-Skills</p>
          <div>
            {props.subSkills.map((subSkills) => {
              return <span className="skills">{subSkills}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
