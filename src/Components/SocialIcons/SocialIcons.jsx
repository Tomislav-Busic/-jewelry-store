import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="social" data-testid="social_icons">
      <a
        href="https://www.instagram.com/calviantique_finejewellery/"
        target="_blank"
        rel="noreferrer"
        data-testid="social_icon_fb"
      >
        <FaFacebookSquare className="social_icon" />
      </a>
      <a
        href="https://www.instagram.com/calviantique_finejewellery/"
        target="_blank"
        rel="noreferrer"
        data-testid="social_icon_in"
      >
        <FaInstagramSquare className="social_icon" />
      </a>
      <a
        href="https://www.instagram.com/calviantique_finejewellery/"
        target="_blank"
        rel="noreferrer"
        data-testid="social_icon_li"
      >
        <FaLinkedin className="social_icon" />
      </a>
    </div>
  );
};
