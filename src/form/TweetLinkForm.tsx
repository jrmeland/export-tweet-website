import { useForm } from "react-hook-form";
import { getThread } from "../api/getThread";

let handleTweetLinkSubmit = async (data: any) => {
  console.log(data);
  const link = data["link"];
  console.log(link);
  const withoutQueryParams = link.split("?")[0];
  const tweetId = withoutQueryParams.split("/").pop();
  const result = await getThread(tweetId);
  console.log(result);
};

const TweetLinkForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => handleTweetLinkSubmit(data))}>
      <input {...register("link")} placeholder="tweetLink" />
      <input type="submit" />
    </form>
  );
};

export { TweetLinkForm };
