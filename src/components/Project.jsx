export default function Projects(){

    const myProject = [
        {
            id : 1,
            name: "E-commerce Website",
            description: "A fully responsive online shopping store.",
            image: "image",
            link: "#",
            techStack: ["React", "CSS", "Node.js"],
            featured: true
        },
        {
            id:2,
            name: "Weather App",
            description: "An app that show real-time weather data.",
            image: "",
            link: "#",
            techStack: ["HTML", "CSS", "JavaScript"],
            featured: false
        }
    ];

    return (
        <div className="project-box">
            <h2 className="pro-title">My Projects</h2>
            <div className="pro-container">
                {myProject.map((project) => (
                    <div key= {project.id} className="pro-card">
                        <div className="card-header">
                            <h3>{project.name}</h3>
                            {project.featured && <span className="featured-badge"> Featured</span>}
                        </div>

                        <p className="pro-description">{project.description}</p>
                            <div tech-container>
                                {project.techStack.map((tech, index) => (
                                    <span  key = {index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                 ))}
            </div>
        </div>
    )
}

