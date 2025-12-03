export default function FormValidator(e) {
  let { name, value } = e.target;

  switch (name) {
    case "name":
      // empty check
      if (!value || value.length === 0) {
        return name + " field is Mandatory";
      }
      // length check
      else if (value.length < 3 || value.length > 50) {
        return name +" Length must be 3-50 Characters";
      } 
      else {
        return "";
      }

    default:
      return "";
  }
}
