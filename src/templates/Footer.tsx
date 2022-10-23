import { Background } from "../background/Background";
import { CenteredFooter } from "../footer/CenteredFooter";
import { Section } from "../layout/Section";
import { Logo } from "./Logo";

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={[]}>
        <li>
          <a href="https://www.freepik.com/vectors/business">
            Business vector created by stories - www.freepik.com
          </a>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
