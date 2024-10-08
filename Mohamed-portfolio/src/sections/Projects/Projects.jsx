import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={fitLift}
          link="https://github.com/"
          h3="Freeads"
          p="Freeads"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/"
          h3="ShowTime"
          p="ShowTime"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/"
          h3="Rotten Tomatoes"
          p="Rotten Tomatoes"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/"
          h3="YOWL"
          p="YOWL"
        />
        
        
      </div>
    </section>
  );
}

export default Projects;
