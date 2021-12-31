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

    modifyMove(pod: Point, opponentXY: Point, nextP: Point, podDistNextP: number, podAngleNextP: number) {
        this.updatePoints(pod, opponentXY, nextP)
        this.goPoint = this.getGoPoint(pod)
        this.goPower = this.getGoPower(pod, opponentXY, podDistNextP, podAngleNextP)
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

    private getGoPower(pod: Point, opponentXY: Point, podDistNextP: number, podAngleNextP: number) {
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
        if (this.prevPoint && !pod.inRange(this.prevPoint, 400) && podDistNextP > 6000
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

const go: MovePoint = new MovePoint()

function goGoGo(line1: string, line2: string) {
    let inputs: string[] = line1.split(' ')
    let pod = new Point(parseInt(inputs[0]), parseInt(inputs[1]))
    let p2 = new Point(parseInt(inputs[2]), parseInt(inputs[3]))
    let podDistP2: number = parseInt(inputs[4]) // distance to the next checkpoint
    let podAngleP2: number = parseInt(inputs[5]) // angle between your pod orientation and the direction of the next checkpoint
    inputs = line2.split(' ')
    let opponentXY = new Point(parseInt(inputs[0]), parseInt(inputs[1]))

    go.modifyMove(pod, opponentXY, p2, podDistP2, podAngleP2)
    console.log(`${go.goPoint.x} ${go.goPoint.y} ${go.goPower}`);
    console.error(go)
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