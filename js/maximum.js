const canvasMax = document.getElementById("canvas-max");
const dlBtn = document.getElementById("download-btn");
const dlMaxBtn = document.getElementById("download-max-btn");
var pageTitle = window.location.href.split('/').pop();
//カードプレビューサイズ変更
let txt = "";
let slider = "";
let canvas = "";

///////画像DLスクリプト編集
const resetBtn = document.getElementsByClassName('resetbtn');
const zoomBtn = document.getElementsByClassName('zoombtn');
const shrinkBtn = document.getElementsByClassName('shrinkbtn');
const rotateRBtn = document.getElementsByClassName('rotate_rbtn');
const rotateLBtn = document.getElementsByClassName('rotate_lbtn');
const moveTopBtn = document.getElementsByClassName('move_topbtn');
const moveBtmBtn = document.getElementsByClassName('move_bottombtn');
const moveLeftBtn = document.getElementsByClassName('move_leftbtn');
const moveRightBtn = document.getElementsByClassName('move_rightbtn');

const srcMainImg = document.querySelector('input[name="src-main-img"]');
const srcMainMaxImg = document.querySelector('input[name="src-main-max-img"]');
const srcBGImg = document.querySelector('input[name="src-bg-img"]');
const srcBGMaxImg = document.querySelector('input[name="src-bg-max-img"]');

const srcLeftImg = document.querySelector('input[name="src-left-img"]');
const srcCenterImg = document.querySelector('input[name="src-center-img"]');
const srcRightImg = document.querySelector('input[name="src-right-img"]');

const mainImg = document.getElementById('main-img');
const bgImg = document.getElementById('bg-img');
const leftImg = document.getElementById('left-img');
const centerImg = document.getElementById('center-img');
const rightImg = document.getElementById('right-img');
const mainMaxImg = document.getElementById('main-max-img');
const bgMaxImg = document.getElementById('bg-max-img');

const mainFile = document.getElementById('main-file');
const bgFile = document.getElementById('bg-file');
const leftFile = document.getElementById('L-file');
const centerFile = document.getElementById('C-file');
const rightFile = document.getElementById('R-file');
const mainMaxFile = document.getElementById('main-max-file');
const bgMaxFile = document.getElementById('bg-max-file');

const trimBtn = document.getElementsByClassName('trimBtn');


const cropperSet = {
  aspectRatio: 16 / 17,
  dragMode: "none",
  viewMode: 0,
  zoomOnTouch: false,
  zoomOnWheel: false,
  toggleDragModeOnDblclick: false,
  responsive: false,
  restore:false,
  checkCrossOrigin:false,
  checkOrientation:false,
}

const cropperSetMax = {
  aspectRatio: 48 / 17,
  dragMode: "none",
  viewMode: 0,
  zoomOnTouch: false,
  zoomOnWheel: false,
  toggleDragModeOnDblclick: false,
  responsive: false,
  restore:false,
  checkCrossOrigin:false,
  checkOrientation:false,
}

// マキシマム画像トリミングここから
//[L]
document.addEventListener('DOMContentLoaded', function (){
  let cropper = null;
  srcLeftImg.addEventListener('change', function(changeFileEvent){
    if(cropper){
      cropper.destroy();
    }
    const fReaderForURI = new FileReader();
      fReaderForURI.readAsDataURL(changeFileEvent.target.files[0]);
      fReaderForURI.onload = () => {
      leftImg.src = String(fReaderForURI.result);
      cropper = new Cropper(leftImg,cropperSet);
    }
    trimBtn[0].addEventListener('click', function(){
      const croppedCanvas = cropper.getCroppedCanvas();
      leftFile.src = croppedCanvas.toDataURL()
    })
      let i = 0;
      resetBtn[i].addEventListener('click', function () {cropper.reset(0);});
      zoomBtn[i].addEventListener('click', function () {cropper.zoom(0.05);});
      shrinkBtn[i].addEventListener('click', function () {cropper.zoom(-0.05);});
      rotateRBtn[i].addEventListener('click', function () {cropper.rotate(2);});
      rotateLBtn[i].addEventListener('click', function () {cropper.rotate(-2);});
      moveTopBtn[i].addEventListener('click', function () {cropper.move(0, -2);});
      moveRightBtn[i].addEventListener('click', function () {cropper.move(2, 0);});
      moveBtmBtn[i].addEventListener('click', function () {cropper.move(0, 2);});
      moveLeftBtn[i].addEventListener('click', function () {cropper.move(-2, 0);});
  })
})

//[C]
document.addEventListener('DOMContentLoaded', function (){
  let cropper = null;
  srcCenterImg.addEventListener('change', function(changeFileEvent){
    if(cropper){
      cropper.destroy();
    }
    const fReaderForURI = new FileReader();
      fReaderForURI.readAsDataURL(changeFileEvent.target.files[0]);
      fReaderForURI.onload = () => {
      centerImg.src = String(fReaderForURI.result);
      cropper = new Cropper(centerImg,cropperSet);
    }
    trimBtn[1].addEventListener('click', function(){
      const croppedCanvas = cropper.getCroppedCanvas();
      centerFile.src = croppedCanvas.toDataURL()
    })
    let i = 1;
    resetBtn[i].addEventListener('click', function () {cropper.reset(0);});zoomBtn[i].addEventListener('click', function () {cropper.zoom(0.1);});shrinkBtn[i].addEventListener('click', function () {cropper.zoom(-0.1);});rotateRBtn[i].addEventListener('click', function () {cropper.rotate(5);});rotateLBtn[i].addEventListener('click', function () {cropper.rotate(-5);});moveTopBtn[i].addEventListener('click', function () {cropper.move(0, -5);});moveRightBtn[i].addEventListener('click', function () {cropper.move(5, 0);});moveBtmBtn[i].addEventListener('click', function () {cropper.move(0, 5);});moveLeftBtn[i].addEventListener('click', function () {cropper.move(-5, 0);});
  })
})

//[R]
document.addEventListener('DOMContentLoaded', function (){
  let cropper = null;
  srcRightImg.addEventListener('change', function(changeFileEvent){
    if(cropper){
      cropper.destroy();
    }
    const fReaderForURI = new FileReader();
      fReaderForURI.readAsDataURL(changeFileEvent.target.files[0]);
      fReaderForURI.onload = () => {
      rightImg.src = String(fReaderForURI.result);
      cropper = new Cropper(rightImg,cropperSet);
    }
    trimBtn[2].addEventListener('click', function(){
      const croppedCanvas = cropper.getCroppedCanvas();
      rightFile.src = croppedCanvas.toDataURL()
    })
    let i = 2;
    resetBtn[i].addEventListener('click', function () {cropper.reset(0);});
    zoomBtn[i].addEventListener('click', function () {cropper.zoom(0.05);});
    shrinkBtn[i].addEventListener('click', function () {cropper.zoom(-0.05);});
    rotateRBtn[i].addEventListener('click', function () {cropper.rotate(2);});
    rotateLBtn[i].addEventListener('click', function () {cropper.rotate(-2);});
    moveTopBtn[i].addEventListener('click', function () {cropper.move(0, -2);});
    moveRightBtn[i].addEventListener('click', function () {cropper.move(2, 0);});
    moveBtmBtn[i].addEventListener('click', function () {cropper.move(0, 2);});
    moveLeftBtn[i].addEventListener('click', function () {cropper.move(-2, 0);});
  })
})
// 1,440x510  48/17
// 1枚画像トリミングここから
document.addEventListener('DOMContentLoaded', function (){
  let cropper = null;
  srcMainMaxImg.addEventListener('change', function(changeFileEvent){
    /* 三枚画像アップロードの際、既に三枚画像がある場合消去 */
    rightFile.src = "";
    centerFile.src = "";
    leftFile.src = "";

    if(cropper){cropper.destroy();}
    const fReaderForURI = new FileReader();
    fReaderForURI.readAsDataURL(changeFileEvent.target.files[0]);
    fReaderForURI.onload = () => {
      mainMaxImg.src = String(fReaderForURI.result);
      cropper = new Cropper(mainMaxImg, cropperSetMax)};
    trimBtn[3].addEventListener('click', function(){
      const croppedCanvas = cropper.getCroppedCanvas();
      mainMaxFile.src = croppedCanvas.toDataURL()
    });
    let i = 3;
    resetBtn[i].addEventListener('click', function () {cropper.reset(0);});
    zoomBtn[i].addEventListener('click', function () {cropper.zoom(0.05);});
    shrinkBtn[i].addEventListener('click', function () {cropper.zoom(-0.05);});
    rotateRBtn[i].addEventListener('click', function () {cropper.rotate(2);});
    rotateLBtn[i].addEventListener('click', function () {cropper.rotate(-2);});
    moveTopBtn[i].addEventListener('click', function () {cropper.move(0, -2);});
    moveRightBtn[i].addEventListener('click', function () {cropper.move(2, 0);});
    moveBtmBtn[i].addEventListener('click', function () {cropper.move(0, 2);});
    moveLeftBtn[i].addEventListener('click', function () {cropper.move(-2, 0);});
  })
});

document.addEventListener('DOMContentLoaded', function (){
  let cropper = null;
  srcBGMaxImg.addEventListener('change', function(changeFileEvent){
    if(cropper){
      cropper.destroy();
    }
    const fReaderForURI_01 = new FileReader();
    fReaderForURI_01.readAsDataURL(changeFileEvent.target.files[0]);
    fReaderForURI_01.onload = () => {
      bgMaxImg.src = String(fReaderForURI_01.result);
      cropper = new Cropper(bgMaxImg, cropperSetMax);
    }
    trimBtn[4].addEventListener('click', function(){
      const croppedCanvas_01 = cropper.getCroppedCanvas();
      bgMaxFile.src = croppedCanvas_01.toDataURL()
    })
    let i = 4;
    resetBtn[i].addEventListener('click', function () {cropper.reset(0);});
    zoomBtn[i].addEventListener('click', function () {cropper.zoom(0.05);});
    shrinkBtn[i].addEventListener('click', function () {cropper.zoom(-0.05);});
    rotateRBtn[i].addEventListener('click', function () {cropper.rotate(2);});
    rotateLBtn[i].addEventListener('click', function () {cropper.rotate(-2);});
    moveTopBtn[i].addEventListener('click', function () {cropper.move(0, -2);});
    moveRightBtn[i].addEventListener('click', function () {cropper.move(2, 0);});
    moveBtmBtn[i].addEventListener('click', function () {cropper.move(0, 2);});
    moveLeftBtn[i].addEventListener('click', function () {cropper.move(-2, 0);});
  })
});
// 画像トリミングここまで

//画像を無地に戻す
const imgReset = document.getElementsByClassName('img_reset');
imgReset[0].addEventListener('click', function(){
  leftFile.src = "images/no_image.png";});
imgReset[1].addEventListener('click', function(){
  centerFile.src = "images/no_image.png";});
imgReset[2].addEventListener('click', function(){
  rightFile.src = "images/no_image.png";});
imgReset[3].addEventListener('click', function(){
  mainMaxFile.src = "images/no_image_max.png";});
imgReset[4].addEventListener('click', function(){
  bgMaxFile.src = "images/no_image_max.png";});

const nameForm = document.getElementsByClassName('name_form_max');
const attributeForm = document.getElementsByClassName('attribute_form_max');
const levelForm = document.getElementsByClassName('level_form_max');
const tribeForm = document.getElementsByClassName('tribe_form_max');
const atkForm = document.getElementsByClassName('atk_form_max');
const defForm = document.getElementsByClassName('def_form_max');
const textForm = document.getElementsByClassName('text_form');
const numberForm = document.getElementsByClassName('number_form_max');
const cardOutImgL = document.getElementById('card_outer_base_L');
const cardOutImgC = document.getElementById('card_outer_base_C');
const cardOutImgR = document.getElementById('card_outer_base_R');

//const nameOut = document.getElementsByClassName('name_max');
const nameOutL = document.getElementById('name-L');
const nameOutC = document.getElementById('name-C');
const nameOutR = document.getElementById('name-R');
// const levelOut = document.getElementsByClassName('level_max');
const levelStrokeOut = document.getElementsByClassName('level_stroke');
const tribeOut = document.getElementsByClassName('tribe_max');
const numberOut = document.getElementsByClassName('number_max');

// カード名入力
nameForm[0].addEventListener('keyup', function() {
  nameOutL.innerHTML = nameForm[0].value;});
nameForm[1].addEventListener('keyup', function() {
  nameOutC.innerHTML = nameForm[1].value;});
nameForm[2].addEventListener('keyup', function() {
  nameOutR.innerHTML = nameForm[2].value;});

// カード名文字数を増やす
const nameP = document.getElementsByClassName('name_p');
// カード名文字数を増やす
function name_narrow00() {
  for(i=0 ; i<3 ; i++) {
    nameP[i].classList.toggle('name_narrow00');
  }};
  function name_narrow01() {
    for(i=0 ; i<3 ; i++) {
      nameP[i].classList.toggle('name_narrow01');
    }};


// 属性入力
const attOutL = document.getElementById('attribute-L');
const attOutC = document.getElementById('attribute-C');
const attOutR = document.getElementById('attribute-R');
attributeForm[0].addEventListener('keyup', function() {
  attOutL.innerHTML = attributeForm[0].value;});
attributeForm[1].addEventListener('keyup', function() {
  attOutC.innerHTML = attributeForm[1].value;});
attributeForm[2].addEventListener('keyup', function() {
  attOutR.innerHTML = attributeForm[2].value;});

// レベル入力
const level_form = document.getElementsByClassName('level_form_max');
const levelOutL = document.getElementById('level-L');
const levelOutC = document.getElementById('level-C');
const levelOutR = document.getElementById('level-R');
levelForm[0].addEventListener('keyup', function () {
  levelOutL.innerHTML = levelForm[0].value;
  levelStrokeOut[0].innerHTML = levelForm[0].value;});
  levelForm[1].addEventListener('keyup', function () {
  levelOutC.innerHTML = levelForm[1].value;
  levelStrokeOut[1].innerHTML = levelForm[1].value;});
  levelForm[2].addEventListener('keyup', function () {
  levelOutR.innerHTML = levelForm[2].value;
  levelStrokeOut[2].innerHTML = levelForm[2].value;});

// 種族入力
const tribe_outputL = document.getElementById('tribe-L');
const tribe_outputC= document.getElementById('tribe-C');
const tribe_outputR = document.getElementById('tribe-R');
tribeForm[0].addEventListener('keyup', function () {
  tribe_outputL.innerHTML = tribeForm[0].value;});
tribeForm[1].addEventListener('keyup', function () {
  tribe_outputC.innerHTML = tribeForm[1].value;});
tribeForm[2].addEventListener('keyup', function () {
  tribe_outputR.innerHTML = tribeForm[2].value;});

// MAXIMUM攻撃入力
const atkFormMax = document.getElementById('atk-maximum');
const atkOutMax = document.getElementById('max_p');
const maxStroke = document.getElementsByClassName('max_stroke');
atkFormMax.addEventListener('keyup', function () {
  atkOutMax.innerHTML = atkFormMax.value;
  maxStroke[0].innerHTML = atkFormMax.value;});

// 攻撃入力
const atkOutL = document.getElementById('atk_p-L');
const atkOutC= document.getElementById('atk_p-C');
const atkOutR = document.getElementById('atk_p-R');
const atkOut = document.getElementsByClassName('atk_stroke');
atkForm[0].addEventListener('keyup', function () {
  atkOutL.innerHTML = atkForm[0].value;
  atkOut[0].innerHTML = atkForm[0].value;});
atkForm[1].addEventListener('keyup', function () {
  atkOutC.innerHTML = atkForm[1].value;
  atkOut[1].innerHTML = atkForm[1].value;});
atkForm[2].addEventListener('keyup', function () {
  atkOutR.innerHTML = atkForm[2].value;
  atkOut[2].innerHTML = atkForm[2].value;});

// 守備入力
const defOutL = document.getElementById('def_p-L');
const defOutC= document.getElementById('def_p-C');
const defOutR = document.getElementById('def_p-R');
const defOut = document.getElementsByClassName('def_stroke');
defForm[0].addEventListener('keyup', function () {
  defOutL.innerHTML = defForm[0].value;
  defOut[0].innerHTML = defForm[0].value;});
defForm[1].addEventListener('keyup', function () {
  defOutC.innerHTML = defForm[1].value;
  defOut[1].innerHTML = defForm[1].value;});
defForm[2].addEventListener('keyup', function () {
  defOutR.innerHTML = defForm[2].value;
  defOut[2].innerHTML = defForm[2].value;});

// テキスト入力
const text = document.getElementsByClassName('text');
textForm[0].addEventListener('keyup', function () {
  text[0].innerHTML = textForm[0].value;});
  textForm[1].addEventListener('keyup', function () {
  text[1].innerHTML = textForm[1].value;});
  textForm[2].addEventListener('keyup', function () {
  text[2].innerHTML = textForm[2].value;});


// テキスト文字数を増やす
function word_count() {
  for(i=0; i<3; i++) {
    text[i].classList.toggle('word_count')
  }};

// カードNo入力
const number_form = document.getElementsByClassName('number_form');
const number_output = document.getElementsByClassName('card_number_p1');
number_form[0].addEventListener('keyup', function () {
  number_output[0].innerHTML = number_form[0].value;});
number_form[1].addEventListener('keyup', function () {
  number_output[1].innerHTML = number_form[1].value;});
number_form[2].addEventListener('keyup', function () {
  number_output[2].innerHTML = number_form[2].value;});

// オーバーラッシュレア レイヤー調整
function orr_btn() {
  mainMaxFile.classList.toggle('z_02'); 
  cardOutImgL.classList.toggle('card_outer_orr');
  cardOutImgC.classList.toggle('card_outer_orr');
  cardOutImgR.classList.toggle('card_outer_orr');
};
// 'use strict'
//カード枠変更script
const cardInnerL = document.getElementById('card_inner-L');
const cardInnerC = document.getElementById('card_inner-C');
const cardInnerR = document.getElementById('card_inner-R');
const cardInnerArr = [cardInnerL,cardInnerC,cardInnerR];

const cardNameL = document.getElementById('card_name-L');
const cardNameC = document.getElementById('card_name-C');
const cardNameR = document.getElementById('card_name-R');
const cardNameArr = [cardNameL,cardNameC,cardNameR];

const cardAttL = document.getElementById('card_attribute-L');
const cardAttC = document.getElementById('card_attribute-C');
const cardAttR = document.getElementById('card_attribute-R');
const cardAttArr = [cardAttL,cardAttC,cardAttR];

const cardTextL = document.getElementById('card_text-L');
const cardTextC = document.getElementById('card_text-C');
const cardTextR = document.getElementById('card_text-R');
const cardTextArr = [cardTextL,cardTextC,cardTextR];

const cardUoL = document.getElementById('unofficial-L');
const cardUoC = document.getElementById('unofficial-C');
const cardUoR = document.getElementById('unofficial-R');
const cardUoArr = [cardUoL,cardUoC,cardUoR];

const customColor = document.getElementById('custom_color_picker');
const cardOutImg = document.getElementById('card_outer_images');
const textInImg = document.getElementById('text_inner_images');

function cardOuterDel(){
  customColor.classList.add('hidden');
  for(let i = 0; i < cardInnerArr.length; i++){
    cardInnerArr[i].classList.remove(...cardInnerArr[i].classList);
    cardInnerArr[i].style.border = null;
    cardNameArr[i].classList.remove(...cardNameArr[i].classList);
    cardNameArr[i].style.backgroundColor = null;
    cardAttArr[i].classList.remove(...cardAttArr[i].classList);
    cardAttArr[i].style.border = null;
    cardTextArr[i].classList.remove(...cardTextArr[i].classList);
    cardTextArr[i].style.backgroundColor = null;
    cardUoArr[i].classList.remove(...cardUoArr[i].classList);
    cardUoArr[i].style.border = null;
  }};

const dardColorArr = ["_inner","_bg","_attribute","_bg","_unofficial"];
  
// 効果モンスター カード枠
function effect_color_btn() {
  cardOuterDel();
  for(let i = 0; i < cardInnerArr.length; i++){
    cardInnerArr[i].classList.add('effect_inner');
    cardNameArr[i].classList.add('effect_bg');
    cardAttArr[i].classList.add('effect_attribute');
    cardTextArr[i].classList.add('effect_bg');
    cardUoArr[i].classList.add('effect_unofficial');
  }};

// カスタムカード枠
function custom_color_btn() {
  cardOuterDel();
  customColor.classList.remove('hidden'); //カラーピッカーを表示
  for(let i = 0; i < cardInnerArr.length; i++){
    cardInnerArr[i].classList.add('custom_inner');
    cardNameArr[i].classList.add('custom_bg');
    cardAttArr[i].classList.add('custom_attribute');
    cardTextArr[i].classList.add('custom_bg');
    cardUoArr[i].classList.add('custom_unofficial');
  }};

/*custom_color_pickerは customColorで宣言済
カラーピッカーを押してから各documentを取得しないといけない*/
customColor.addEventListener('input', function(elm) {
  const customInner = document.getElementsByClassName('custom_inner');
  const customAtt = document.getElementsByClassName('custom_attribute');
  const customUO = document.getElementsByClassName('custom_unofficial');
  const customBg = document.getElementsByClassName('custom_bg');
  for(let i = 0; i < customInner.length; i++){
    customInner[i].style.borderColor = elm.target.value;
    customAtt[i].style.borderColor = elm.target.value;
    customAtt[i].style.borderLeft = ('25px solid transparent');
    customUO[i].style.borderColor = elm.target.value;
    customUO[i].style.borderLeft = ('15px solid transparent');
    customUO[i].style.borderRight = ('15px solid transparent');
  }
  for(let i = 0; i < customBg.length; i++) {
      customBg[i].style.backgroundColor = elm.target.value;}
});

// カード属性
const AttOuterL = document.getElementById('attribute_outer-L');
const AttOuterC = document.getElementById('attribute_outer-C');
const AttOuterR = document.getElementById('attribute_outer-R');

const darkBtn = document.getElementsByClassName("dark_btn");
const lightBtn = document.getElementsByClassName("light_btn");
const earthBtn = document.getElementsByClassName("earth_btn");
const waterBtn = document.getElementsByClassName("water_btn");
const fireBtn = document.getElementsByClassName("fire_btn");
const windBtn = document.getElementsByClassName("wind_btn");

darkBtn[0].addEventListener("click",function(){
  AttOuterL.setAttribute('class', '');AttOuterL.classList.add('dark');attOutL.innerHTML="闇";})
darkBtn[1].addEventListener("click",function(){
  AttOuterC.setAttribute('class', '');AttOuterC.classList.add('dark');attOutC.innerHTML="闇";})
darkBtn[2].addEventListener("click",function(){
  AttOuterR.setAttribute('class', '');AttOuterR.classList.add('dark');attOutR.innerHTML="闇"})

lightBtn[0].addEventListener("click",function(){
  AttOuterL.setAttribute('class', '');AttOuterL.classList.add('light');attOutL.innerHTML="光";})
lightBtn[1].addEventListener("click",function(){
  AttOuterC.setAttribute('class', '');AttOuterC.classList.add('light');attOutC.innerHTML="光";})
lightBtn[2].addEventListener("click",function(){
  AttOuterR.setAttribute('class', '');AttOuterR.classList.add('light')
  attOutR.innerHTML="光";})

earthBtn[0].addEventListener("click",function(){
  AttOuterL.setAttribute('class', '');AttOuterL.classList.add('earth');attOutL.innerHTML="地";})
earthBtn[1].addEventListener("click",function(){
  AttOuterC.setAttribute('class', '');AttOuterC.classList.add('earth');attOutC.innerHTML="地";})
earthBtn[2].addEventListener("click",function(){
  AttOuterR.setAttribute('class', '');AttOuterR.classList.add('earth');
  attOutR.innerHTML="地";})

waterBtn[0].addEventListener("click",function(){
  AttOuterL.setAttribute('class', '');AttOuterL.classList.add('water');attOutL.innerHTML="水";})
waterBtn[1].addEventListener("click",function(){
  AttOuterC.setAttribute('class', '');AttOuterC.classList.add('water');attOutC.innerHTML="水";})
waterBtn[2].addEventListener("click",function(){
  AttOuterR.setAttribute('class', '');AttOuterR.classList.add('water');attOutR.innerHTML="水";})

fireBtn[0].addEventListener("click",function(){
  AttOuterL.setAttribute('class', '');AttOuterL.classList.add('fire');attOutL.innerHTML="炎";})
fireBtn[1].addEventListener("click",function(){
  AttOuterC.setAttribute('class', '');AttOuterC.classList.add('fire');attOutC.innerHTML="炎";})
fireBtn[2].addEventListener("click",function(){
  AttOuterR.setAttribute('class', '');AttOuterR.classList.add('fire');attOutR.innerHTML="炎";})

windBtn[0].addEventListener("click",function(){
  AttOuterL.setAttribute('class', '');AttOuterL.classList.add('wind');attOutL.innerHTML="風";
})
windBtn[1].addEventListener("click",function(){
  AttOuterC.setAttribute('class', '');AttOuterC.classList.add('wind');attOutC.innerHTML="風";})
windBtn[2].addEventListener("click",function(){
  AttOuterR.setAttribute('class', '');AttOuterR.classList.add('wind');attOutR.innerHTML="風";})

// //////////カード加工
// カスタムカード枠
const processLayer = document.getElementById('processing_layer_max')
function p_none_btn() {
  processLayer.classList.remove('foil_max','parallel_max','secret_max');
  processLayer.classList.add('no_image_max');
}
function p_foil_btn() {
  processLayer.classList.remove('no_image_max','parallel_max','secret_max');
  processLayer.classList.add('foil_max');
}
function p_parallel_btn() {
  processLayer.classList.remove('no_image_max','foil_max','secret_max');
  processLayer.classList.add('parallel_max');
}
function p_secret_btn() {
  processLayer.classList.remove('no_image_max','parallel_max','foil_max');
  processLayer.classList.add('secret_max');
}

//カード加工 opacity
//カードプレビューサイズ変更
let txtOp = "";
let sliderOp = "";

// ロードが間に合わないので1秒遅延※環境によっては不要
setTimeout(() => {
  // HTMLの要素を取得
  txtOp = document.getElementById("txt_op");
  sliderOp = document.getElementById("slider_op");

  //イベントリスナーの設定
  sliderOp.addEventListener("input", reOpacity);
}, 1000);

//「アクション」の設定
const reOpacity = (el) => {
  // テキストを更新
  txtOp.innerHTML = el.target.value;
  // 画像のサイズを変更
  processLayer.classList.remove("opacity-01","opacity-02","opacity-03");
  processLayer.classList.add('opacity-0' + el.target.value);
};


// モンスター名レアリティ
const monNoneBtn = document.getElementsByClassName("m_none_btn");
const monSilverBtn = document.getElementsByClassName("m_silver_btn"); 
const monGoldBtn = document.getElementsByClassName("m_gold_btn"); 
const monRedBtn = document.getElementsByClassName("m_red_btn"); 


monNoneBtn[0].addEventListener("click",function(){
  nameOutL.classList.remove(...nameOutL.classList);})
monNoneBtn[1].addEventListener("click",function(){
  nameOutC.classList.remove(...nameOutC.classList);})
monNoneBtn[2].addEventListener("click",function(){
  nameOutR.classList.remove(...nameOutR.classList);})

monSilverBtn[0].addEventListener("click",function(){
  nameOutL.classList.remove(...nameOutL.classList);
  nameOutL.classList.add('silver')})
monSilverBtn[1].addEventListener("click",function(){
  nameOutC.classList.remove(...nameOutC.classList);
  nameOutC.classList.add('silver')})
monSilverBtn[2].addEventListener("click",function(){
  nameOutR.classList.remove(...nameOutR.classList);
  nameOutR.classList.add('silver')})

monGoldBtn[0].addEventListener("click",function(){
  nameOutL.classList.remove(...nameOutL.classList);
  nameOutL.classList.add('gold')})
monGoldBtn[1].addEventListener("click",function(){
  nameOutC.classList.remove(...nameOutC.classList);
  nameOutC.classList.add('gold')})
monGoldBtn[2].addEventListener("click",function(){
  nameOutR.classList.remove(...nameOutR.classList);
  nameOutR.classList.add('gold')})

monRedBtn[0].addEventListener("click",function(){
  nameOutL.classList.remove(...nameOutL.classList);
  nameOutL.classList.add('red')})
monRedBtn[1].addEventListener("click",function(){
  nameOutC.classList.remove(...nameOutC.classList);
  nameOutC.classList.add('red')})
monRedBtn[2].addEventListener("click",function(){
  nameOutR.classList.remove(...nameOutR.classList);
  nameOutR.classList.add('red')})

// 属性名レアリティ
const aNoneBtn = document.getElementsByClassName("a_none_btn");
const aSilverBtn = document.getElementsByClassName("a_silver_btn"); 
const aGoldBtn = document.getElementsByClassName("a_gold_btn"); 
const aRedBtn = document.getElementsByClassName("a_red_btn"); 

aNoneBtn[0].addEventListener("click",function(){
  attOutL.classList.remove(...attOutL.classList);
  attOutL.classList.add('white_op');})
aNoneBtn[1].addEventListener("click",function(){
  attOutC.classList.remove(...attOutC.classList);
  attOutC.classList.add('white_op');})
  aNoneBtn[2].addEventListener("click",function(){
  attOutR.classList.remove(...attOutR.classList);
  attOutR.classList.add('white_op');})

aSilverBtn[0].addEventListener("click",function(){
  attOutL.classList.remove(...attOutL.classList);
  attOutL.classList.add('silver')})
aSilverBtn[1].addEventListener("click",function(){
  attOutC.classList.remove(...attOutC.classList);
  attOutC.classList.add('silver')})
aSilverBtn[2].addEventListener("click",function(){
  attOutR.classList.remove(...attOutR.classList);
  attOutR.classList.add('silver')})

aGoldBtn[0].addEventListener("click",function(){
  attOutL.classList.remove(...attOutL.classList);
  attOutL.classList.add('gold')})
aGoldBtn[1].addEventListener("click",function(){
  attOutC.classList.remove(...attOutC.classList);
  attOutC.classList.add('gold')})
aGoldBtn[2].addEventListener("click",function(){
  attOutR.classList.remove(...attOutR.classList);
  attOutR.classList.add('gold')})

aRedBtn[0].addEventListener("click",function(){
  attOutL.classList.remove(...attOutL.classList);
  attOutL.classList.add('red')})
aRedBtn[1].addEventListener("click",function(){
  attOutC.classList.remove(...attOutC.classList);
  attOutC.classList.add('red')})
aRedBtn[2].addEventListener("click",function(){
  attOutR.classList.remove(...attOutR.classList);
  attOutR.classList.add('red')})

// ステータスレアリティ
const atkArr =[atkOutL,atkOutC,atkOutR] ;
const defArr =[defOutL,defOutC,defOutR];
const levelArr = [levelOutL,levelOutC,levelOutR];
const statusArr = [atkArr , defArr , levelArr];

const sNoneBtn = document.getElementsByClassName("s_none_btn");
const sSilverBtn = document.getElementsByClassName("s_silver_btn");
const sGoldBtn = document.getElementsByClassName("s_gold_btn");
const sRedBtn = document.getElementsByClassName("s_red_btn");

sNoneBtn[0].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][0].classList.remove(...statusArr[i][0].classList);
    statusArr[i][0].classList.add('white');
  }})
sNoneBtn[1].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][1].classList.remove(...statusArr[i][1].classList);
    statusArr[i][1].classList.add('white');
  }
  atkOutMax.classList.remove(...atkOutMax.classList);
  atkOutMax.classList.add('white');
})
sNoneBtn[2].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][2].classList.remove(...statusArr[i][2].classList);
    statusArr[i][2].classList.add('white');
  }})

sSilverBtn[0].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][0].classList.remove(...statusArr[i][0].classList);
    statusArr[i][0].classList.add('silver');
  }})
sSilverBtn[1].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][1].classList.remove(...statusArr[i][1].classList);
    statusArr[i][1].classList.add('silver');
  }
  atkOutMax.classList.remove(...atkOutMax.classList);
  atkOutMax.classList.add('silver');})

sSilverBtn[2].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][2].classList.remove(...statusArr[i][2].classList);
    statusArr[i][2].classList.add('silver');
  }})

sGoldBtn[0].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][0].classList.remove(...statusArr[i][0].classList);
    statusArr[i][0].classList.add('gold');
  }})
sGoldBtn[1].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][1].classList.remove(...statusArr[i][1].classList);
    statusArr[i][1].classList.add('gold');
  }
  atkOutMax.classList.remove(...atkOutMax.classList);
  atkOutMax.classList.add('gold');
})
sGoldBtn[2].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][2].classList.remove(...statusArr[i][2].classList);
    statusArr[i][2].classList.add('gold');
  }})

sRedBtn[0].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][0].classList.remove(...statusArr[i][0].classList);
    statusArr[i][0].classList.add('red');
  }})
sRedBtn[1].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][1].classList.remove(...statusArr[i][1].classList);
    statusArr[i][1].classList.add('red');
  }
  atkOutMax.classList.remove(atkOutMax.classList);
  atkOutMax.classList.add('red');
})
sRedBtn[2].addEventListener("click",function(){
  for(let i = 0; i < statusArr.length; i++){
    statusArr[i][2].classList.remove(...statusArr[i][2].classList);
    statusArr[i][2].classList.add('red');
  }})

//canvasダウンロード
dlMaxBtn.addEventListener("click",() => {
  canvasMax.setAttribute('class', '');
  canvasMax.classList.add('scale-05');
  slider.value = "5";
  txt.textContent = "5";
html2canvas(canvasMax).then(canvas => { 
      let downloadEle = document.createElement("a");
      downloadEle.href = canvas.toDataURL("image/png");
      downloadEle.download = "YGORD-likeCard.png";
      downloadEle.click();
  })
})

// ロードが間に合わないので1秒遅延※環境によっては不要
setTimeout(() => {
  // HTMLの要素を取得
  txt = document.getElementById("txt");
  slider = document.getElementById("slider");

  //イベントリスナーの設定
  slider.addEventListener("input", reSize);
}, 2000);

//「アクション」の設定
const reSize = (e) => {
  // テキストを更新
  txt.innerHTML = e.target.value;
  // 画像のサイズを変更
  canvasMax.setAttribute('class', '');
  canvasMax.classList.add('scale-0' + e.target.value);
  // canvas.style.width = e.target.value + "%";
};