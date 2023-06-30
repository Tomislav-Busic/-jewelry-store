import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="social">
      <a
        href="https://www.instagram.com/calviantique_finejewellery/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare className="social_icon" />
      </a>
      <a
        href="https://www.instagram.com/calviantique_finejewellery/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare className="social_icon" />
      </a>
      <a
        href="https://www.instagram.com/calviantique_finejewellery/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="social_icon" />
      </a>
    </div>
  );
};
