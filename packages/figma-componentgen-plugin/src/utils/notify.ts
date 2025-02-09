export const notify = (message: string) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: "notify",
        message,
      },
    },
    "*"
  );
};
