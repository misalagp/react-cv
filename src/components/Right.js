import React from 'react';
import CV from '../../src/CV.pdf';

function Right({ scrollPosition, resumeURL }) {
  const shouldExpand = scrollPosition > 100; // Adjust the value based on your design

  return (
    <div className={`right ${shouldExpand ? 'scrolled' : ''}`}>
      <div className="right-inner">
        <div className="introduction">
          <h4>Intro</h4>
          <div className="content">
            <p className="intro-p">As a person with close to 4 years of experience in the field of web design and frontend development, I am known for being reliable and consistently delivering high-quality work, ensuring that projects are completed within deadlines without compromising on quality. I excel in collaborating closely with design and marketing team, ensuring seamless integration of visuals and functionality.</p>
            {/* <span className="intro-p job-pls">I'm currently looking for my third and final co-op (from July to December 2017) before I graduate in 2018!</span> */}
          </div>
        </div>
        <div className="skills">
            <h4>Skills</h4>
            <div className="content">
                <div className="skill-category">
                    <strong>Languages: &nbsp;</strong>
                    <span>JavaScript (ES6), HTML5, CSS3/Scss, PHP</span>
                </div>
                <div className="skill-category">
                    <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                    <span>Wordpress, React, NextJS, jQuery, Bootstrap</span>
                </div>
                <div className="skill-category">
                    <strong>Tools: &nbsp;</strong>
                    <span>Git &amp; Github, Command Line, Adobe Photoshop, Figma, Sketch</span>
                </div>
            </div>
        </div>
        <div className="education">
            {/* <h4>Education</h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Sagittis purus sit amet volutpat consequat mauris. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Blandit turpis cursus in hac habitasse platea. Malesuada fames ac turpis egestas integer eget aliquet. Est ultricies integer quis auctor. Commodo quis imperdiet massa tincidunt nunc. Semper quis lectus nulla at.

    Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Ornare lectus sit amet est. Aenean et tortor at risus viverra adipiscing at in tellus. Proin sed libero enim sed faucibus. At augue eget arcu dictum. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Facilisi cras fermentum odio eu. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Ut diam quam nulla porttitor massa. Nunc lobortis mattis aliquam faucibus purus. Sed arcu non odio euismod. Non blandit massa enim nec dui nunc.

    Et malesuada fames ac turpis egestas sed. Magna ac placerat vestibulum lectus. Nunc non blandit massa enim nec dui nunc mattis enim. Nec feugiat nisl pretium fusce id velit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Est ullamcorper eget nulla facilisi etiam dignissim diam. Arcu bibendum at varius vel pharetra vel. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Sed enim ut sem viverra aliquet eget sit. Rhoncus dolor purus non enim praesent. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Risus ultricies tristique nulla aliquet enim. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Tortor consequat id porta nibh venenatis cras sed. Non pulvinar neque laoreet suspendisse.

    Ipsum consequat nisl vel pretium lectus quam id. Lobortis mattis aliquam faucibus purus in massa. Morbi leo urna molestie at. Eget nullam non nisi est sit. Viverra nam libero justo laoreet sit amet cursus. Lacinia quis vel eros donec ac odio tempor orci. Tempus quam pellentesque nec nam. Aliquam ut porttitor leo a. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Sagittis vitae et leo duis. Blandit turpis cursus in hac habitasse platea dictumst. Amet mattis vulputate enim nulla aliquet porttitor.

    Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ac odio tempor orci dapibus ultrices in iaculis. Porta lorem mollis aliquam ut porttitor leo. Lorem mollis aliquam ut porttitor leo a diam. Consequat semper viverra nam libero justo laoreet. Erat velit scelerisque in dictum non. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Sapien et ligula ullamcorper malesuada. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Tellus orci ac auctor augue mauris augue. In nibh mauris cursus mattis molestie a iaculis at. */}
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="content">
            <div className="exp-item">
            <div className="job">
                <a className="company" href="https://starry.com/" target="_blank">Bay42, Perform[cb]</a>
                <div className="duration">January 2020 &mdash; May 2023</div>
            </div>
            <div className="title">Frontend Developer</div>
            <ul className="description">
                <li>Worked as a main front-end developer on a web application called Perform[cb] for a client from Sarasota (Florida, USA). Perform[cb] is an affiliate marketing platform focused on connecting marketers and partners. The website was built using WordPress, HTML, CSS/SCSS, JavaScript, jQuery, PHP.</li>
                <li>Worked on the development of an android/iOS application for Perform[cb]'s platform using React Native. The development included implementation of design and engineering solutions to ensure optimal and coherent user experiences for this iOS and android app /with the focus on UI/UX.</li>
                <li>Worked on the client's application called ThriveTracker. Implemented the dark mode for this large application. Other tasks included implementation of change requests, tested code in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</li>
                <li>Developed and maintained the website of the Bay42 company.  Implemented responsive design using React, CSS, Sketch, image optimization tools, React animation library: Framer Motion, react-spring and other custom animations for loading, opening and closing modals, scrolling, etc...</li>
                <li>Implemented various smaller websites- WordPress, PHP, HTML, CSS..</li>
            </ul>
            </div>
            <div className="exp-item">
                <div className="job">
                    <a className="company" href="http://us.mullenlowe.com/" target="_blank">Bay42</a>
                    <div className="duration">September 2019 &mdash; December 2019</div>
                </div>
                <div className="title">Internship</div>
                <ul className="description">
                    <li>Implementation of client's change requests</li>
                    <li>Bug fixing</li>
                    <li>Getting to know the basics of version control using git in a combination with repositories on GitHub</li>
                    <li>Learning the basics of developing software using agile methodologies</li>
                    <li>Pushing tasks to the production environment</li>
                </ul>
                </div>
            </div>
        </div>
        <div className="projects">
          <h4>Other Projects</h4>
            <div className="content">
                <div className="project-item">
                    <a className="project-title" href="https://www.misala.de/" target="_blank">misala.de</a>
                    <p className="project-desc">Portfolio site coded from scratch to showcase my skills and past work. Built using React, CSS/Scss, MatterJS, Framer Motion, other custom animations.</p>
                </div>
                <div className="project-item">
                    <div className="project-title">online resume</div>
                    <p className="project-desc">An online version of my CV I made with React. Had lots of fun with custom CSS animations as well. </p>
                </div>
                <div className="project-item">
                  <a className="project-title" href="https://misalagp.github.io/fonticci/" target="_blank">fonticci</a>
                    <p className="project-desc">Google's Creative Type Combinations made with HTML, CSS/SCSS and Javascript. There's also a fun little game 
                    so you can test how well you can differentiate between fonts. Have fun!</p>
                </div>
                <div className="project-item">
                  <a className="project-title" href="https://codepen.io/p0waqqatsi/pens/public" target="_blank">other code related things</a>
                    <p className="project-desc">Check out my Codepen, I create fun little things from time to time. </p>
                </div>
            </div>
        </div>
        <a className="resume" href={CV} download="CV" target="_blank" rel="noopener noreferrer"><div className="resume-link">See my full resume</div></a>
      </div>
    </div>
  );
}

export default Right;