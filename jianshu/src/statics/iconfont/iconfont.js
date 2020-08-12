import { createGlobalStyle } from 'styled-components'

export const GlobalStyledIconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1597220001928'); /* IE9 */
    src: url('./iconfont.eot?t=1597220001928#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWUAAsAAAAACjgAAAVFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqHLIYqATYCJAMYCw4ABCAFhG0HWBvgCMgehXEsLBShXb2VKozi4b+9uftm5k9qcVmV0mR0KV24qLiE1iQKjMB4YgQKfD8eucOzzf4B0+Nga2NrrmrRDS7KeCgWHnJdeh2l3I9OGyBgGPz/f69q5gSb177F5b2stWhbTjCA4QAFaM8OXCABboGqBdEK9YFemMDP9wl0axkN2SyvbQW4wjEFNt1xRi3AS26lRxw6bbVlbxGfgUxn+og+BsCn+PvjH0gOJ2ky50mnt2UGUPhT/gWOvffN1JVngZnrBSEdImMRUIjXreGnsLS8CNNt/AY/+4BenZLyU/65/+fpn3/2Be7zUdI78dDrlgh51l+ehqjI3Iv0w0rDT7lPEPz0J8j8TCdI/PyMoPALV5l51BUx1kcLgPgCHN6iYFJ87L5payiOj5Eq/zGD4/tPIVxr1Z3r3Mr2NesJ4tvr1tcfM3vOqY94qjyS5pogBQjfjvTQDzxJp4crjnqzvQzxuvX+60TSvUbRttql6li7iQzqvvZvJSxke+GdY4nN4W3aS6QbgO7ofiRcT5FZGs0swpVLn94PZh4g3bcQ5JWCuSYhXi+z1SSPh3ZLBbSCbpms4BKuF7zeKcTeqHP38ei1FwnX8PMHeofXSuXl4aNXb1CuId3qdbcKyD3DPJ9opHdi1bMOml5/yKxWzSyu27R2r0LG571MylmnPuNRkuukUZKkXPPGQjPna31SLvny2P2jN3uUrZo1Us62hMh5KgVxzLpV8DivpIK1H5pce6Pe+WXY6R+TP/yII7ZVurGO8A4XUrmCNMVVj3XUxK3KiNQ1LAzL/OZxY4lfz+Abg6rLxrvtMWUmaynVMFgDiBtAP8+1Nf4SZg7ZWF10uzi2EvTfBUWtYQ01O0yrPRR4ZCteDC99AQN9uhKvOb+BRot1XL7k98+yU7yTmYDI1uL5EQwX0E3WFGZ/2qMRH0Uo/4kc8tOQWJD4/e9BuHWMWIKuuHlzJeai0IGtYFV+TokY/wbCd08cp9NW/IjOOnJ4FsaIk+gsdDbhCOE/BORuJtb4+xAuMyc08wmliNFtOX4ya3LuusBrGWH1uWMrU8YZ8ICXSGsUevd5rWyIcO/SwTMsPUyuek9Zde2MgiuSfbiiqPnKFb4Whh5TzLFWnz9d3IQvzZqdLhw4WD3/uCqlx4sela/3M6R+P3BHZ3sj+G5HSMfwuu9kEfOybD2GmFV54vhpg05VLDy2Mr72WPvo9r6S45cDkP/NJLAsYc2NBci+jOvfTkI2pxbXdYDJs709uiIOG/LRJ6HN2GOdYs7K2KS3wVQA7cf59xwRS335OgZQuOkaVuj73zezYPkDAO1nbdbM33We6++Ty3uDcn/DyU8496P9zo64a7z6n7MwND+ns4Ae0n96U+d4atG7fVb7f828iurMJsWEbjdOm+LD3l/LOja6kdBpLIekwwRknSbJhb4IjR5Lxsr0Fei2oOJwjxECTJQuzJuHEAYdg6TfV8gGPSEX+nvQGPedoSI/DLpdR9iZPabjiBIBakVooHSTKE7P21nPJxJJczM0jrNqhaIuljBQcHI5Kik+sVqrgHYorLHBOd6YLIosxQq8jSqHp0GrlaccAm+GejHeJIqO7IQEtu2T4vW8DRA2CCAtEWRA0ZmEwtHj2bHhYBFR+/pmkNE4VlpCT09DmQEJnLjRKUniJY4gV5jto3qeZbLTeEbJRCKWF7EEPBtKOQYhq1vmURzts8wgPVE804yiQ7YE6seONcfvb7Vd5SHo5ry2RoocJZqo0aHcOzg7WqQlWK3daNCauXBxv0njbFpex5GN0O7MXQAAAAAA') format('woff2'),
    url('./iconfont.woff?t=1597220001928') format('woff'),
    url('./iconfont.ttf?t=1597220001928') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1597220001928#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconspin:before {
    content: "\e606";
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconfangdajing:before {
    content: "\e60c";
  }

  .iconyumaobi:before {
    content: "\e6e5";
  }

  .iconPensyumaobi:before {
    content: "\e708";
  }
`


