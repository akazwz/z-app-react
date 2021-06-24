// 洗牌算法,乱序数组
export default function randomArr(arr) {
    let r = arr.length
    let rand = 0
    while (r) {
        rand = Math.floor(Math.random() * (r--));
        [arr[r], arr[rand]] = [arr[rand], arr[r]]
    }
    return arr
}

