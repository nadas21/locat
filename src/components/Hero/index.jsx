import "./main.css";
import chat from "../../assets/img/chat.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-now">
            <h3 className="hero-h3">Platform</h3>
            <h2 className="hero-h2">Automating your people journey</h2>
            <img
              className="hero-chat"
              src={chat}
              alt=""
              width={963}
              height={471}
            />
          </div>
          <nav className="nav-inner">
            <div className="nav-box">
              <ul className="nav-list">
                <li className="anav-item-list">
                  <h3 className="nav-h3">Survey builder</h3>
                  <p className="nav-p">
                    Create compliant, non-bias surveys in seconds. Choose a
                    Reference or Exit Survey template or build your own from a
                    selection of HR-approved, compliant, non-bias questions.
                  </p>
                  <h4 className="nav-h4">Learn more</h4>
                </li>
                <li className="anav-item-list">
                  <h3 className="nav-h3">Survey builder</h3>
                  <p className="nav-p">
                    Create compliant, non-bias surveys in seconds. Choose a
                    Reference or Exit Survey template or build your own from a
                    selection of HR-approved, compliant, non-bias questions.
                  </p>
                  <h4 className="nav-h4">Learn more</h4>
                </li>
                <li className="anav-item-list">
                  <h3 className="nav-h3">Survey builder</h3>
                  <p className="nav-p">
                    Create compliant, non-bias surveys in seconds. Choose a
                    Reference or Exit Survey template or build your own from a
                    selection of HR-approved, compliant, non-bias questions.
                  </p>
                  <h4 className="nav-h4">Learn more</h4>
                </li>
                <li className="anav-item-list">
                  <h3 className="nav-h3">Survey builder</h3>
                  <p className="nav-p">
                    Create compliant, non-bias surveys in seconds. Choose a
                    Reference or Exit Survey template or build your own from a
                    selection of HR-approved, compliant, non-bias questions.
                  </p>
                  <h4 className="nav-h4">Learn more</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};
