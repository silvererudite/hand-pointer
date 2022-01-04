const TOGGLE_ON = document.getElementById('prepare-canvas');

// asynchronously get current active tab and set by a destructing assignment,
// then we inject content-script on that particular tab

TOGGLE_ON.addEventListener('click', async () => {
  const [TAB] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: TAB.id},
    files: ['js/content-script.js'],
  });
});

