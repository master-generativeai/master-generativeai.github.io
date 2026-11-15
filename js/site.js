(function(){
  document.documentElement.classList.add('js');
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n){
    b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  }
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  }else{els.forEach(function(e){e.classList.add('in')})}
  var OPEN=new Date('2026-11-16T00:00:00+01:00'),CLOSE=new Date('2026-12-15T23:59:59+01:00'),now=new Date();
  var days=function(a,b){var n=Math.max(1,Math.ceil((a-b)/864e5));return n+(n===1?' giorno':' giorni')};
  var txt;
  if(now<OPEN)txt='Le domande aprono tra <b>'+days(OPEN,now)+'</b> (16 novembre 2026)';
  else if(now<=CLOSE)txt='Domande aperte: chiudono tra <b>'+days(CLOSE,now)+'</b> (15 dicembre 2026)';
  else txt='Il termine per le domande (15 dicembre 2026) è scaduto: consulta il <a href="https://www.uniba.it/it/didattica/master-universitari/short-master/2026-2027/generative-ai-dalla-teoria-alla-pratica" style="color:#fff">sito UniBA</a> per eventuali riaperture';
  document.querySelectorAll('[data-count]').forEach(function(e){e.innerHTML=txt});
})();
