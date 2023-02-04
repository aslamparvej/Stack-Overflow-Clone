import React from "react";

import Pen from "../../assets/pen.svg";
import Comment from "../../assets/comment.svg";
import Icon from "../../assets/icon.png";

import {Link} from "react-router-dom"

import "./RightSidebar.css";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={Pen} alt="PenIcon" width="18" />
          <p>Announcing more ways to learn and grow your skills</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={Pen} alt="PenIcon" width="18" />
          <p>
            Why developer experience is the key to better software, straight
            from the...
          </p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={Comment} alt="PenIcon" width="18" />
          <p>Accessibility Update: Colors</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={Icon} alt="PenIcon" width="18" />
          <p>2022: a year in moderation</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={Icon} alt="PenIcon" width="18" />
          <p>Collectives: The next iteration</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={Icon} alt="PenIcon" width="18" />
          <p>
            We’re bringing advertisements for technology courses to Stack
            Overflow
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={Icon} alt="PenIcon" width="18" />
          <p>Temporary policy: ChatGPT is banned</p>
        </div>
      </div>

      <h4>Custom Filters</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <Link to="createCustomFilter" style={{textDecoration: "none"}}>Create a custom filter</Link>
        </div>
      </div>
    </div>
  );
};

export default Widget;
