import backgroundImage from '../../assets/background.jpg'
import certificate from '../../assets/certificate.jpg'
import CV from '../../assets/cv.pdf'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={backgroundImage} alt="About Image" />
                    <br></br>
                    <img src={certificate} alt="Certificate Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>Programs And Certificates</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                    Completion of general education coursework is required for students to earn a certificate.By earning a certficiate, you indicate to potential employers, transfer institutions and society that you have gained specialized knowledge in a particular area of study.We awards these certificates when you satisfactorily complete certain specialized programs requiring fewer than two years of full-time study
                </p>
                <p>
                We offer premier online education and innovative learning opportunities through Experiential Digital Global Education.
                </p>
                <a href='#contact' className='btn primary'>Contact Us </a>
            </div>
        </div>
    </section>
  )
}

export default About
