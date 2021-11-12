(function(d) {

  var clockElements = makeClockElements(
    'b', 'span', 'span', 'i', 'i', 'i'
  );

  function makeClockElements(tags) {
    var
      clock = d.getElementById('clock'),
      result = [];
    for (var i = 0; tagName = arguments[i]; i++) {
      var element = clock.appendChild(d.createElement(tagName));
      if (tagName === 'i') result.push(element);
    }
    return result;
  }

  function clockUpdate() {
    var now = new Date();
    clockElements[0].style.transform = 'rotate(' + (
      now.getHours() * 30 + (Math.floor(now.getMinutes() / 12) * 6)
    ) + 'deg)';
    clockElements[1].style.transform = 'rotate(' + (
      now.getMinutes() * 6
    ) + 'deg)';
    clockElements[2].style.transform = 'rotate(' + (
      now.getSeconds() * 6
    ) + 'deg)';
  }

  clockUpdate();
  setInterval(clockUpdate, 1000);

})(document);