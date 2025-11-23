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
const srcBgImg = document.querySelector('input[name="src-bg-img"]');

const mainImg = document.getElementById('main-img');
const bgImg = document.getElementById('bg-img');

const mainFile = document.getElementById('main-file');
const bgFile = document.getElementById('bg-file');

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

// 画像トリミングここから
document.addEventListener('DOMContentLoaded', function (){
  let cropper = null;
  srcMainImg.addEventListener('change', function(changeFileEvent){
    if(cropper){cropper.destroy();}
    const fReaderForURI = new FileReader();
    fReaderForURI.readAsDataURL(changeFileEvent.target.files[0]);
    fReaderForURI.onload = () => {
      mainImg.src = String(fReaderForURI.result);
      cropper = new Cropper(mainImg, cropperSet)};
    trimBtn[0].addEventListener('click', function(){
      const croppedCanvas = cropper.getCroppedCanvas();
      mainFile.src = croppedCanvas.toDataURL()
    });
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
});

document.addEventListener('DOMContentLoaded', function (){
  let cropper_01 = null;
  srcBgImg.addEventListener('change', function(changeFileEvent){
    if(cropper_01){
      cropper_01.destroy();
    }
    const fReaderForURI_01 = new FileReader();
    fReaderForURI_01.readAsDataURL(changeFileEvent.target.files[0]);
    fReaderForURI_01.onload = () => {
      bgImg.src = String(fReaderForURI_01.result);
      cropper_01 = new Cropper(bgImg,cropperSet);
    }
    trimBtn[1].addEventListener('click', function(){
      const croppedCanvas_01 = cropper_01.getCroppedCanvas();
      bgFile.src = croppedCanvas_01.toDataURL()
    })
    let i = 1;
    resetBtn[i].addEventListener('click', function () {cropper_01.reset(0);});
    zoomBtn[i].addEventListener('click', function () {cropper_01.zoom(0.05);});
    shrinkBtn[i].addEventListener('click', function () {cropper_01.zoom(-0.05);});
    rotateRBtn[i].addEventListener('click', function () {cropper_01.rotate(2);});
    rotateLBtn[i].addEventListener('click', function () {cropper_01.rotate(-2);});
    moveTopBtn[i].addEventListener('click', function () {cropper_01.move(0, -2);});
    moveRightBtn[i].addEventListener('click', function () {cropper_01.move(2, 0);});
    moveBtmBtn[i].addEventListener('click', function () {cropper_01.move(0, 2);});
    moveLeftBtn[i].addEventListener('click', function () {cropper_01.move(-2, 0);});
  })
});
// 画像トリミングここまで

//画像を無地に戻す
const imgReset = document.getElementsByClassName('img_reset');
imgReset[0].addEventListener('click', function(){
mainFile.src = "images/no_image.png";});
imgReset[1].addEventListener('click', function(){
bgFile.src = "images/no_image.png";});

// カード名入力
const name_form = document.getElementById('name_form');
const name_output = document.getElementById('name');
name_form.addEventListener('keyup', function () {
  name_output.innerHTML = name_form.value;
});

const nameP = document.getElementById('name_p');
// カード名文字数を増やす
function name_narrow00() {
  nameP.classList.toggle('name_narrow00');
};
function name_narrow01() {
  nameP.classList.toggle('name_narrow01');
};


// 属性入力
const attribute = document.getElementById('attribute');
const attribute_form = document.getElementsByClassName('attribute_form');
attribute_form[0].addEventListener('keyup', function () {
  attribute.innerHTML = attribute_form[0].value;
});

// レベル入力
const level_form = document.getElementsByClassName('level_form');
const level_output = document.getElementsByClassName('level_stroke');
level_form[0].addEventListener('keyup', function () {
  s_level.innerHTML = level_form[0].value;
  level_output[0].innerHTML = level_form[0].value;
});

// 種族入力
const tribe_form = document.getElementsByClassName('tribe_form');
const tribe_output = document.getElementById('tribe');
tribe_form[0].addEventListener('keyup', function () {
  tribe_output.innerHTML = tribe_form[0].value;
});

// 攻撃入力
const atk_form = document.getElementsByClassName('atk_form');
const atk_output = document.getElementsByClassName('atk_stroke');
atk_form[0].addEventListener('keyup', function () {
  s_atk.innerHTML = atk_form[0].value;
  atk_output[0].innerHTML = atk_form[0].value;
});

// 守備入力
const def_form = document.getElementsByClassName('def_form');
const def_output = document.getElementsByClassName('def_stroke');
def_form[0].addEventListener('keyup', function () {
s_def.innerHTML = def_form[0].value;
def_output[0].innerHTML = def_form[0].value;
});

// テキスト入力
const text_form = document.getElementsByClassName('text_form');
const text = document.getElementsByClassName('text');
text_form[0].addEventListener('keyup', function () {
text[0].innerHTML = text_form[0].value;
});
// テキスト文字数を増やす
function word_count() {
  text[0].classList.toggle('word_count')
};

// カードNo入力
const number_form = document.getElementsByClassName('number_form');
const number_output = document.getElementsByClassName('card_number_p1');
number_form[0].addEventListener('keyup', function () {
number_output[0].innerHTML = number_form[0].value;
});

// オーバーラッシュレア レイヤー調整
function orr_btn() {
  mainFile.classList.toggle('z_02');
  cardOutImg.classList.toggle('card_outer_orr');
};

////////スキルカード時に、ステータスを自動で解除したい
function monster_status_btn() {
  const status_wrapper = document.getElementById('status_wrapper');
  status_wrapper.classList.toggle('hidden');  
};

const monster_status_check = document.querySelector("#monster_status");
function monster_status_none(){
if(monster_status_check.checked == false){
  monster_status_check.checked = true;
  if(monster_status_check.checked == true){
    monster_status_btn();
  }}};

function monster_status_on(){
  if(monster_status_check.checked == true){
    monster_status_check.checked = false;
    if(monster_status_check.checked == false){
      monster_status_btn();
    }}};

'use strict'
//カード枠変更script
const cardInner = document.getElementById('card_inner');
const cardName = document.getElementById('card_name');
const cardAtt = document.getElementById('card_attribute');
const cardText = document.getElementById('card_text');
const unofficial = document.getElementById('unofficial');
const customColor = document.getElementById('custom_color_picker');
const skillColor = document.getElementById('skill_color_picker');
const cardOutImg = document.getElementById('card_outer_base');
const textInImg = document.getElementById('text_inner_images');

function cardOuterDel(){
  customColor.classList.add('hidden');
  skillColor.classList.add('hidden');
  cardInner.style.border = null;
  cardInner.classList.remove(...cardInner.classList);
  cardName.style.backgroundColor = null;
  cardName.classList.remove(...cardName.classList);
  cardAtt.style.border = null;
  cardAtt.classList.remove(...cardAtt.classList);
  cardText.style.backgroundColor = null;
  cardText.classList.remove(...cardText.classList);
  unofficial.style.border = null;
  unofficial.classList.remove(...unofficial.classList);
};

function cardOuterChange() {
  if(cardOutImg.classList !== "card_outer_img"){
    cardOutImg.classList.remove('skillcard_outer_img');
    cardOutImg.classList.add('card_outer_img');
  }
  if(textInImg.classList !== "text_inner"){
    textInImg.classList.remove('skill_text_inner')
    textInImg.classList.add('text_inner')}
};
const dardColorArr = ["_inner","_bg","_attribute","_bg","_unofficial"];

  // 通常モンスター カード枠
  function vanilla_color_btn() {
    cardOuterDel();
    cardInner.classList.add('vanilla_inner');
    cardName.classList.add('vanilla_bg');
    cardAtt.classList.add('vanilla_attribute');
    cardText.classList.add('vanilla_bg');
    unofficial.classList.add('vanilla_unofficial');
    monster_status_on();
    cardOuterChange();
  };

// 効果モンスター カード枠
function effect_color_btn() {
  cardOuterDel();
  cardInner.classList.add('effect_inner');
  cardName.classList.add('effect_bg');
  cardAtt.classList.add('effect_attribute');
  cardText.classList.add('effect_bg');
  unofficial.classList.add('effect_unofficial');
  monster_status_on();
  cardOuterChange();
};
// フュージョン カード枠
function fusion_color_btn() {
  cardOuterDel();
  cardInner.classList.add('fusion_inner');
  cardName.classList.add('fusion_bg');
  cardAtt.classList.add('fusion_attribute');
  cardText.classList.add('fusion_bg');
  unofficial.classList.add('fusion_unofficial');
  monster_status_on();
  cardOuterChange();
};
// リチュアル カード枠
function ritual_color_btn() {
  cardOuterDel();
  cardInner.classList.add('ritual_inner');
  cardName.classList.add('ritual_bg');
  cardAtt.classList.add('ritual_attribute');
  cardText.classList.add('ritual_bg');
  unofficial.classList.add('ritual_unofficial');
  monster_status_on();
  cardOuterChange();
};
// 魔法カード枠
function magic_color_btn(){
  cardOuterDel();
  cardInner.classList.add('magic_inner');
  cardName.classList.add('magic_bg');
  cardAtt.classList.add('magic_attribute');
  cardText.classList.add('magic_bg');
  unofficial.classList.add('magic_unofficial');
   monster_status_none();
   cardOuterChange();
};
// 罠カード枠
function trap_color_btn() {
  cardOuterDel();
  cardInner.classList.add('trap_inner');
  cardName.classList.add('trap_bg');
  cardAtt.classList.add('trap_attribute');
  cardText.classList.add('trap_bg');
  unofficial.classList.add('trap_unofficial');
  monster_status_none();
  cardOuterChange();
};

// カスタムカード枠
function custom_color_btn() {
  cardOuterDel();
  customColor.classList.remove('hidden'); //カラーピッカーを表示
  cardInner.classList.add('custom_inner');
  cardName.classList.add('custom_bg');
  cardAtt.classList.add('custom_attribute');
  cardText.classList.add('custom_bg');
  unofficial.classList.add('custom_unofficial');
  monster_status_on();
  cardOuterChange();
};

/*custom_color_pickerは customColorで宣言済
カラーピッカーを押してから各documentを取得しないといけない*/
customColor.addEventListener('input', function(elm) {
const customInner = document.querySelector('.custom_inner');
customInner.style.borderColor = elm.target.value;
const customAtt = document.querySelector('.custom_attribute');
customAtt.style.borderColor = elm.target.value;
customAtt.style.borderLeft = ('25px solid transparent');
const customUO = document.querySelector('.custom_unofficial');
customUO.style.borderColor = elm.target.value;
customUO.style.borderLeft = ('15px solid transparent');
customUO.style.borderRight = ('15px solid transparent');

const customBg = document.getElementsByClassName('custom_bg');
for(let i = 0; i < customBg.length; i++) {
  customBg[i].style.backgroundColor = elm.target.value;}
});

// スキルカード枠
function skill_color_btn() {
  cardOuterDel();
  skillColor.classList.remove('hidden');  //カラーピッカーを表示
  cardInner.classList.add('skill_inner');
  cardName.classList.add('skill_bg');
  cardAtt.classList.add('skill_attribute');
  cardText.classList.add('skill_bg');
  unofficial.classList.add('skill_unofficial');
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('skill');
  attribute.innerText = "";
  attribute_form.value = "";
  bgFile.src = "images/skillcard_background.png";
  monster_status_none();
  if(cardOutImg.classList !== "skillcard_outer_img"){
    cardOutImg.classList.remove('card_outer_img');
    cardOutImg.classList.add('skillcard_outer_img');
  }
  if(textInImg.classList !== "skill_text_inner"){
    textInImg.classList.remove('text_inner')
    textInImg.classList.add('skill_text_inner')}
}
/*skill_color_pickerは skillColorで宣言済
カラーピッカーを押してから各documentを取得しないといけない*/
skillColor.addEventListener('input', function(elm) {
  const skillInner = document.querySelector('.skill_inner');
  skillInner.style.borderColor = elm.target.value;
  const skillAtt = document.querySelector('.skill_attribute');
  skillAtt.style.borderColor = elm.target.value;
  skillAtt.style.borderLeft = ('25px solid transparent');
  const skillUO = document.querySelector('.skill_unofficial');
  skillUO.style.borderColor = elm.target.value;
  skillUO.style.borderLeft = ('15px solid transparent');
  skillUO.style.borderRight = ('15px solid transparent');
  const skillBg = document.querySelectorAll('.skill_bg');
  skillBg.forEach(element => {
    element.style.backgroundColor = elm.target.value;
  })
  })


// カード属性
const AttOuter = document.getElementById('attribute_outer');
function dark_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('dark');
  attribute.textContent = "闇";
 }
function light_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('light');
  attribute.textContent = "光";
 }
function earth_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('earth');
  attribute.textContent = "地";
}
function water_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('water');
  attribute.textContent = "水";
}
function fire_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('fire');
  attribute.innerHTML = "炎";
}
function wind_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('wind');
  attribute.innerHTML = "風";
}
function magic_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('magic');
  attribute.innerHTML = "魔";
}
function trap_btn(){
  AttOuter.setAttribute('class', '');
  AttOuter.classList.add('trap');
  attribute.innerHTML = "罠";
}

// //////////カード加工
// カスタムカード枠
const processLayer = document.getElementById('processing_layer')
function p_none_btn() {
  processLayer.classList.remove('foil','parallel','secret');
  processLayer.classList.add('no_image');
}
function p_foil_btn() {
  processLayer.classList.remove('no_image','parallel','secret');
  processLayer.classList.add('foil');
}
function p_parallel_btn() {
  processLayer.classList.remove('no_image','foil','secret');
  processLayer.classList.add('parallel');
}
function p_secret_btn() {
  processLayer.classList.remove('no_image','parallel','foil');
  processLayer.classList.add('secret');
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

//魔法アイコン
const spell = document.querySelector('#spell');
function s_nomal_btn() {
  const tribe_spell = tribe_output.textContent;
  tribe_output.innerHTML = tribe_spell + `<div id="spell" class="nomal"></div>`;
}
function s_field_btn() {
  const tribe_spell = tribe_output.textContent;
  tribe_output.innerHTML = tribe_spell + `<div id="spell" class="field-spell"></div>`;
}
function s_equip_btn() {
  const tribe_spell = tribe_output.textContent;
  tribe_output.innerHTML = tribe_spell + `<div id="spell" class="equip-spell"></div>`;
}
function s_ritual_btn() {
  const tribe_spell = tribe_output.textContent;
  tribe_output.innerHTML = tribe_spell + `<div id="spell" class="ritual-spell"></div>`;
}

// レジェンド
const legend = document.getElementById('legend');
function l_none_btn() {
  legend.setAttribute('class', '');
}
function l_red_btn() {
  legend.setAttribute('class', '');
  legend.classList.add('legend_r');
}
function l_gold_btn() {
  legend.setAttribute('class', '');
  legend.classList.add('legend_g');
}
function l_silver_btn() {
  legend.setAttribute('class', '');
  legend.classList.add('legend_s');
}
// モンスター名レアリティ
const nameRarity = document.getElementById('name');
function m_none_btn() {
  nameRarity.classList.remove(...nameRarity.classList);
}
function m_red_btn() {
  nameRarity.classList.remove(...nameRarity.classList);
  nameRarity.classList.add('red');
}
function m_gold_btn() {
  nameRarity.classList.remove(...nameRarity.classList);
  nameRarity.classList.add('gold');
}
function m_silver_btn() {
  nameRarity.classList.remove(...nameRarity.classList);
  nameRarity.classList.add('silver');
}
// 属性名レアリティ
function a_none_btn() {
  attribute.setAttribute('class', '');
  attribute.classList.add('white_op');
}
function a_red_btn() {
  attribute.setAttribute('class', '');
  attribute.classList.add('red');
}
function a_gold_btn() {
  attribute.setAttribute('class', '');
  attribute.classList.add('gold');
}
function a_silver_btn() {
  attribute.setAttribute('class', '');
  attribute.classList.add('silver');
}
// ステータスレアリティ
const s_atk = document.getElementById('atk_p');
const s_def = document.getElementById('def_p');
const s_level = document.getElementById('level');
const Arr = [s_atk , s_def , s_level];

function s_none_btn() {
for(i = 0; i < 3; i++){
  Arr[i].classList.remove(...Arr[i].classList);
  Arr[i].classList.add('white');
}}
function s_red_btn() {
  for(i = 0; i < 3; i++){
    Arr[i].classList.remove(...Arr[i].classList);
    Arr[i].classList.add('red');
}}

function s_gold_btn() {
  for(i = 0; i < 3; i++){
    Arr[i].classList.remove(...Arr[i].classList);
    Arr[i].classList.add('gold');
}
}
function s_silver_btn() {
  for(i = 0; i < 3; i++){
    Arr[i].classList.remove(...Arr[i].classList);
    Arr[i].classList.add('silver');
}}
//canvasダウンロード
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
  canvasBox.setAttribute('class', '');
  canvasBox.classList.add('scale-0' + e.target.value);
};

const canvasBox = document.getElementById("canvas-box");
var btn = document.getElementById("download-btn");
btn.addEventListener("click",() => {
canvasBox.setAttribute('class', '');
canvasBox.classList.add('scale-05');
slider.value = "5";
txt.innerHTML = "5";
html2canvas(canvasBox).then(canvas => { 
      let downloadEle = document.createElement("a");
      downloadEle.href = canvas.toDataURL("image/png");
      downloadEle.download = "YGORD-likeCard.png";
      downloadEle.click();
  })
});