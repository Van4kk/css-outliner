document.addEventListener('click', function(event) {
  var element = event.target;
  var selector = getElementSelector(element);
  chrome.runtime.sendMessage({
    action: 'addOutline',
    selector: selector
  });
});

function getElementSelector(element) {
  if (element.id !== '') {
    return '#' + element.id;
  } else if (element.tagName === 'BODY') {
    return 'body';
  }

  var index = getIndexOfElement(element);

  return getElementSelector(element.parentNode) + ' > ' + element.tagName.toLowerCase() + ':nth-child(' + index + ')';
}

function getIndexOfElement(element) {
  var siblings = element.parentNode.children;

  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] === element) {
      return i + 1;
    }
  }

  return -1;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == 'getElements') {
    var elements = [];
    var allElements = document.getElementsByTagName('*');

    for (var i = 0; i < allElements.length; i++) {
      var element = allElements[i];
      var selector = getElementSelector(element);
      elements.push({selector: selector});
    }

    sendResponse(elements);
  }
});

function getElementSelector(element) {
  if (element.id !== '') {
    return '#' + element.id;
  } else if (element.tagName === 'BODY') {
    return 'body';
  }

  var index = getIndexOfElement(element);

  return getElementSelector(element.parentNode) + ' > ' + element.tagName.toLowerCase() + ':nth-child(' + index + ')';
}

function getIndexOfElement(element) {
  var siblings = element.parentNode.children;

  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] === element) {
      return i + 1;
    }
  }

  return -1;
}

