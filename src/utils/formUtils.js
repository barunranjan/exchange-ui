export const getInputClasses = (meta, isSubmitting = true, fieldname) => {
  let result = "form-control h-auto py-2 px-3 ";
  if (isSubmitting) {
    if (meta.touched && meta.error) {
      result += " is-invalid";
    }

    if (meta.touched && !meta.error) {
      result += " is-valid";
    }
  }

  return result;
};
