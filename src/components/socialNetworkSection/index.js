import React from "react";

import { Network, Social } from "./styles";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const SocialNetworkSection = () => {
  return (
    <Network>
      <Social href="https://github.com/josecordeiroo" target="_blank">
        <FontAwesomeIcon icon={brands("github")} size="2x" color="white" />
        <h3>GitHub</h3>
      </Social>
      <Social href="https://www.linkedin.com/in/josecordeiroo/" target="_blank">
        <FontAwesomeIcon icon={brands("linkedin")} size="2x" color="white" />
        <h3>LinkedIn</h3>
      </Social>
      <Social
        href="https://wa.me/5511984550603"
        target="_blank"
      >
        <FontAwesomeIcon icon={brands("whatsapp")} size="2x" color="white" />
        <h3>WhatsApp</h3>
      </Social>
    </Network>
  );
};

export default SocialNetworkSection;
