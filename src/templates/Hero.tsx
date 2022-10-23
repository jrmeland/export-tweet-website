import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <></>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
