
const lenis = new Lenis({})

function raf(time) {
  //console.log({time})
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function page1Animation() {

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

  tl.from(".text .primary-text", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: Power2.easeOut
  }, "sameTime")

  tl.from(".text .secondary", {
    x: -100,
    opacity: 0,
    duration: 0.7
  })

  tl.to(".button-page-1", {
    x: 0,
    duration: 1,
    ease: Power1.ease
  }, "sameTime")
  
  tl.from(".page-1 img", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: Power3.easeInOut
  })
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

const mainText = document.querySelector(".mainText")

tl2.from("#skillText", {
  y: 300,
  delay: 1,
  duration: 3,
  opacity: 0,
  ease: Power4.easeOut
})

tl2.from(mainText, {
  y: 100,
  duration: 1.5,
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

tl2.from(".page-2 .card-4", {
  y: 500,
  opacity: 0,
  duration: 0.9,
})

tl2.from(".page-2 .card-5", {
  y: -500,
  opacity: 0,
  duration: 0.9,
})

page1Animation()