export const copyToClipboard = (data: string, json = true) => {
  const textarea = document.createElement("textarea");

  textarea.value = json ? JSON.stringify(data) : data;

  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 9999);

  document.execCommand("copy");
  document.body.removeChild(textarea);
};
