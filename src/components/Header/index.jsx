
import "./header.css"

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
         <div className="header-now">
          <div className="header-box">
            <ul className="header-list">
              <li className="header-list-item">
                <a href="#">Why Xref</a>
              </li>
              <li className="header-list-item">
                <a href="#">Solutions</a>
              </li>
              <li className="header-list-item">
                <a href="#">Platform</a>
              </li>
              <li className="header-list-item">
                <a href="#">Resources</a>
              </li>
              <li className="header-list-item">
                <a href="#">Pricing</a>
              </li>

            <button className="header-btn">Sign in</button>
            <button className="header-item-btn">Request a demo</button>
            </ul>
          </div>
         </div>
        </div>
      </div>
    </header>
  );
}
