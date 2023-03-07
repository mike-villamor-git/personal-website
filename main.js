import './style.css'

const aboutLink = document.querySelector('#about');
const projectsLink = document.querySelector('#projects')
const main = document.getElementsByClassName('main')[0];


function handleAboutClick(event){
  event.preventDefault();
  main.innerHTML = `
  <p>Hey, I'm Mike, a Software Engineer based in New York City. I'm currently working on <a href="https://github.com/open-source-labs/nautilus#readme" target="_blank">Nautilus</a>, a developer tool that dynamically renders essential Docker Compose properties onto an Electron GUI in order to ease the development process.</p>
         <br> 
         <p>In a previous life, I was a Sleep Technologist, and worked at a sleep lab to collect and analyze biophysiological data to aid in the diagnosis of sleep disorders. As a former clinician, <strong>I care deeply about the intersection between Health and Technology</strong>, and I believe that Tech has the power to enable distributed healthcare and empower individuals to be more informed about their health.</p>
         <br>
         <p>In my free time, I enjoy reading Manga, watching Movies, and Powerlifting.</p>
  `
}

function handleProjectsClick(event){
  event.preventDefault();
  main.innerHTML= `
  <h3>Here are some of the things I've built in my free time:</h3>
  <div class="projects">
    <div class="project-title">
      <img src="/walking.png" alt="an icon of a man walking" height="50" width="50">
      <a href="https://step-data-2022.vercel.app/" target="_blank">2022 Step Visualizer</a>
      <p>An app that shows how many steps I walked last year.</p>
    </div>
    <div class="project-title">
      <img src="/banana_jam.png" alt="an icon of jam made from bananas" height="50" width="50">
      <a href="https://github.com/mike-villamor-git/thats-my-jam" target="_blank">That's My Jam</a>
      <p>A game about serving Jam to customers.</p>
    </div>
    <div class="project-title">
      <img src="/music-note.png" alt="an icon folders displaying music notes" height="50" width="50">
      <a href="https://github.com/Dragonite-NY33/SpotiFynd" target="_blank">Spotifynd</a>
      <p>A music discovery game using Spotify API.</p>
    </div>
  </div>
  `
}

aboutLink.addEventListener('click', handleAboutClick)
projectsLink.addEventListener('click', handleProjectsClick)