$(document).ready(function(){
  var sample = 'diagraph g { a -> b; }';

  var options = {
    format: 'svg'
    //format: 'png-image-element'
  }

  var image = Viz(sample, options);
  var main = document.getElementById('main');

  main.innerHTML = image;

});
