import calculate from "./calculate.js"
import { copyToClipboard } from "./copyToClipboard.js"
import { buttonDown, clear, keyDown } from "./keys.js"
import switchTheme from "./themeSwitcher.js"


document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', buttonDown)
})
document.getElementById('input').addEventListener('keydown', keyDown)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)