import React from "react";
import { ReactComponent as CodePen } from "../assets/codepen.svg";
import { ReactComponent as CodeSandbox } from "../assets/codesandbox.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Reddit } from "../assets/reddit.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as YouTube } from "../assets/youtube.svg";
import emailjs, { init } from 'emailjs-com';
init("user_9jLdO8H26hYMcdiuTRjOZ");

const Contact = (props) => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_vfgy2ev', 'template_02g4929', e.target, 'user_9jLdO8H26hYMcdiuTRjOZ')
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you for your time. I will reply as soon as possible!")
        }
      })
      // Handle errors here however you like
      .catch((err) => console.error('Failed to send feedback. Error: ', err));
  }

  return (
    <React.Fragment>
      <h3># Contact Me</h3>
      <div className="welcomeGrid1">
        <div className="wrap">      
          <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="user_name" placeholder="Please enter your full name" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="user_email" placeholder="Please enter your email address" />
            <label htmlFor="message">Message</label>
            <textarea id='message' name="user_message" placeholder="Please indicate why you are reaching out or if you would like to join our news letter!" />
            <button type="submit" value="Send">Submit</button>
          </form>
        </div>
        <div className="ablock">
          <a href="https://codepen.io/maverickcer">
            <CodePen />
            CodePen
          </a>
          <a href="https://codesandbox.io/u/MaverickCER">
            <CodeSandbox />
            CodeSandbox
          </a>
          <a href="https://github.com/MaverickCER">
            <GitHub />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/maverickcer/">
            <LinkedIn />
            LinkedIn
          </a>
          <a href="https://www.reddit.com/user/maverickcer">
            <Reddit />
            Reddit
          </a>
          <a href="https://twitter.com/MaverickCER">
            <Twitter />
            Twitter
          </a>
          <a href="https://studio.youtube.com/channel/UCkYSvi4dRFcsrSIbE5Sflmg">
            <YouTube />
            YouTube
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;