export const copy = (text: string, callbackAfterCopy?: () => void) => {
  const cb = navigator.clipboard;
  cb.writeText(text).then(() => {
    if (callbackAfterCopy) {
      callbackAfterCopy();
    }
  });
};
