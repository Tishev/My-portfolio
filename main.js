"use strict";

const aboutMe = document.querySelector("#aboutmeid");
const aboutMeBlock = document.querySelector(".aboutme");

const skills = document.querySelector("#skillsid");
const skillsBlock = document.querySelector(".skills");

aboutMe.addEventListener("click", () => {
  aboutMeBlock.classList.toggle("aboutme-position");
});

skills.addEventListener("click", () => {
  skillsBlock.classList.toggle("skills-position");
});
