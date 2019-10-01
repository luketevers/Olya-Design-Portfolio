export const closeMenu = {
  methods: {
    $_closeMenu () {
      this.$store.dispatch('VIEW_MENU', false)
      document.body.classList.remove('body-stop')
    }
  }
}

export const slideControls = {
  data () {
    return {
      activeSlide: 0,
      show: null,
      canRun: true,
      slides: '',
      windowWidth: 0
    }
  },
  mounted () {
    if (process.browser) {
      this.windowWidth = window.innerWidth
      setTimeout(() => { this.show = 0 }, 250) // -> wait for menu transition
      window.addEventListener('wheel', (e) => {
        this.handleScroll(e)
      })
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
      this.getSectionLength()
      this.handleTouch((swipedir) => {
        if (swipedir === 'left' || swipedir === 'down') {
          this.incrementSlide()
        }
        if (swipedir === 'right' || swipedir === 'up') {
          this.decrementSlide()
        }
      })
    }
  },
  methods: {
    getSectionLength () {
      this.slides = Object.keys(this.props).length - 1
    },
    handleScroll (e) {
      // Safari browser registers wheel events differently
      const safari = /Safari/i.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
      // slide right
      if (this.activeSlide < this.slides - 1) {
        if (safari) {
          if ((e.deltaY || e.deltaX) >= 1 && this.canRun) {
            this.incrementSlide()
          }
        }
        if ((e.deltaY || e.deltaX) > 50 && this.canRun) {
          this.incrementSlide()
        }
      }
      // slide left
      if (this.activeSlide > 0) {
        if (safari) {
          if ((e.deltaY || e.deltaX) <= -1 && this.canRun) {
            this.decrementSlide()
          }
        }
        if ((e.deltaY || e.deltaX) < -50 && this.canRun) {
          this.decrementSlide()
        }
      }
    },
    handleTouch (callback) {
      let swipedir
      let startX
      let startY
      let distX
      let distY
      const threshold = 1 // min dist for swipe
      const restraint = 100 // max dist allow allowed at the same time in perpendicular direction
      const allowedTime = 300 // max time allowed to travel dist
      let elapsedTime
      let startTime
      const handleSwipe = callback || function (swipedir) {}

      window.addEventListener('touchstart', (e) => {
        const touchObj = e.changedTouches[0]
        swipedir = 'none'
        startX = touchObj.pageX
        startY = touchObj.pageY
        startTime = new Date().getTime()
      })

      // window.addEventListener('touchmove', (e) => { e.preventDefault() })

      window.addEventListener('touchend', (e) => {
        const touchObj = e.changedTouches[0]
        distX = touchObj.pageX - startX
        distY = touchObj.pageY - startY
        elapsedTime = new Date().getTime() - startTime
        // console.log(distX)
        if (elapsedTime <= allowedTime) {

        }
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          swipedir = (distX < 0) ? 'left' : 'right'
        } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          swipedir = (distY < 0) ? 'up' : 'down'
        }
        return handleSwipe(swipedir)
      })
    },
    incrementSlide () {
      this.canRun = false
      this.activeSlide++
      setTimeout(() => {
        this.canRun = true
      }, 650)
      setTimeout(() => {
        this.show = this.activeSlide
      }, 250)
    },
    decrementSlide () {
      this.canRun = false
      this.activeSlide--
      setTimeout(() => {
        this.canRun = true
      }, 650)
      setTimeout(() => {
        this.show--
      }, 250)
    },
    // for buttons
    moveSlideUp () {
      if (this.activeSlide < this.slides - 1) {
        this.activeSlide++
        setTimeout(() => {
          this.show = this.activeSlide
        }, 250)
      }
    },
    moveSlideDown () {
      if (this.activeSlide > 0) {
        this.activeSlide--
        setTimeout(() => {
          this.show--
        }, 250)
      }
    },
    // for pagination
    goToSlide (i) {
      this.activeSlide = i
      setTimeout(() => { this.show = i }, 250)
    }
  }
}
