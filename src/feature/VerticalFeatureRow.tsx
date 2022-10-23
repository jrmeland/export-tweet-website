import className from "classnames";
import { useRouter } from "next/router";

type IVerticalFeatureRowProps = {
  title: string;
  description: any;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

type ISingleSingleVerticalFeatureRowProps = {
  title: string;
  id?: string;
  description: any;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

const SingleVerticalFeatureRow = (
  props: ISingleSingleVerticalFeatureRowProps
) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass} id={props.id}>
      <div className="w-full text-center">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow, SingleVerticalFeatureRow };
