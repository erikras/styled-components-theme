const colorMethods = [
  'negate',     // rgb(0, 100, 255) -> rgb(255, 155, 0)

  'lighten',    // hsl(100, 50%, 50%) -> hsl(100, 50%, 75%)
  'darken',     // hsl(100, 50%, 50%) -> hsl(100, 50%, 25%)

  'saturate',   // hsl(100, 50%, 50%) -> hsl(100, 75%, 50%)
  'desaturate', // hsl(100, 50%, 50%) -> hsl(100, 25%, 50%)
  'greyscale',  // #5CBF54 -> #969696

  'whiten',     // hwb(100, 50%, 50%) -> hwb(100, 75%, 50%)
  'blacken',    // hwb(100, 50%, 50%) -> hwb(100, 50%, 75%)

  'clearer',    // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 0.4)
  'opaquer',    // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 1.0)

  'rotate'      // hsl(60, 20%, 20%) -> hsl(330, 20%, 20%)
]

export default colorMethods
