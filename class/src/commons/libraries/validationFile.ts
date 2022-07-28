export const checkValidationFile = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다.");

    return false;
    // return;
    // 이 return은 onChangeFile(호출한데)을 종료하는게 아니라 이 함수를 종료하는거임
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("파일용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg, png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
