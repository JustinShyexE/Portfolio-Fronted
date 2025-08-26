import React from "react";
import gmail from "../images/gmail.png";
import phone from "../images/phone.png";
import git from "../images/github.png";

function Footer(props) {
  return (
    <div className="ft center" style={{ paddingBottom: "10px", backgroundColor:props.ft}}>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsLfsPMJgFTVczKWMJFdkHhqGBnxwSGbNRrWBggHdpSvKmtWFpPhpXgzmGHBbvWrqtpfg">
        {" "}
        <div className="contactBox fadeIn ">
          <img alt="" src={gmail} className="contactImg" />
          <p className="gmail center" style={{ color: props.color}}>iustin.bacaila25@gmail.com</p>
        </div>
      </a>
      <a href="tel:07442569505">
        {" "}
        <div className="contactBox fadeIn">
          <img alt="" src={phone} className="contactImg" />
          <p className="gmail center" style={{ color: props.color}}>07442569505</p>
        </div>
      </a>
      <a href="https://github.com/JustinShyexE">
        {" "}
        <div className="contactBox fadeIn">
          <img alt="" src={git} className="contactImg" />
          <p className="gmail center" style={{ color: props.color}} >JustinShyexE</p>
        </div>
      </a>
      <div className="contactBox fadeIn">
        <p className="gmail center" style={{ color: props.color}}>
          © 2024 Iustin Bacaila. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
