gsap.from("h3", { x: '1000px', duration:5 , ease: 'bounce'})
gsap.from("ul", { x: 1000, duration: 4, ease: 'bounce' , delay: 5})
gsap.from("select", { x: 1000, duration: 4, ease: 'bounce', delay: 10 })
gsap.from("button", { width: 1000, height:500,  duration: 4, ease: 'bounce',delay: 10 })

gsap.to('#body', {backgroundColor: '#ff0000', duration: 5, yoyo: true})

gsap.to('img', {x: '+=50', y:'+=15px', duration:2, repeat: 5, yoyo: true})

// gsap.to('img', {translateX: '100%', duration:2, repeat: 5, yoyo: true})


// gsap.timeline({paused : true})
// .from("h3", { x: 1000, duration: 5, ease: 'bounce' })
// .from("select", { x: 1000, duration: 4, ease: 'bounce' }, '<3')
// .from("ul", { x: 1000, duration: 4, ease: 'bounce' })

// .from("button", { width: 1000,  duration: 4, ease: 'bounce',yoyo: true })

//myTimeline.seek(4)

