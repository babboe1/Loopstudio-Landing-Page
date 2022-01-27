const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.MenuBtn');
const CLOSE_BTN = document.getElementById('close-btn');
const ACTION_BTN_DESKTOP = document.querySelector('.ActionBtn.Desktop').firstElementChild;
const ACTION_BTN_MOBILE = document.querySelector('.ActionBtn.Mobile').firstElementChild;
const MENU_OPTION = document.querySelector('.MenuOpt').parentElement;
const IMAGE_BOXES = document.querySelectorAll('.CreationImgBox');
const IMAGE_BOX = document.querySelectorAll('.CreationImgBox.auto');
const ACTION_BTN_TEXT = document.querySelectorAll('.ActionText');
const BG_SLIDE = document.querySelector('.CreationImgBox.BgSlide');
const CREATION_CONTENT = document.querySelector('.CreationContent');
const TEXT_CONTENT = document.querySelectorAll('.TextContent');
const TEXT_HOLDER = document.querySelectorAll('.TextHolder');

BACKDROP.addEventListener('click', BackDropHandler);
MENU_BTN.addEventListener('click', MenuBtnHandler);
CLOSE_BTN.addEventListener('click', CloseBtnHandler);
ACTION_BTN_MOBILE.addEventListener('click', ActionBtnHandler);
ACTION_BTN_DESKTOP.addEventListener('click', ActionBtnHandler);