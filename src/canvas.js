import Emitter from './emitter.js'

export default class Canvas extends Emitter {
    constructor (id, width = null, height = null) {
    super()
    this.id = id
        this.width = width
        this.height = height
        this.el = document.getElementById(id)
        this.el.width = width ? width : this.el.width
        this.el.height = height ? height : this.el.height
        this.el.setAttribute('tabindex', 1)
        this.ctx = this.el.getContext('2d')
        this.ctx.imageSmoothingEnabled = false
    }

    clear (fill = '#000', x = 0, y = 0, width = this.width, height = this.height) {
        this.ctx.fillStyle = fill
        this.ctx.fillRect(x, y, width, height)
    }
}