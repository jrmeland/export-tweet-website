/* eslint-disable @next/next/no-img-element */
import { AppConfig } from "../utils/AppConfig";
import { useRouter } from "next/router";

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img src={`${router.basePath}/favicon-32x32.png`} alt="icon"></img>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
