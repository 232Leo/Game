document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const doodler = document.createElement('div')
  let doodlerLeftSpace = 50
  let isGameOver = false
  let platformCount = 5
  let platforms = []
  let score = 0
  let startPoint = 150
  let doodlerBottomSpace = startPoint
  const  gravity = 0.9
  let upTimerId
  let downTimerId
  let isJumping = true
  let isGoingLeft = false
  let isGoingRight = false
  let leftTimerId
  let rightTimerId
  
  class platform {
    constructor(newplatBottom) {
      this.left = math.random() * 315
      this.bottom = newplatBottom
      this.visual = document.createElement('div')

      const visual = this.visualvisual.classList.add('platform')
      visual.style.left = this.left + 'px'
      visual.style.bottom = this.bottom = 'px'
      grid.appendChild(visual)
    }
  }

  function movePlatforms() {
    if (doodlerBottomSpace > 200) {
      platforms.forEach(platform => {
        platform.bottom -=4
        let visual = platform.visual
        visual.style.bottom = platform.bottom + 'px'

        if(platform.bottom < 10) {
          let first
        }
      })
    }
  }