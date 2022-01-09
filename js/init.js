const TOGGLE_BTN = document.querySelector('.container-toggle');
const TOGGLE_TARGET = document.querySelector('.target-toggle');

TOGGLE_BTN.addEventListener('click', function() {
  if (TOGGLE_TARGET.classList[1] === 'unEnable') {
    TOGGLE_TARGET.classList.remove('unEnable');
    TOGGLE_TARGET.classList.add('enable');

    injectCanvas();
  } else {
    TOGGLE_TARGET.classList.remove('enable');
    TOGGLE_TARGET.classList.add('unEnable');
    removeCanvas();
  }
});

/**
 */
async function injectCanvas() {
  const [TAB] = await chrome.tabs.query({active: true,
    currentWindow: true});
  chrome.scripting.executeScript({
    target: {tabId: TAB.id},
    files: ['js/content-script.js'],
  });
};

/**
 */
async function removeCanvas() {
  await chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {onToggle: true});
  });
}
