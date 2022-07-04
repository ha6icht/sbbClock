(function(d) {

  var clockElements = makeClockElements(
    'b', 'span', 'span', 'em', 'em', 'em', 'em',
    'em', 'em', 'em', 'em', 'em', 'em', 'em',
    'em', 'i', 'i', 'i', 'i'
  );

  function makeClockElements(tags) {
    var clock = d.getElementById('clock'), result = [];
    for (var i = 0; tagName = arguments[i]; i++) {
      var element = clock.appendChild(d.createElement(tagName));
      /*console.log('arguments[i]: ',arguments[i]);*/
      if (tagName === 'i') result.push(element);
      else if(tagName === 'em'){
          /*console.log('var i: ',i)*/
          if(i>=3&&i<5) element.classList.add('first');
          else if(i>=5&&i<7)  element.classList.add('second');
          else if(i>=7&&i<9) element.classList.add('third');
          else if(i>=9&&i<11) element.classList.add('fourth');
          else if(i>=11&&i<13) element.classList.add('fifth');
          else if(i>=13&&i<15) element.classList.add('sixth');
          element.classList.add('twelfth');
          //result.push(element);
      }
    }
    return result;
  }

  function clockUpdate() {
    var now = new Date();
    /*console.log('clockElements[0]: ',clockElements[0]);*/
    clockElements[0].style.transform = 'rotate(' + (
      now.getHours() * 30 + (Math.floor(now.getMinutes() / 12) * 6)
    ) + 'deg)';
	/*console.log(Math.floor(now.getMinutes()));
	clockElements[0].style.transform = 'rotate(' + (
      3 * 30 + (Math.floor(5 / 12) * 6)
    ) + 'deg)';*/
    clockElements[1].style.transform = 'rotate(' + (
      now.getMinutes() * 6
    ) + 'deg)';
	/*clockElements[1].style.transform = 'rotate(' + (
      15 * 6
    ) + 'deg)';*/
    clockElements[2].style.transform = 'rotate(' + (
      now.getSeconds() * 6
    ) + 'deg)';
    clockElements[3].style.transform = 'rotate(' + (
      now.getSeconds() * 6
    ) + 'deg)';
  }

  clockUpdate();
  setInterval(clockUpdate, 1000);

})(document);