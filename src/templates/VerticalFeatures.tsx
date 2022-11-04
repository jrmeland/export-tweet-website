// import {
//   VerticalFeatureRow,
//   SingleVerticalFeatureRow,
// } from "../feature/VerticalFeatureRow";
import { TweetLinkForm } from "../form/TweetLinkForm";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="Easily and quickly export a Twitter Thread"
    description="Drop you link in here and we'll do the rest"
  >
    <TweetLinkForm />
    {/* <VerticalFeatureRow
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
    /> */}
    {/* <SingleVerticalFeatureRow
      id="contactForm"
      title="Lets talk."
      description={<ContactForm />}
    /> */}
  </Section>
);

export { VerticalFeatures };
