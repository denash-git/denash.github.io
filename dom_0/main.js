var x, y
function scan() {
  x = document.getElementById('num1').value
  y = document.getElementById('num2').value
}

document.getElementById('plus').addEventListener('click', function() {
  scan()
  document.write(+x + +y)
})
document.getElementById('minus').addEventListener('click', function() {
  scan()
  document.write(+x - +y)
})
document.getElementById('umn').addEventListener('click', function() {
  scan()
  document.write(+x * +y)
})
document.getElementById('del').addEventListener('click', function() {
  scan()
  document.write(+x / +y)
})
