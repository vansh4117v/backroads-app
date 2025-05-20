import { menu, socialIcons } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <a href="#about" className="footer-link">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialIcons.map((item) => (
          <li key={item.id}>
            <a href={item.link} target="_blank" className="footer-icon">
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
        {/* <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon">
            <i className="fab fa-squarespace"></i>
          </a>
        </li> */}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
