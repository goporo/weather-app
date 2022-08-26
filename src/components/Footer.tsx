import { Flex, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Flex position="absolute" bottom="5">
      <Link href="https://github.com/goporo" target="_blank">
        <IconButton
          aria-label="Github"
          icon={<FaGithub />}
          isRound={true}
          size="md"
          m="1"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/nguyen-phan-337781203/"
        target="_blank"
      >
        <IconButton
          aria-label="Linkedin"
          icon={<FaLinkedin />}
          isRound={true}
          size="md"
          m="1"
        />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <IconButton
          aria-label="Instagram"
          icon={<FaInstagram />}
          isRound={true}
          size="md"
          m="1"
        />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        <IconButton
          aria-label="Twitter"
          icon={<FaTwitter />}
          isRound={true}
          size="md"
          m="1"
        />
      </Link>
      <Link href="https://www.facebook.com/" target="_blank">
        <IconButton
          aria-label="Facebook"
          icon={<FaFacebook />}
          isRound={true}
          size="md"
          m="1"
        />
      </Link>
    </Flex>
  );
};

export default Footer;
