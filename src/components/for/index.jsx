import "./main.css";
import qiz from "../../assets/img/qiz.png";
import kitob from "../../assets/img/kirob.png";
import chiziq from "../../assets/img/chiziq.png";

export const For = () => {
  return (
    <section className="for">
      <div className="container">
        <div className="for-inner">
          <div className="for-new">
            <div className="for-box">
              <h3 className="for-h3">For teams</h3>
              <h2 className="for-h2">Fits seamlessly into your ecosystem</h2>
              <h3 className="for-h3">Talent acquisition</h3>
              <p className="for-p">
                In a fast-paced market, efficiency and trust are essential for
                Talent Acquisition. Data-driven insights can help confident
                hiring.
              </p>
              <h4 className="for-h4">Learn more</h4>
              <h3 className="for-h3">People and culture</h3>
              <p className="for-p">
                In a fast-paced, people-driven market, recruiting and retaining
                talent is a challenge. Data-driven feedback is vital to recruit,
                retain and remember top talent.
              </p>
              <h3 className="for-h3">Learn more</h3>
              <p className="for-p">
                Unbiased, efficient hiring is imperative for staffing and
                recruitment firms. Fast, data-driven candidate insights can
                help.
              </p>
            </div>
            <img className="for-qiz" src={qiz} alt="" />
          </div>

          <nav className="nav">
            <div className="nav-inner">
              <img className="nav-kitob" src={kitob} alt="" />
              <div className="nav-and">
                <h3 className="nav-h3">For industries</h3>
                <h2 className="nav-h2">
                  Tailored to the unique needs of your industry
                </h2>
                <p className="nav-p">
                  At Xref, we're people-focused, so no matter what industry
                  you're in, we cater to your unique needs to provide you with
                  one source of talent truth.
                </p>
                <div className="nav-list">
                  <ul className="nav-list-ul">
                    <li className="nav-list-li">
                      <h4 className="nav-h4">Not-For-Profit
                      </h4>
                      <img src={chiziq} alt="" width={237} />
                    </li>
                    <li className="nav-list-li">
                      <h4 className="nav-h4">Not-For-Profit</h4>
                      <img src={chiziq} alt="" />
                    </li>
                  </ul>
                  
                </div>
                <div className="nav-list">
                  <ul className="nav-list-ul">
                    <li className="nav-list-li">
                      <h4 className="nav-h4">Not-For-Profit
                      </h4>
                      <img src={chiziq} alt="" width={237} />
                    </li>
                    <li className="nav-list-li">
                      <h4 className="nav-h4">Not-For-Profit</h4>
                      <img src={chiziq} alt="" />
                    </li>
                  </ul>
                  
                </div>
                <div className="nav-list">
                  <ul className="nav-list-ul">
                    <li className="nav-list-li">
                      <h4 className="nav-h4">Not-For-Profit
                      </h4>
                      <img src={chiziq} alt="" width={237} />
                    </li>
                    <li className="nav-list-li">
                      <h4 className="nav-h4">Not-For-Profit</h4>
                      <img src={chiziq} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};
