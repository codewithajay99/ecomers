export default function ImageValidator(e) {
  let { files } = e.target;

  // No file selected
  if (files.length === 0) {
    return "Pic field is Mandatory";
  }

  // Only 1 file allowed
  if (files.length === 1) {
    let file = files[0];

    // Check file size (limit 1MB)
    if (file.size > 1048576) {
      return "File is too high. Please upload file under 1MB";
    }

    // Allowed formats
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif"
    ];

    if (!allowedTypes.includes(file.type)) {
      return "Invalid Pic. Please upload .jpg, .jpeg, .png, .webp, .gif formats only";
    }

    return ""; // VALID
  }

  // More than 1 file selected
  return "Please upload only 1 picture";
}
