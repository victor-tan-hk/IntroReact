import "./App.css";

export default function App() {
  return (
    <section className="testimonial">
      <div className="testimonial-wrapper">
        <img
          className="testimonial-avatar"
          src="https://randomuser.me/api/portraits/women/48.jpg"
          alt="Jane Zhang"
        />
        <div className="testimonial-quote">
          <p>
          React is a great front-end framework ! 
          I use it to develop my portfolio page.          
          </p>
        </div>
        <p className="testimonial-name">
        Jane Zhang<span> · Front End Developer</span>
        </p>
      </div>
    </section>
  );
}