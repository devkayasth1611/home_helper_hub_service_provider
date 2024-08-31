import React from "react";
import "../App.css";

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Home helper Hub</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. --> */}
          {/* <!-- You can delete the links only if you purchased the pro version. --> */}
          {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
          {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
