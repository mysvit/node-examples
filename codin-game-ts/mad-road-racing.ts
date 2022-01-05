import {Point} from "./coordinate";

class MovePoint {
    point: Point
    prevPoint: Point
    distanceToNextPoint: number
    predictPoint: Point
    podDistNextP: number

    pod: Point
    opponentXY: Point
    podOpDist: number

    tooClose: number = 3000
    predictDist: number = 500

    isStart: boolean = true
    goPoint: Point
    goPower: string

    modifyMove(pod: Point, opponentXY: Point, nextP: Point, podAngleNextP: number) {
        this.updatePoints(pod, opponentXY, nextP)
        this.goPoint = this.getGoPoint(pod)
        this.goPower = this.getGoPower(pod, opponentXY, podAngleNextP)
    }

    private updatePoints(pod: Point, opponentXY: Point, nextP: Point) {
        if (!this.point) {
            this.prevPoint = pod
            this.point = nextP
        }
        // next point changed
        if (this.point.x !== nextP.x && this.point.y !== nextP.y) {
            this.prevPoint = this.point
            this.point = nextP
        }
        this.distanceToNextPoint = this.prevPoint.distXY(this.point)
        this.podDistNextP = pod.distXY(this.point)
        this.pod = pod
        this.opponentXY = opponentXY
        this.podOpDist = this.pod.distXY(this.opponentXY)
        // calc predict point
        this.calcPredictPoint()
    }

    private calcPredictPoint() {
        const ang = this.prevPoint.angleXY(this.point)
        // for short distance
        if (this.distanceToNextPoint < this.tooClose) {
            const predictDistance = this.distanceToNextPoint * this.predictDist / this.tooClose
            this.predictPoint = this.point.pointXYByDistAngle(predictDistance, ang)
        } else {
            this.predictPoint = this.point.pointXYByDistAngle(this.predictDist, ang)
        }
    }

    private getGoPoint(pod: Point) {
        const pointRange = 550
        if (pod.inRange(this.point, pointRange)) {
            return this.point
        }
        if (pod.inRange(this.prevPoint, pointRange)) {
            const angPrev = pod.angleXY(this.prevPoint)
            const angNext = pod.angleXY(this.point)
        }

        return this.predictPoint
    }

    private getGoPower(pod: Point, opponentXY: Point, podAngleNextP: number) {
        let power = '100'
        if (this.isStart) {
            if (pod.inRange(this.prevPoint, 1000)) {
                return power
            } else {
                this.isStart = false
            }
        }
        // standard close move
        if (this.distanceToNextPoint < this.tooClose) {
            if (pod.inRange(this.point, 1000) || pod.inRange(this.prevPoint, 1000)) {
                power = '20'
            } else {
                power = '90'
            }
        } else {
            // standard long move
            if (pod.inRange(this.point, 1250) || pod.inRange(this.prevPoint, 600)) {
                power = '63'
            }
            if (pod.inRange(this.point, 400) || pod.inRange(this.prevPoint, 200)) {
                power = '40'
            }
        }

        // 'BOOST'
        if (this.prevPoint && !pod.inRange(this.prevPoint, 400) && this.distanceToNextPoint > 6000
            && !pod.inRange(opponentXY, 2000)
            && (Math.abs(podAngleNextP) < 5 || Math.abs(podAngleNextP - 180) < 5)) {
            power = 'BOOST'
        }
        // SHIELD
        if ((pod.inRange(this.point, 400) || pod.inRange(this.prevPoint, 850))
            && pod.inRange(opponentXY, 900)) {
            power = 'SHIELD'
        }
        return power
    }

}

class MovePoint2 {
    point: Point
    prevPoint: Point
    distanceToNextPoint: number
    predictPoint: Point
    podDistNextP: number

    pod: Point
    opponentXY: Point
    podOpDist: number

    tooClose: number = 3000
    predictDist: number = 500

    isStart: boolean = true
    goPoint: Point
    goPower: string

    modifyMove(pod: Point, opponentXY: Point, nextP: Point, podAngleNextP: number) {
        this.updatePoints(pod, opponentXY, nextP)
        this.goPoint = this.getGoPoint(pod)
        this.goPower = this.getGoPower(pod, opponentXY, podAngleNextP)
    }

    private updatePoints(pod: Point, opponentXY: Point, nextP: Point) {
        if (!this.point) {
            this.prevPoint = pod
            this.point = nextP
        }
        // next point changed
        if (this.point.x !== nextP.x && this.point.y !== nextP.y) {
            this.prevPoint = this.point
            this.point = nextP
        }
        this.distanceToNextPoint = this.prevPoint.distXY(this.point)
        this.podDistNextP = pod.distXY(this.point)
        this.pod = pod
        this.opponentXY = opponentXY
        this.podOpDist = this.pod.distXY(this.opponentXY)
        // calc predict point
        this.calcPredictPoint()
    }

    private calcPredictPoint() {
        const ang = this.prevPoint.angleXY(this.point)
        // for short distance
        if (this.distanceToNextPoint < this.tooClose) {
            const predictDistance = this.distanceToNextPoint * this.predictDist / this.tooClose
            this.predictPoint = this.point.pointXYByDistAngle(predictDistance, ang)
        } else {
            this.predictPoint = this.point.pointXYByDistAngle(this.predictDist, ang)
        }
    }

    private getGoPoint(pod: Point) {
        const pointRange = 550
        if (pod.inRange(this.point, pointRange)) {
            return this.point
        }
        if (pod.inRange(this.prevPoint, pointRange)) {
            const angPrev = pod.angleXY(this.prevPoint)
            const angNext = pod.angleXY(this.point)
        }

        return this.predictPoint
    }

    private getGoPower(pod: Point, opponentXY: Point, podAngleNextP: number) {
        let power = '100'
        // if (this.isStart) {
        //     if (pod.inRange(this.prevPoint, 1000)) {
        //         return power
        //     } else {
        //         this.isStart = false
        //     }
        // }
        // // standard close move
        // if (this.distanceToNextPoint < this.tooClose) {
        //     if (pod.inRange(this.point, 1000) || pod.inRange(this.prevPoint, 1000)) {
        //         power = '20'
        //     } else {
        //         power = '90'
        //     }
        // } else {
        //     // standard long move
        //     if (pod.inRange(this.point, 1250) || pod.inRange(this.prevPoint, 600)) {
        //         power = '63'
        //     }
        //     if (pod.inRange(this.point, 400) || pod.inRange(this.prevPoint, 200)) {
        //         power = '40'
        //     }
        // }
        //
        // // 'BOOST'
        // if (this.prevPoint && !pod.inRange(this.prevPoint, 400) && this.distanceToNextPoint > 6000
        //     && !pod.inRange(opponentXY, 2000)
        //     && (Math.abs(podAngleNextP) < 5 || Math.abs(podAngleNextP - 180) < 5)) {
        //     power = 'BOOST'
        // }
        // SHIELD
        if (pod.inRange(opponentXY, 900)) {
            power = 'SHIELD'
        }
        return power
    }

}

const go: MovePoint = new MovePoint()
const go2: MovePoint2 = new MovePoint2()
const points: Array<Point> = []

// move fast
function goGoGo1(pod1: string[], pod2: string[], op1: string[], op2: string[]) {
    let pod1XY = new Point(parseInt(pod1[0]), parseInt(pod1[1]))
    // let speedVector = new Point(parseInt(inputs[2]), parseInt(inputs[3]))
    let pod1AnglePNext: number = parseInt(pod1[4])
    let pIndex: number = parseInt(pod1[5])
    // select closes pod
    let opponentXY = new Point(parseInt(op1[0]), parseInt(op1[1]))
    const op2XY = new Point(parseInt(op2[0]), parseInt(op2[1]))
    if (pod1XY.distXY(opponentXY) > pod1XY.distXY(op2XY)) {
        opponentXY = op2XY
    }
    go.modifyMove(pod1XY, opponentXY, points[pIndex], pod1AnglePNext)
    console.log(`${go.goPoint.x} ${go.goPoint.y} ${go.goPower}`)
    console.error(go)
}

// attack fast
function goGoGo2(pod1: string[], pod2: string[], op1: string[], op2: string[]) {
    let pod2XY = new Point(parseInt(pod2[0]), parseInt(pod2[1]))
    // let speedVector = new Point(parseInt(inputs[2]), parseInt(inputs[3]))
    let pod1AnglePNext: number = parseInt(pod2[4])
    let pIndex: number = parseInt(pod2[5])
    // select closes pod
    let opponentXY = new Point(parseInt(op1[0]), parseInt(op1[1]))
    const op2XY = new Point(parseInt(op2[0]), parseInt(op2[1]))
    if (pod2XY.distXY(opponentXY) > pod2XY.distXY(op2XY)) {
    // if (parseInt(op1[5]) > parseInt(op2[5])) {
        go2.modifyMove(pod2XY, op2XY, opponentXY, pod1AnglePNext)
    } else {
        go2.modifyMove(pod2XY, opponentXY, op2XY, pod1AnglePNext)
    }
    console.log(`${go2.goPoint.x} ${go2.goPoint.y} ${go2.goPower}`)
    console.error(go2)
}

// console.error(readline()) //laps 3
// const count = parseInt(readline())
// for (let i = 0; i < count; i++){
//     const p = readline().split(' ')
//     points.push(new Point(parseInt(p[0]), parseInt(p[1])))
// }

// game loop
// while (true) {
//     let pod1: string[] = readline().split(' ')
//     let pod2: string[] = readline().split(' ')
//     let op1: string[] = readline().split(' ')
//     let op2: string[] = readline().split(' ')
//     goGoGo1(pod1, pod2, op1, op2)
//     goGoGo2(pod1, pod2, op1, op2)
//     console.error(points)
//     console.error(pod1)
//     console.error(pod2)
// }


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

// goGoGo('0 0 5445 2810      5000 0', '0 0')
// goGoGo('0 0 10309 3357      1300 0', '0 0')
// goGoGo('0 0 11219 5449      4500 0', '0 0')
// goGoGo('0 0 7257 6674      5000 0', '0 0')
//
// goGoGo('0 0 5445 2810      5000 0', '0 0')