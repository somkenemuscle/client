import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import './styles/home.css';
import Footer from "@/components/footers/footer";
// import the icons you need
import {
  faFolderOpen,
  faCheckCircle,
  faBullseye,
  faHeart,
  faCircleUp,

} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <section className="title">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1 className="title-header">Connect And Share To Start Tweeting with Friends And Total Strangers </h1>
              <h5 className="title-text">Signup with us and tweet anything you want ranging from pictures to texts, <br /> Have funnnnnnnnnnn  </h5>
              <Link href='/tweets'>
                <button type="button" className='btn btn-primary btn-md dw-btn'>
                  Make A Tweet  <FontAwesomeIcon icon={faFolderOpen} style={{ fontSize: 15, color: "white" }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container text-center">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <p><FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: 60, color: "white" }} /></p>
              <h3 className='features-header'>Easy to use now</h3>
              <p className='features-p'>So easy to use, even your dog could do it.</p>
            </div>
            <div className="col-xl-4 col-md-6">
              <p> <FontAwesomeIcon icon={faBullseye} style={{ fontSize: 60, color: "yellow" }} /></p>
              <h3 className='features-header'>Any tweet</h3>
              <p className='features-p'>Feel free to express yourself, say something </p>
            </div>
            <div className="col-xl-4 col-md-12">
              <p> <FontAwesomeIcon icon={faHeart} style={{ fontSize: 60, color: "#d9534f" }} /></p>
              <h3 className='features-header'>Like other posts</h3>
              <p className='features-p'>you have the ability to like other tweets</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials testimonial-1">
        <h2 className='testimonial-text'>With Retweet, you can be yourself, speak freely 
        and enagage with other people ,Express yourself without words. Use Pictures or share everyday moments on your page</h2>
        <p className='testimonial-icon'> <FontAwesomeIcon icon={faCircleUp} style={{ fontSize: 60, color: "yellow" }} /></p>
      </section>


      <section className='cards-section home-cards-section'>
        <div className="row row-cols-1 row-cols-lg-2 md-1 g-4">
          <div className="col">
            <div className="card h-100 home-card">
              <div className="card-body">
                <h5 className="card-title home-card-title">Workspaces</h5>
                <p className="card-text home-card-text">This is the long card with supporting text below as a natural lead-in to additional content. This content is a little bit longer This is the long card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 home-card">
              <div className="card-body">
                <h5 className="card-title home-card-title">Durable</h5>
                <p className="card-text home-card-text">This is a short card card with supporting text below as a natural lead-in to additional content is durable for use and extension This is the long card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 home-card">
              <div className="card-body">
                <h5 className="card-title home-card-title">Enhancement</h5>
                <p className="card-text home-card-text">This is a big tonka you are bio is a longer card with supporting text below as a natural lead-in to additional content also This is the long card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 home-card">
              <div className="card-body">
                <h5 className="card-title home-card-title">Enhancement</h5>
                <p className="card-text home-card-text">This is a big tonka you are bio longer card with supporting text below as a natural lead-in to additional content also This is the long card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
