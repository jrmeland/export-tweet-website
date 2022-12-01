import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = () => (
  <div className="antialiased text-gray-600 flex-col h-screen justify-between">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
