Point.prototype.goToStopPoint = function (p: Point) {
    if (this.inRange(p, 2000)) {
        log(p, distXY(this, p) / 1000 * 30)
    } else {
        log(p, 101)
    }
}

function log(p: Point, power: number) {
    let pwr: string = '0'
    if (power > 100) {
        pwr = 'BOOST'
    } else if (power >= 0) {
        pwr = Math.round(power).toString(10)
    }
    console.log(`${p.x} ${p.y} ${pwr}`);
}

let go = new Point(5000, 5000)

function goGoGo(line1: string, line2: string) {
    let inputs: string[] = line1.split(' ')
    let pod = new Point(parseInt(inputs[0]), parseInt(inputs[1]))
    let p2 = new Point(parseInt(inputs[3]), parseInt(inputs[3]))
    let podDistP2: number = parseInt(inputs[4]) // distance to the next checkpoint
    let podAngleP2: number = parseInt(inputs[5]) // angle between your pod orientation and the direction of the next checkpoint
    inputs = line2.split(' ')
    let oXY = new Point(parseInt(inputs[0]), parseInt(inputs[1]))
    // let power: string = '99'

    // pod.goToStopPoint(go)
    log(go, 100)
    console.error(pod, p2, podDistP2, podAngleP2)
}

// goGoGo('', '')
