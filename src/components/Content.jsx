// src/components/Content.js
import React from "react";
import ImageGallery from "./imagegallery"; // Import the new ImageGallery component

const Content = () => {
  return (
    <div className="content">
      <header className="App-header">
        <h1>About</h1>
        <p>
          My name is Spencer Henderson, and I am a Computer Science student at the University of Missouri.
          I am also working on getting a minor in Mathematics. I participate in the Mizzou Computing Association, 
          intramural sports, and various game jams and hackathons throughout the year. I am an undergraduate research 
          assistant with the CERI Center, working on the USucceed project with the Information Experience Laboratory.
          In this project, I develop a VR experience for neurodivergent individuals using Unity and C#. Outside of my 
          research and studies, I enjoy developing games, apps, and websites.
        </p>
      </header>

      <section>
        <h1>Research</h1>
        <h2>USucceed</h2>
        <p>
          My work on the USucceed project involves creating an immersive world in Unity that can be navigated in VR, 
          developing engaging minigames and curriculum, and integrating an AI pedagogical agent to enhance the experience. 
          I work alongside neurodivergent adults to create a supportive learning environment, ensuring users can engage 
          effectively and gain valuable skills in cybersecurity. My primary contributions include designing the minigames 
          for each unit, developing the navigation and menu system, and shaping the overall game loop to create a cohesive 
          and interactive experience.
        </p>
      </section>

      <ImageGallery />
    </div>
  );
};

export default Content;
