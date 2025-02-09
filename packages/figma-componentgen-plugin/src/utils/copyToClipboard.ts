export const copyToClipboard = (data: string) => {
  const textarea = document.createElement("textarea");
  textarea.value = JSON.stringify(data, null, 2);

  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 9999);

  document.execCommand("copy");
  document.body.removeChild(textarea);
};
