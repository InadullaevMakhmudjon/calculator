import operations from './operations'

export default {
  mixins: [operations],
  data() {
    return {
      numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      actions: ['+/-', '.'],
      keys: [
        '%',
        'CE',
        'C',
        'delete',
        '1/x',
        'x²',
        '√x',
        '÷',
        '7',
        '8',
        '9',
        '×',
        '4',
        '5',
        '6',
        '-',
        '1',
        '2',
        '3',
        '+',
        '+/-',
        '0',
        '.',
        '=',
      ],
    }
  },
  computed: {
    title: {
      get() {
        return this.$store.state.content
      },
      set(newValue) {
        const start = this.$store.state.start
        let value = this.$store.state.content
        if ([0, '0'].includes(value) || start) {
          value = ''
          this.$store.commit('changeStart')
        } else if (this.caption.includes('=')) {
          value = ''
          this.$store.commit('setCaption', '')
        }
        this.$store.commit('setContent', value + newValue)
      },
    },
    caption() {
      return this.$store.state.caption
    },
  },
  methods: {
    detect(char) {
      switch (char) {
        case 'delete':
          this.deleteChar()
          break
        case '.':
          this.dotChar()
          this.trace('.')
          break
        case '+/-':
          this.negativePosative()
          break
        case '1/x':
          this.oneOver()
          break
        case 'x²':
          this.squared()
          break
        case '√x':
          this.rooted()
          break
        case '%':
          this.percent()
          this.trace('%')
          break
        case 'C':
          this.clear()
          this.trace('C')
          break
        case 'CE':
          this.clear()
          this.trace('CE')
          break
        case '+':
          this.calculate('+')
          this.trace('+')
          break
        case '-':
          this.calculate('-')
          this.trace('-')
          break
        case '×':
          this.calculate('×')
          this.trace('×')
          break
        case '*':
          this.calculate('×')
          this.trace('×')
          break
        case '÷':
          this.calculate('÷')
          this.trace('÷')
          break
        case '/':
          this.calculate('÷')
          this.trace('÷')
          break
        case '=':
          this.equal()
          this.trace('=')
          break
        case 'Enter':
          this.equal()
          this.trace('=')
          break
        default:
          break
      }
    },
    trace(id) {
      const element = document.getElementById(id)
      if (element) {
        element.setAttribute('clicked', true)
        setTimeout(() => {
          element.removeAttribute('clicked')
        }, 100)
      }
    },
    setValue(key) {
      if (this.numbers.includes(key)) {
        this.title = key
        this.trace(key)
      } else {
        this.detect(key)
      }
    },
  },
}
