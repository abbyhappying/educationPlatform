import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Portfolio Project Image" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.link} className="btn sm primary" target="_blank" rel="noopner noreferrer">Course Link</a>
        </div>
    </Card>
  )
}

export default Project
