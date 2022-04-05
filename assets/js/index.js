let play = document.getElementById('play')
let plays = document.querySelectorAll('.plays')
if (plays.length > 0) {
  //   play.addEventListener('click', function () {
  //     let play_video = document.querySelector('.video-play')
  //     document.querySelector('.overlay').style.opacity = '0'
  //     document.querySelector('.overlay').style.zIndex = '0'
  //     play_video.play()
  //     play_video.controls = true
  //   })

  plays.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.parentElement.style.opacity = '0'
      item.parentElement.style.zIndex = '0'
      let playV = item.parentElement.nextElementSibling

      playV.play()
      playV.controls = true
    })
  })
}
