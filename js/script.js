const buttonMobilContact = document.querySelector('.button_contacts_mobile');
const blockMobilContact = document.querySelector('.block_contacts_mobile');
const buttonMobilClose = document.querySelector('.block_contacts_mobile');
buttonMobilContact.addEventListener('click', function(){
  blockMobilContact.style.cssText = 'transform: translateX(0%);';
})
buttonMobilClose.addEventListener('click', function(){
  blockMobilContact.style.cssText = 'transform: translateX(-100%);';
})

const mail2 = document.querySelector('#mail');
const mail = document.querySelector('#mail2');
const copyList = document.querySelectorAll('#copy');
const blockSave = document.querySelector('.block_save');
copyList[0].onclick = function(){
  navigator.clipboard.writeText('+7 (928) 014-05-32');
  blockSave.classList.add('save_active');
  setTimeout(function(){
    blockSave.classList.remove('save_active');
  }, 1000);
}
copyList[1].onclick = function(){
  navigator.clipboard.writeText('amigo7772015@mail.ru');
  blockSave.classList.add('save_active');
  setTimeout(function(){
    blockSave.classList.remove('save_active');
  }, 1000);
}
mail.onclick = function(){
  navigator.clipboard.writeText('amigo7772015@mail.ru');
  blockSave.classList.add('save_active');
  setTimeout(function(){
    blockSave.classList.remove('save_active');
  }, 1000);
}
mail2.onclick = function(){
  navigator.clipboard.writeText('amigo7772015@mail.ru');
  blockSave.classList.add('save_active');
  setTimeout(function(){
    blockSave.classList.remove('save_active');
  }, 1000);
}

const popUp = document.querySelector('#popUp');
const BlockPopup = document.querySelector('.BlockPopup');
const popup_close = document.querySelector('.popup_close');
const block1Body1 = document.querySelector('.block1_body1');
const block1Body2 = document.querySelector('.block1_body2');

popUp.onclick = function(){
  BlockPopup.style.cssText = 'display: block;';
  block1Body1.classList.add('block_none');
  block1Body2.classList.add('block_none');
}
popup_close.onclick = function(){
  BlockPopup.style.cssText = 'display: none;';
  block1Body1.classList.remove('block_none');
  block1Body2.classList.remove('block_none');
}

const block1 = document.querySelector('.block1');
const helloButton = document.querySelector('.hello_button');
helloButton.onclick = function(){
  block1.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}
