export const COLOR = {
  darkBlue: '#171F31',
  blue: '#4C87EA',
  gray: '#4A576D',
  grayBlue: '#203051',
  red: '#F5222D',
  darkRed: '#A8071A',
}

const breakpoints = [576, 768, 992, 1200, 1800]

/**
 * MQ[0]: min-width 576px,
 * MQ[1]: min-width 768px,
 * MQ[2]: min-width 992px,
 * MQ[3]: min-width 1200px
 * MQ[4]: min-width 1800px
 */
export const MQ = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
