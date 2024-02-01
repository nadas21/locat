import "./main.css";

export const And = () => {
  return (
    <section className="And">
      <div className="container">
        <div className="and-inner">
          <div className="and-box">
            <ul className="and-list">
              <li className="and-item-list">
                <h3 className="and-h3">Security and compliance</h3>
                <p className="and-p">
                  We lead with a security-first mindset, a robust
                  infrastructure, and a compliant operating environment.
                </p>
               <h5 className="and-h5" >Learn more</h5>
              </li>
            </ul>
            <ul className="and-list">
              <li className="and-item-list">
                <h3 className="and-h3">Integrations</h3>
                <p className="and-p">
                Integrate Xref with your everyday tools for simplified people management within a single platform.
                </p>
               <h5 className="and-h5" >Learn more</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
