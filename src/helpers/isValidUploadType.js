export const isValidUploadType = (file_type) => {
  if (
    file_type !== "image/jpeg" &&
    file_type !== "image/png" &&
    file_type !== "image/jpg"
  ) {
    return true;
  } else {
    return false;
  }
};
