$(document).ready(function() {
  $(document).mousemove(function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    $('.mbutterfly').css({
      'transform': 'translate(' + mouseX + 'px, ' + mouseY + 'px)'
    });
    $('.trail').css({
      'left': mouseX + 'px',
      'top': mouseY + 'px',
      'width': '100%'
    });
    setTimeout(function() {
      $('.trail').css('width', '0');
    }, 2000); // Line ko 2 seconds ke baad remove karna
  });
});