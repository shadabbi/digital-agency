const li = document.querySelectorAll('.main-navbar li');
const good = document.querySelector('.sub');
const onClick = document.querySelector('.onClick').children;
const toggle = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.toggle');
const crossBtn = document.querySelector('.cross-btn');
for (const iterator of li) {
    iterator.addEventListener('click',function(){
        console.log(iterator)
      const sub = iterator.dataset;
      const clas = sub.btn;
      const good = document.querySelector('.'+clas);
     
        good.classList.toggle('visible')
        setTimeout(()=>{

            good.classList.toggle('come')
        },200)
        let left = this.offsetLeft;
        good.style.left = `${left}px`;
    })
}

const overlay = document.querySelector('.overlay');
const openNav = function(){
    mobileNav.classList.remove('animate-nav-go');
    mobileNav.classList.add('animate-nav-come');
    overlay.classList.add('visible');
}

const closeNav = function(){
  overlay.classList.remove('visible')
    mobileNav.classList.add('animate-nav-go');
    setTimeout(()=>{
        mobileNav.classList.remove('animate-nav-come');
    },1000)
}

toggle.addEventListener('click',openNav);
crossBtn.addEventListener('click',closeNav);





const header = document.getElementById("main-nav");
const backTo = document.querySelector(".top-hide");
// var sticky = header.offsetTop;
console.dir(header.offsetHeight)
window.addEventListener('scroll',myFunction);

function myFunction(e) {
  
  if (window.pageYOffset > header.offsetHeight) {
    backTo.classList.add("top-visible");
  } else {
    backTo.classList.remove("top-visible");
  }
}

backTo.addEventListener('click',()=>{
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})









$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });