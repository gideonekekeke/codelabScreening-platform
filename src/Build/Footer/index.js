import React from "react";

import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRight,
  SocialIcon,
  SocialIconLink,
} from "./FooterElement";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> Contact us </FooterLinkTitle>
              <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
              <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialMediaLogo onClick={toggleHome}>CodeLab</SocialMediaLogo>
            <WebsiteRight
              href="www.brighterdayscodelab.com.ng"
              target="new page"
            >
              Developed by CodeLab 🚀 | © {new Date().getFullYear()} All rights
              reserved{" "}
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink
                href="https://www.facebook.com/groups/brighterdayscodelab"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg"
                target="_blank"
                aria-label="Youtube"
              >
                <YouTubeIcon />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <TwitterIcon />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <LinkedInIcon />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
