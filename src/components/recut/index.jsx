import "./main.css";
import checks from "../../assets/img/checks.png"

export const Requt = () => {
  return (
    <section className="ruqut">
      <div className="container">
        <div className="ruqut-inner">
          <div className="ruqut-box">
          <div className="ruqut-box2">
            <h3 className="ruqut-text">Additional checks</h3>
            <h2 className="ruqut-text-h2">
              Connecting you to the world of digital trust
            </h2>
            <p className="ruqut-text-p">
              As a growing community of global checking vendors, Trust
              Marketplace is an aggregator for enhanced due diligence in the
              online trust environment.
            </p>
            <button className="ruqut-btn">Visit website</button>
          </div>
            <img className="ruqut-checks" src={checks} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
