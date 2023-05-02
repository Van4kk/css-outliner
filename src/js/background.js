chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.executeScript(tabId, {
      file: 'content.js'
    });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == 'addOutline') {
    chrome.tabs.executeScript({
      code: 'document.querySelector("' + request.selector + '").style.outline = "2px solid red";'
    });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == 'startScan') {
    chrome.tabs.executeScript({
      code: 'var elements = Array.from(document.getElementsByTagName("*"));' +
            'chrome.runtime.sendMessage({action: "showElements", elements: elements});'
    });
  }
});



// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action == 'showElements') {
//     var elementList = document.createElement('ul');
//     request.elements.forEach(function(element) {
//       var listItem = document.createElement('li');
//       var checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.addEventListener('change', function() {
//         if (this.checked) {
//           chrome.tabs.executeScript({
//             code: 'document.querySelector("' + getElementSelector(element) + '").style.outline = "2px solid red";'
//           });
//         } else {
//           chrome.tabs.executeScript({
//             code: 'document.querySelector("' + getElementSelector(element) + '").style.outline = "";'
//           });
//         }
//       });
//       listItem.appendChild(checkbox);
//       listItem.appendChild(document.createTextNode(getElementSelector(element)));
//       elementList.appendChild(listItem);
//     });
//     document.body.appendChild(elementList);
//   }
// });
