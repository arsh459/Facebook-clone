import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer className="login_footer">
      <div className="login_footer_wrap">
        <Link to="/">English (UK)</Link>
        <Link to="/">ਪੰਜਾਬੀ</Link>
        <Link to="/">हिन्दी</Link>
        <Link to="/">اردو</Link>
        <Link to="/">मराठी</Link>
        <Link to="/">ગુજરાતી</Link>
        <Link to="/">বাংলা</Link>
        <Link to="/">தமிழ்</Link>
        <Link to="/">తెలుగు</Link>
        <Link to="/">ಕನ್ನಡ</Link>
        <Link to="/">മലയാളം</Link>
        <Link to="/" className="footer_square">
          <i className="plus_icon"></i>
        </Link>
      </div>
      <div className="footer_splitter"></div>
      <div className="login_footer_wrap">
        <Link to="/">SignUp</Link>
        <Link to="/">Login</Link>
        <Link to="/">Messenger</Link>
        <Link to="/">Facebook Lite</Link>
        <Link to="/">Watch</Link>
        <Link to="/">Places</Link>
        <Link to="/">Games</Link>
        <Link to="/">Marketplace</Link>
        <Link to="/">Meta Pay</Link>
        <Link to="/">Meta Store</Link>
        <Link to="/">Meta Quest</Link>
        <Link to="/">Instagram</Link>
        <Link to="/">Bulletin</Link>
        <Link to="/">Fundraisers</Link>
        <Link to="/">Services</Link>
        <Link to="/">Voting Information Centre</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Privacy Centre</Link>
        <Link to="/">Groups</Link>
        <Link to="/">About</Link>
        <Link to="/">Create ad</Link>
        <Link to="/">Create Page</Link>
        <Link to="/">Developers</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Cookies</Link>
        <Link to="/">
          AdChoices <i className="adChoices_icon"></i>
        </Link>
        <Link to="/">Terms</Link>
        <Link to="/">Contact uploading and non-users</Link>
        <Link to="/">Settings</Link>
        <Link to="/">Activity log</Link>
      </div>
      <div className="login_footer_wrap">
        <Link style={{ fontSize: "12px", marginTop: "5px" }}>Meta © 2023</Link>
      </div>
    </footer>
  )
}
