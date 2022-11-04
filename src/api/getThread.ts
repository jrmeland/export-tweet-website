const getThread = async (threadId: string) => {
  try {
    const res = await fetch(
      `https://api.joshmelander.com/get-thread?threadId=${threadId}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export { getThread };
