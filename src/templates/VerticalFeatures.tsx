import {
  VerticalFeatureRow,
  SingleVerticalFeatureRow,
} from "../feature/VerticalFeatureRow";
import { ContactForm } from "../form/ContactForm";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="What you get"
    description="We algorithmically generate lists of leads based on the development potential of a property. You can specify general criteria such as location, lot size, current valuation, etc. We give you a list of properties ready for you to convert to willing sellers."
  >
    <VerticalFeatureRow
      title="Try it out"
      description={
        <span>
          <a
            href=""
            download
            className="text-primary-600 hover:text-primary-800 hover:underline hover:underline-offset-2"
          >
            Download our sample report
          </a>
          . If you like what you find then we can continue working together.
        </span>
      }
      image="/assets/images/site-stats.jpg"
      imageAlt="First feature alt text"
    />
    <SingleVerticalFeatureRow
      id="contactForm"
      title="Lets talk."
      description={<ContactForm />}
    />
  </Section>
);

export { VerticalFeatures };
