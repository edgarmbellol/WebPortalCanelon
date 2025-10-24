import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, 
  FaGitAlt, FaFigma, FaAngular, FaVuejs 
} from 'react-icons/fa'
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, 
  SiKubernetes, SiNextdotjs, SiTailwindcss, SiFirebase 
} from 'react-icons/si'
import './Technologies.css'

const Technologies = () => {
  const techCategories = [
    {
      category: 'Estándares Médicos',
      techs: [
        { icon: <FaReact />, name: 'HL7', color: '#E63946' },
        { icon: <FaNodeJs />, name: 'FHIR', color: '#F77F00' },
        { icon: <FaPython />, name: 'DICOM', color: '#06B6D4' },
        { icon: <SiTypescript />, name: 'ICD-10', color: '#7209B7' },
        { icon: <FaAws />, name: 'SNOMED CT', color: '#2A9D8F' },
        { icon: <FaGitAlt />, name: 'LOINC', color: '#E76F51' }
      ]
    },
    {
      category: 'Desarrollo',
      techs: [
        { icon: <FaReact />, name: 'React', color: '#61DAFB' },
        { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
        { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
        { icon: <FaPython />, name: 'Python', color: '#3776AB' },
        { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
        { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' }
      ]
    },
    {
      category: 'Seguridad & Cloud',
      techs: [
        { icon: <FaAws />, name: 'AWS HIPAA', color: '#FF9900' },
        { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5' },
        { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
        { icon: <SiFirebase />, name: 'Encriptación', color: '#FFCA28' },
        { icon: <SiRedis />, name: 'SSL/TLS', color: '#DC382D' }
      ]
    }
  ]

  return (
    <section id="tecnologias" className="technologies">
      <div className="wide-container">
        <div className="section-title">
          <h2>Tecnologías y Estándares</h2>
          <p>Cumplimos con los estándares internacionales de salud digital</p>
        </div>

        <div className="tech-categories">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="tech-grid">
                {category.techs.map((tech, idx) => (
                  <div key={idx} className="tech-item">
                    <div className="tech-icon" style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cta">
          <h3>Cumplimiento Normativo Garantizado</h3>
          <p>Nuestras soluciones cumplen con HIPAA, GDPR y normativas sanitarias locales</p>
          <a href="#contacto" className="btn btn-primary">Consultar sobre compliance</a>
        </div>
      </div>
    </section>
  )
}

export default Technologies

