const tl= gsap.timeline();

tl.to ("#box1", {
        rotation:360,
        duration:2,
        x:400,
        // repeat:4 ,
        // yoyo:true,
    }

);
tl.to ('#box2',{
    borderRadius:40,
    rotation:180,
    duration:2,
    x:500
})
tl.to('#box3',{
    borderRadius:'50%',
    y:-400,
    x:200,
    duration:1,
    repeat:-1,
    yoyo:true,
})

gsap.from ("h2", {
    opacity:0,
    duration:1,
    y:23,
    stagger:1, //ek ek karke chalane ke liye
})