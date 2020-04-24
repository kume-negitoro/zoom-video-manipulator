console.log('-- zoom-video-manipulator ---')

document.body.addEventListener('keydown', ev => {
    const player = document.getElementById('vjs_video_3_html5_api')
    if(!player) return
    void ({
        32: (/* Space */) => {
            if(player.paused){
                player.play()
            }else{
                player.pause()
            }
            ev.preventDefault()
        },
        37: (/* ← */) => {
            player.currentTime -= 10
            ev.preventDefault()
        },
        38: (/* ↑ */) => {
            document.querySelector('#vjs-pop-menu-3>li.selected')
                ?.nextElementSibling
                ?.click()
            ev.preventDefault()
        },
        39: (/* → */) => {
            player.currentTime += 10
            ev.preventDefault()
        },
        40: (/* ↓ */) => {
            document.querySelector('#vjs-pop-menu-3>li.selected')
                ?.previousElementSibling
                ?.click()
            ev.preventDefault()
        },
    }[ev.keyCode] || (() => {}))()
})
