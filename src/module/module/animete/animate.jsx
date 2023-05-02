import ScrollMagic from 'scrollmagic'

const animete = () => {
  
    const controller = new ScrollMagic.Controller()

    let animateElem = document.getElementById('header')

    let services = new ScrollMagic.Scene({triggerElement:'#services', triggerHook: "onLeave"})
    .on("enter", function () {
      animateElem.style.backgroundColor = '#202020'
    })
    .on("leave", function () {
      animateElem.style.backgroundColor = '#191919'
    })
    .addTo(controller)



    let hr = new ScrollMagic.Scene({triggerElement:'#hr', triggerHook: "onLeave"})
    .on("enter", function () {
      animateElem.style.backgroundColor = '#191919'
    })
    .on("leave", function () {
      animateElem.style.backgroundColor = '#202020'
    })
    .addTo(controller)


    let pricing = new ScrollMagic.Scene({triggerElement:'#pricing', triggerHook: "onLeave"})
    .on("enter", function () {
      animateElem.style.backgroundColor = '#202020'
    })
    .on("leave", function () {
      animateElem.style.backgroundColor = '#191919'
    })
    .addTo(controller)


    let partners = new ScrollMagic.Scene({triggerElement:'#partners', triggerHook: "onLeave"})
    .on("enter", function () {
      animateElem.style.backgroundColor = '#191919'
    })
    .on("leave", function () {
      animateElem.style.backgroundColor = '#202020'
    })
    .addTo(controller)


    let customers = new ScrollMagic.Scene({triggerElement:'#customers', triggerHook: "onLeave"})
    .on("enter", function () {
      animateElem.style.backgroundColor = '#202020'
    })
    .on("leave", function () {
      animateElem.style.backgroundColor = '#191919'
    })
    .addTo(controller)


    let contacts = new ScrollMagic.Scene({triggerElement:'#contacts', triggerHook: "onLeave"})
    .on("enter", function () {
      animateElem.style.backgroundColor = '#191919'
    })
    .on("leave", function () {
      animateElem.style.backgroundColor = '#202020'
    })
    .addTo(controller)

} 

export default animete