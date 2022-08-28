window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector("img");
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        console.log(img);
      }
    });
});
// window.onload = function () {
//   var fileUpload = document.getElementsByClassName("fileupload");

//   for (var i = 0; i < fileUpload.length; i++) {
//     fileUpload[i].onchange = showImgOnChange;
//   }
// };

// var showImgOnChange = function () {
//   if (typeof FileReader != "undefined") {
//     var dvPreview = this.nextElementSibling;

//     dvPreview.innerHTML = "";
//     var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;

//     for (var i = 0; i < this.files.length; i++) {
//       var file = this.files[i];
//       // if (regex.test(file.name.toLowerCase())) {
//       //   var reader = new FileReader();
//       //   reader.onload = function (e) {
//       //     var img = document.createElement("IMG");

//       //     img.height = "300";
//       //     img.width = "1000";
//       //     img.src = e.target.result;
//       //     dvPreview.appendChild(img);
//       //     // dvPreview.appendChild(textbox);
//       //     console.log(img.src);
//       //   };
//       reader.readAsDataURL(file);
//     }
//     // else {
//     //   alert(file.name + " is not a valid image file.");
//     //   dvPreview.innerHTML = "";
//     //   return false;
//     // }
//   }
// };
// //   else {
// //     alert("This browser does not support HTML5 FileReader.");
// //   // }
// // };
