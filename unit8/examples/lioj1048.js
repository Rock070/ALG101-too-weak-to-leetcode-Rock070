var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  let arr = []
  for(let i=1; i<lines.length; i++) {
    arr.push(Number(lines[i]))
  }

  let max = -Infinity
  for(let i=0; i<arr.length; i++) {
    // 更新：在教學影片中這邊為 j=i+1，應該要改成 j=i，否則會漏掉單一元素子序列的情況
    for(let j=i; j<arr.length; j++) {
      let sum = 0
      for(let k=i; k<=j; k++) {
        sum += arr[k]
      }
      if (sum > max) {
        max = sum
      }
    }
  }
  console.log(max)
}

