import "./sevices.css";
import aylana from "../../assets/img/aylana.png";

export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-inner">
          <div className="services-box">
            <h2 className="services-h2">Get feedback across the entire talent journey</h2>
            <div className="services-text">
              <ul className="services-list">
                <li className="servces-item-list">
                  <h3 className="services-text-h3">Simple</h3>
                  <p className="services-text-p">
                    Save time: Create and send a survey in as little as 30
                    seconds. Feedback is compiled in easy to understand graphs
                    for actionable insights.
                  </p>
                </li>
              </ul>
              <ul className="services-list">
                <li className="servces-item-list">
                  <h3 className="services-text-h3">Simple</h3>
                  <p className="services-text-p">
                    Save time: Create and send a survey in as little as 30
                    seconds. Feedback is compiled in easy to understand graphs
                    for actionable insights.
                  </p>
                </li>
              </ul>
              <ul className="services-list">
                <li className="servces-item-list">
                  <h3 className="services-text-h3">Simple</h3>
                  <p className="services-text-p">
                    Save time: Create and send a survey in as little as 30
                    seconds. Feedback is compiled in easy to understand graphs
                    for actionable insights.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services-list-item">
            <ul className="services-ul">
              <li className="services-li">
                <img className="services-img" src={aylana} alt="" />
                <h3 className="services-item-h3">Reference</h3>
                <h2 className="services-item-h2">
                  Recruitonly the best validated talent.
                </h2>
                <p className="services-item-p">
                  Reduce time to hire and secure top talent fast. Make informed,
                  compliant hiring decisions with Xref’s automated reference
                  checking software.
                </p>
              </li>
            </ul>
            <ul className="services-ul">
              <li className="services-li">
                <img className="services-img" src={aylana} alt="" />
                <h3 className="services-item-h3">Reference</h3>
                <h2 className="services-item-h2">
                  your people and make meaningful
                </h2>
                <p className="services-item-p">
                  Want the secret to reduce attrition and understand what
                  metrics your organisation performs well at or can improve
                  upon? Conduct a Pulse Survey.
                </p>
              </li>
            </ul>
            <ul className="services-ul">
              <li className="services-li">
                <img className="services-img" src={aylana} alt="" />
                <h3 className="services-item-h3">Remember</h3>
                <h2 className="services-item-h2">
                  Recruitonly the best validated talent.
                </h2>
                <p className="services-item-p">
                  Collect, analyse and measure feedback from departing
                  employees. Reduce attrition and improve retention over time by
                  collecting consistent data to improve organisational
                  performance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
