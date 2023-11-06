/** Global constants section */
const SHARE_BTN_ELEMENT = document.querySelectorAll('.icon-share'),
      SHARE_OPTIONS_ELEMENTS = document.querySelector('.share');


/** Functions section */
 
/**
 * This function toggles the share options
 */
function toggleShare(){
    SHARE_OPTIONS_ELEMENTS.classList.toggle('show-share');
}


/** Listeners section */
SHARE_BTN_ELEMENT.forEach(shareBtn =>{
    shareBtn.addEventListener('click', toggleShare);
})