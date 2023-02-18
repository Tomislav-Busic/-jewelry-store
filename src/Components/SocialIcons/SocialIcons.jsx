import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="social">
      <a>
        <FaFacebookSquare className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/calviantique_finejewellery/"
        target="_blank"
      >
        <FaInstagramSquare className="social-icon" />
      </a>
      <a>
        <FaLinkedin className="social-icon" />
      </a>
    </div>
  );
};
