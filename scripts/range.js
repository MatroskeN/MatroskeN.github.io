class Slider {
    constructor (rangeElement, valueElement, computedElement, options) {
        this.rangeElement = rangeElement
        this.valueElement = valueElement
        this.computedElement = computedElement
        this.options = options

        this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }

    init() {
        this.rangeElement.setAttribute('min', options.min)
        this.rangeElement.setAttribute('max', options.max)
        this.rangeElement.value = options.cur

        this.updateSlider()
    }

    updateSlider (newValue) {
        this.valueElement.innerText = this.rangeElement.value + ' GB';
        this.computedElement.innerText = this.rangeElement.value;
    }
}

let rangeElement = document.querySelector('.range [type="range"]')
let valueElement = document.querySelector('.changeable')
let computedElement = document.querySelector('.computedPrice')

let options = {
    min: 2,
    max: 80,
    cur: 10
}

if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, computedElement, options)

    slider.init()
}