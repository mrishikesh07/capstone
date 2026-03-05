import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section>
      <h1>Little Lemon</h1>
      <p>Fresh Mediterranean food in Chicago.</p>
      <Link to="/booking">
      <button className="cta-button">Reserve a Table!</button>
      </Link>
    </section>
  );
}

export default CallToAction;