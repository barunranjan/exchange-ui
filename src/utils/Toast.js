import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

Toast.successMsg = (message) => {
  Toast.fire({
    icon: "success",
    title: message,
    showCloseButton: true,
    animation: true
  });
};

Toast.errorMsg = (message) => {
    Toast.fire({
      icon: "danger",
      title: message,
      showCloseButton: true,
      animation: true
    });
  };

export default Toast;

// example
// Toast.fire({
//   icon: "success",
//   title: "Signed in successfully",
// });
