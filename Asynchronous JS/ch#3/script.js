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

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout ((resolve), seconds *1000);
    })
}


const loadNPass = async function () {
    try{
        // Load img 1
        let img = await createImage('img-1.jpg');
        console.log('img 1 loaded')
        await wait(2);
        img.style.display = 'none';

        // Load img 2
         img = await createImage('img-2.jpg');
        console.log('img 2 loaded')
        await wait(2);
        img.style.display = 'none'

    }catch(err){
        console.log(err)
    }
    
}
// loadNPass();


const loadAll = async function(imgArr) {
    try{
        const imgs = imgArr.map(async img => await createImage(img))

        const imgEl = await Promise.all(imgs);
        console.log(imgEl);

        imgEl.forEach(img=> img.classList.add('parallel'))
    }catch(err){
        console.log(err)
    }
    
}
loadAll(['img-1.jpg', 'img-2.jpg', 'img-3.jpg'])