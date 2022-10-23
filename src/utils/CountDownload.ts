const countDownload = (filename: string) => {
  const downloadData = {
    "form-name": "filedownload",
    filename: filename,
  };
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(downloadData).toString(),
  }).catch((error) => alert(error));
};

export { countDownload };
