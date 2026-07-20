(function(){
  var hd=document.getElementById('hd');
  var burger=document.getElementById('burger');
  var nav=document.getElementById('nav');

  window.addEventListener('scroll',function(){
    if(window.scrollY>10){hd.classList.add('stuck');}else{hd.classList.remove('stuck');}
  },{passive:true});

  burger.addEventListener('click',function(){nav.classList.toggle('open');});
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){nav.classList.remove('open');});
  });

  document.querySelectorAll('[data-more]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var t=document.getElementById(btn.getAttribute('data-more'));
      var open=t.classList.toggle('show');
      btn.querySelector('.lbl').textContent=open?'Show less':btn.getAttribute('data-label');
      btn.querySelector('.arw').style.transform=open?'rotate(180deg)':'';
    });
  });

  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
