var currentImgIndex=1;
var ImgSrcArray = [
    'img/brimstone.png',
    'img/phoenix.png',
    'img/sage.png',
    'img/sova.png',
    'img/viper.png',
    'img/chyper.png',
    'img/reyna.png',
    'img/killjoy.png',
    'img/breach.png',
    'img/omen.png',
    'img/jett.png',
    'img/raze.png',
    'img/skye.png',
    'img/yoru.png',
    'img/astra.png',
    'img/kayo.png',
    'img/chamber.png',
    'img/neon.png',
    'img/fade.png',
    'img/harbor.png',
    'img/gekko.png'
];

function trocar() {
    if(currentImgIndex == ImgSrcArray.length){
        currentImgIndex=0;
    }
    document.getElementById('V').src=ImgSrcArray[currentImgIndex];
    currentImgIndex++;
}