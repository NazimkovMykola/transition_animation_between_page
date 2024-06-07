window.addEventListener('load', function() {
    document.body.classList.remove('off');
    document.body.classList.add('on');
  });
  
  window.addEventListener('click', function(event) {
    const url = target.getAttribute('href');
    setTimeout(function() {
      window.location.href = url;
    }, 400);
  
    event.preventDefault();
  });