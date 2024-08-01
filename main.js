const tween1 = KUTE.fromTo(
  '#blob1', { path: '#blob1' }, { path: '#blob2' }, { repeat: 9999, duratuion: 99999, yoyo: true }
)

tween1.start()

const lenis = new Lenis({})

function raf(time) {
  //console.log({time})
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const page1Animation = (container) => {

  const tl = gsap.timeline()

  tl.from("nav h1", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    delay: 1
  })

  tl.from("nav h4", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3
  })

  const portfolioTextPage1 = new SplitType("#portfolioTextPage1")

  tl.from('.char', {
    y: -200,
    stagger: 0.1,
    delay: 0.5,
    duration: 1
  })

  tl.from(".text .primary-text", {
    x: -500,
    opacity: 0,
    duration: 1,
  }, "-=0.8")

  tl.from(".text .secondary", {
    x: -100,
    opacity: 0,
    duration: 0.7
  }, "-=0.5")

  tl.to(".button-page-1", {
    y: 0,
    duration: 0.6,
    opacity: 1
  }, "-=0.4")

  tl.from(".page-1 img", {
    x: 100,
    opacity: 0,
    duration: 1,
  }, "-=1")

  const btn = document.querySelector(".button-page-1")
  btn.onmousemove = (e) => {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
  }
}

gsap.registerPlugin(ScrollTrigger)


const page2 = document.querySelector(".page-2")

function getScrollAmount() {
  let page2Width = page2.offsetWidth
  return -(page2Width - window.innerWidth)
}

const tween = gsap.to(page2, {
  x: getScrollAmount,
  duration: 3,
  ease: "none"
})

ScrollTrigger.create({
  trigger: ".wrapperPage-2",
  start: "top 2%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 3,
  invalidateOnRefresh: true,
})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    maarkers: true,
    start: "top 50%",
    end: "top: 0",
    scrub: 5,
  }
})

tl2.from("#skillText", {
  y: 300,
  delay: 1,
  duration: 3,
  opacity: 0,
  ease: Power4.easeOut
})


tl2.from(".page-2 .card-1", {
  y: -500,
  opacity: 0,
  duration: 3,
})

tl2.from(".page-2 .card-2", {
  y: 500,
  opacity: 0,
  duration: 0.9,
})

tl2.from(".page-2 .card-3", {
  y: -500,
  opacity: 0,
  duration: 0.9,
})

//paage3

const tl3 = gsap.timeline({scrollTrigger: {
  trigger: ".librirariesInJS",
  start: "0% 100%",
  end: "400% 0%",
  scrub: true
}})

tl3.to(".strip-l", {
  marginLeft: "0%",
  ease: Power4.ease
}, 'strip')

tl3.to(".strip-r", {
  marginLeft: "-100%",
  ease: Power4.ease
}, 'strip')

page1Animation()