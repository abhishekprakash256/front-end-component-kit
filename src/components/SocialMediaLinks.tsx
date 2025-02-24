import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/SocialMediaLinks.css"; // Custom CSS

interface MediaLinksProps {
  github_link: string;
  linkedin_link: string;
  twitter_link: string;
  leetcode_link: string;
  gitlab_link: string;
  kaggle_link: string;
  medium_link: string;
}

const SocialMediaLinks: React.FC<MediaLinksProps> = ({
  github_link,
  linkedin_link,
  twitter_link,
  leetcode_link,
  gitlab_link,
  kaggle_link,
  medium_link,
  
}) => {
  return (
    <Container>
     <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
  <Col className="col-12 d-flex justify-content-center flex-wrap">
    {github_link && (
      <a href={github_link} target="_blank" rel="noopener noreferrer">
        <img src="github.svg" className="leetcode-icon hover-effect-github mx-3" width="33" height="33" alt="GitHub" />
      </a>
    )}
    {linkedin_link && (
      <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
        <img src="linkedin-color.svg" className="leetcode-icon hover-effect-linkedin mx-2" width="33" height="33" alt="LinkedIn" />
      </a>
    )}
    {twitter_link && (
      <a href={twitter_link} target="_blank" rel="noopener noreferrer">
        <img src="twitter.svg" className="leetcode-icon hover-effect-twitter mx-2" width="33" height="33" alt="Twitter" />
      </a>
    )}
    {leetcode_link && (
      <a href={leetcode_link} target="_blank" rel="noopener noreferrer">
        <img src="leetcode-color.svg" className="leetcode-icon hover-effect-leetcode mx-2" width="33" height="33" alt="LeetCode" />
      </a>
    )}
    {gitlab_link && (
      <a href={gitlab_link} target="_blank" rel="noopener noreferrer">
        <img src="gitlab-color.svg" className="leetcode-icon hover-effect-gitlab mx-2" width="33" height="33" alt="GitLab" />
      </a>
    )}
    {kaggle_link && (
      <a href={kaggle_link} target="_blank" rel="noopener noreferrer">
        <img src="kaggle-color.svg" className="leetcode-icon hover-effect-kaggle mx-2" width="33" height="33" alt="Kaggle" />
      </a>
    )}
    {medium_link && (
      <a href={medium_link} target="_blank" rel="noopener noreferrer">
        <img src="medium.svg" className="leetcode-icon hover-effect-medium mx-2" width="33" height="33" alt="Medium" />
      </a>
    )}
  </Col>
</Row>

    </Container>
  );
};

export default SocialMediaLinks;
