// import {
//   VerticalFeatureRow,
//   SingleVerticalFeatureRow,
// } from "../feature/VerticalFeatureRow";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getThread } from "../api/getThread";
import { Section } from "../layout/Section";
import styles from "./VerticalFeatures.module.css";

const VerticalFeatures = () => {
  const [tweets, setTweets] = useState<any[]>([]);
  const { register, handleSubmit } = useForm();

  let handleTweetLinkSubmit = async (data: any) => {
    console.log(data);
    const link = data["link"];
    console.log(link);
    const withoutQueryParams = link.split("?")[0];
    const tweetId = withoutQueryParams.split("/").pop();
    const result = await getThread(tweetId);
    console.log(result);
    setTweets(result);
  };

  return (
    <Section
      title="Easily and quickly export a Twitter Thread"
      description="Drop you link in here and we'll do the rest"
    >
      <div className="grid place-items-center mb-4">
        <form onSubmit={handleSubmit((data) => handleTweetLinkSubmit(data))}>
          <input
            {...register("link")}
            placeholder="tweetLink"
            className="bg-white border border-slate-300 rounded-md text-sm shadow-sm"
          />
          <input type="submit" />
        </form>
      </div>
      {tweets && (
        <div className="grid place-items-center">
          <div className={styles.threadDisplay}>
            {tweets &&
              tweets.map((tweet) => (
                <p key={tweet.id}>
                  {tweet.text}
                  <br />
                  -------------------------------
                </p>
              ))}
          </div>
          <div></div>
        </div>
      )}
    </Section>
  );
};

export { VerticalFeatures };
