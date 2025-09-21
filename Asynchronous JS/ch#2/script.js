const createImage = function (imgPath) {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener('load', function () {
      document.querySelector('.images').appendChild(img);
      resolve(img);
    });
    img.addEventListener("error", (reject) => {
      reject(new Error("image not found"));
    });
  });
};


function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}


let currentImage;
createImage('img-1.jpg')
  .then(function (img) {
    currentImage = img; // save for later hiding
    return wait(2000);
  })
  .then(function () {
    currentImage.style.display = 'none'; // hide first image
    return createImage('img-2.jpg'); // load second image
  })
  .then(function (img) {
    currentImage = img;
    return wait(2000);
  })
  .then(function () {
    currentImage.style.display = 'none'; // hide second image
  })
  .catch(function (err) {
    console.error(err);
  });