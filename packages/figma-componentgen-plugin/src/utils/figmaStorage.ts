const getStorage = () => {
  parent.postMessage(
    {
      pluginMessage: {
        type: "getMappingTable",
      },
    },
    "*"
  );
};

const setStorage = (value: any) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: "setMappingTable",
        data: value,
      },
    },
    "*"
  );
};

export { getStorage, setStorage };
