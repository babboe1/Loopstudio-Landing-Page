const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.MenuBtn');
const CLOSE_BTN = document.getElementById('close-btn');
const ACTION_BTN_DESKTOP =
	document.querySelector('.ActionBtn.Desktop').firstElementChild;
const ACTION_BTN_MOBILE =
	document.querySelector('.ActionBtn.Mobile').firstElementChild;
const MENU_OPTION = document.querySelector('.MenuOpt').parentElement;
const IMAGE_BOXES = document.querySelectorAll('.CreationImgBox');
const IMAGE_BOX = document.querySelectorAll('.CreationImgBox.auto');
const ACTION_BTN_TEXT = document.querySelectorAll('.ActionText');
const BG_SLIDE = document.querySelector('.CreationImgBox.BgSlide');
const CREATION_CONTENT = document.querySelector('.CreationContent');
const TEXT_CONTENT = document.querySelectorAll('.TextContent');
const TEXT_HOLDER = document.querySelectorAll('.TextHolder');

if (window.innerWidth < 768) {
   for (const ImgBox of IMAGE_BOX) {
      ImgBox.classList.add('hidden');
   }
   for (const TXT of TEXT_HOLDER) {
      TXT.classList.remove('hidden');
   }
} else if (window.innerWidth > 767) {
	for (const TXT of TEXT_HOLDER) {
		TXT.classList.add('hidden');
	}
}
const AnimationTimer = () => {
   if (window.innerWidth < 768) {
      for (const TXT of TEXT_HOLDER) {
         TXT.classList.remove('hidden');
      }
   } else if (window.innerWidth > 767) {
      for (const TXT of TEXT_HOLDER) {
         TXT.classList.add('hidden');
      }
   }
};
window.setInterval(AnimationTimer, 10000);

const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};

const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};
const MenuOptionIn = () => {
   MENU_OPTION.classList.add('visible');
   MENU_OPTION.classList.remove('invisible');
};
const MenuOptionOut = () => {
   MENU_OPTION.classList.add('invisible');
   MENU_OPTION.classList.remove('visible');
};
const BackDropHandler = () => {
   BackDrop();
   StopScroll();
   if (MENU_OPTION.classList.contains('visible')) {
      MenuOptionOut();
   }
};
const MenuBtnHandler = () => {
   BackDrop();
	StopScroll();
   MenuOptionIn();
};
const CloseBtnHandler = () => {
   BackDropHandler();
};
const ActionBtnHandler = () => {
   for (const Text of ACTION_BTN_TEXT) {
      if (Text.textContent === 'SEE ALL') {
			for (const ImgBoxes of IMAGE_BOXES) {
				ImgBoxes.classList.remove('hidden');
         }
			Text.textContent = 'COLLAPSE';
         BG_SLIDE.classList.add('hidden');
         CREATION_CONTENT.classList.add('animate_easy');
      } else if (Text.textContent === 'COLLAPSE' && window.innerWidth < 768) {
			for (const ImgBoxes of IMAGE_BOXES) {
				ImgBoxes.classList.add('hidden');
			}
			Text.textContent = 'SEE ALL';
         BG_SLIDE.classList.remove('hidden');
         CREATION_CONTENT.classList.remove('animate_easy');
      } else if (Text.textContent === 'COLLAPSE' && window.innerWidth > 767) {
         for (const ImgBoxes of IMAGE_BOXES) {
				ImgBoxes.classList.add('hidden');
         }
         for (const ImgBox of IMAGE_BOX) {
            ImgBox.classList.remove('hidden');
         }
			Text.textContent = 'SEE ALL';
         BG_SLIDE.classList.remove('hidden');
         CREATION_CONTENT.classList.remove('animate_easy');
      }
   }
};

BACKDROP.addEventListener('click', BackDropHandler);
MENU_BTN.addEventListener('click', MenuBtnHandler);
CLOSE_BTN.addEventListener('click', CloseBtnHandler);
ACTION_BTN_MOBILE.addEventListener('click', ActionBtnHandler);
ACTION_BTN_DESKTOP.addEventListener('click', ActionBtnHandler);