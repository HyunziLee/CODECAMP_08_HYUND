export const CheckFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 존재하지 않습니다.");
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("5MB이하 파일만 가능합니다.");
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    alert("png파일, jpeg파일만 업로드 가능합니다. ");
  }

  return true;
};
