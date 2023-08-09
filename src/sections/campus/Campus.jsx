import './campus.css'
import london from '../../assets/london.png'
import newyork from '../../assets/newyork.png'
import washington from '../../assets/washington.png'

const Campus = () => {
  return (
    <section id="campus">
        <h2>Our Global Campus</h2>
        <p>The Global Experience Office (GEO) provides you with intercultural learning and transformative experiences. Through the GEO programs, you will deepen your knowledge of the world and your chosen field of study, explore international career opportunities, and grow as a global individual.</p>
        <div className="container campus__container"></div>
        <section class="row">
            <div class="campus-col">
                <img src={london} />
                <div class="layer">
                    <h3>LONDON</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src={newyork} />
                <div class="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src={washington} />
                <div class="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Campus
