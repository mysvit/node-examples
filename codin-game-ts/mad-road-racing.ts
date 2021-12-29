import {Point} from "./coordinate";

class MovePoint {
    point: Point
    prevPoint: Point
    distanceToNextPoint: number
    predictPoint: Point
    isCalcPredictPointAng: boolean
    isBoost: boolean
    tooClose: number

    goPoint: Point
    goPower: string

    modifyMove(pod: Point, opponentXY: Point, podDistNextP: number, podAngleNextP: number) {
        this.goPoint = this.getGoPoint(pod)
        this.goPower = this.getGoPower(pod, opponentXY, podDistNextP, podAngleNextP)
    }

    private getGoPoint(pod: Point) {
        if (pod.inRange(this.point, 1100)) {
            return this.point
        }
        return this.predictPoint
    }

    private getGoPower(pod: Point, opponentXY: Point, podDistNextP: number, podAngleNextP: number) {
        let power = '100'
        // standard move
        if (this.distanceToNextPoint < this.tooClose) {
            power = '75'
        }
        // 'BOOST'
        if (podDistNextP > 6000 && Math.abs(podAngleNextP) < 10) {
            power = 'BOOST'
        }
        // SHIELD
        console.error('SHIELD:', pod.inRange(opponentXY, 900), pod.distXY(opponentXY))
        if (pod.inRange(this.point, 900) && pod.inRange(opponentXY, 900)) {
            power = 'SHIELD'
        }
        return power
    }

}

function getPoint(p: Point) {
    // save laps position
    let index = points.findIndex(f => f.point.x === p.x && f.point.y === p.y)
    if (index < 0) {
        const movePoint = new MovePoint()
        movePoint.point = p
        movePoint.predictPoint = p
        points.push(movePoint)
        if (points.length > 1) {
            // calc prediction point
            calcPredictPoint(points.length - 2, points.length - 1)
        }
        return points[points.length - 1]
    } else {
        if (index === 0 && points.length > 2 && isCalcAllSimplePredictPoint) {
            calcAllPredictPoint()
        }
    }
    return points[index]
}

function calcPredictPoint(iPrev, iNext) {
    if (points[iNext].isCalcPredictPointAng) {
        return
    }
    points[iNext].prevPoint = points[iPrev].point
    points[iNext].distanceToNextPoint = points[iPrev].point.distXY(points[iNext].point)
    const ang = points[iPrev].point.angleXY(points[iNext].point)
    if (points[iNext].distanceToNextPoint < tooClose) {
        const predictDistance = points[iNext].distanceToNextPoint * predictDist / tooClose
        points[iNext].predictPoint = points[iNext].point.pointXYByDistAngle(predictDistance, ang)
    } else {
        points[iNext].predictPoint = points[iNext].point.pointXYByDistAngle(predictDist, ang)
    }
}

function calcAllPredictPoint() {
    calcPredictPoint(points.length - 1, 0)
    points[0].isCalcPredictPointAng = true
    for (let i = 1; i < points.length - 1; i++) {
        calcPredictPoint(i - 1, i)
        points[i].isCalcPredictPointAng = true
    }
    calcPredictPoint(points.length - 2, points.length - 1)
    points[points.length - 1].isCalcPredictPointAng = true
    isCalcAllSimplePredictPoint = false
}

function calcAnglePoint() {
    // calc entry point to 90 degree + 500
    // if (iNext2 !== undefined) {
    //     if (points[iNext2].distanceToNextPoint < tooClose) {
    //         const ang1 = points[iPrev].point.angleXY(points[iNext].point)
    //         const ang2 = points[iNext].point.angleXY(points[iNext2].point)
    //         console.error(ang1 - ang2)
    //         if (Math.abs(ang1 - ang2) > 90) {
    //             const d = points[iNext2].distanceToNextPoint * predictDist / tooClose
    //             const a = ang1 - ang2 > 0 ? (ang1 - ang2) - 90 : (ang1 - ang2) + 90
    //             points[iNext].predictPoint = points[iNext].point.pointXYByDistAngle(d, a)
    //         }
    //     }
    // }
}

function calcBoostAndPredictPoint() {
    if (isCalcBoot) {
        return
    }

    const maxD = points.reduce((p, v) => p.distanceToNextPoint < v.distanceToNextPoint
        ? v : p)
    const index = points.findIndex(f => f.distanceToNextPoint === maxD.distanceToNextPoint)
    points[index].isBoost = true
    isCalcBoot = true
}

let points: Array<MovePoint> = []
const tooClose = 3000
const predictDist = 500
let isCalcAllSimplePredictPoint = true
let isCalcBoot = false

function goGoGo(line1: string, line2: string) {
    let inputs: string[] = line1.split(' ')
    let pod = new Point(parseInt(inputs[0]), parseInt(inputs[1]))
    let p2 = new Point(parseInt(inputs[2]), parseInt(inputs[3]))
    let podDistP2: number = parseInt(inputs[4]) // distance to the next checkpoint
    let podAngleP2: number = parseInt(inputs[5]) // angle between your pod orientation and the direction of the next checkpoint
    inputs = line2.split(' ')
    let opponentXY = new Point(parseInt(inputs[0]), parseInt(inputs[1]))

    const go: MovePoint = getPoint(p2)
    go.modifyMove(pod, opponentXY, podDistP2, podAngleP2)
    console.log(`${go.goPoint.x} ${go.goPoint.y} ${go.goPower}`);
    console.error(go, pod, opponentXY, podDistP2, podAngleP2)
}

// goGoGo('0 0 5000 0      5000 0', '0 0')
// goGoGo('0 0 5000 0      5000 0', '0 0')
//
// goGoGo('0 0 4500 1300   1400 0', '0 0')
// goGoGo('0 0 0 0         4500 0', '0 0')
//
// goGoGo('0 0 5000 0      5000 0', '0 0')
//180  -68

// goGoGo('0 0 5000 0      5000 0', '0 0')
// goGoGo('0 0 5000 1300   1300 0', '0 0')
// goGoGo('0 0 0 0         4500 0', '0 0')
//
// goGoGo('0 0 5000 0      5000 0', '0 0')
//180  -90

// goGoGo('5000 0 0 0      5000 0', '0 0')
// goGoGo('0 0 0 1300      1300 0', '0 0')
// goGoGo('0 0 5000 0      4500 0', '0 0')
//
// goGoGo('0 0 0 0         5000 0', '0 0')
//0  -90

goGoGo('0 0 5445 2810      5000 0', '0 0')
goGoGo('0 0 10309 3357      1300 0', '0 0')
goGoGo('0 0 11219 5449      4500 0', '0 0')
goGoGo('0 0 7257 6674      5000 0', '0 0')

goGoGo('0 0 5445 2810      5000 0', '0 0')