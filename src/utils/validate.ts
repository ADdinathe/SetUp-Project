export const phoneCheck = (
  phoneNum: string,
  onSuccess: VoidFunction,
  onError: VoidFunction
): boolean => {
  const result = phoneNum.match(/[0-9]{10}/g);

  if (phoneNum.length == 10 && result) {
    onSuccess();
    return true;
  }

  onError();
  return false;
};
