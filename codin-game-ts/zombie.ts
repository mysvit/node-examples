class Zombie {

    public static kill() {
        function readline() {
            return ''
        }

        // game loop
        while (true) {
            var inputs: string[] = readline().split(' ');
            const x: number = parseInt(inputs[0]);
            const y: number = parseInt(inputs[1]);
            const humanCount: number = parseInt(readline());
            console.error(humanCount, x, y);

            const HH = []
            const ZZ = []

            for (let i = 0; i < humanCount; i++) {
                var inputs: string[] = readline().split(' ');
                const humanId: number = parseInt(inputs[0]);
                const humanX: number = parseInt(inputs[1]);
                const humanY: number = parseInt(inputs[2]);
                HH.push({X: humanX, Y: humanY, min: 0, zIndex: 0})
            }
            console.error(HH);

            const zombieCount: number = parseInt(readline());
            for (let i = 0; i < zombieCount; i++) {
                var inputs: string[] = readline().split(' ');
                const zombieId: number = parseInt(inputs[0]);
                const zombieX: number = parseInt(inputs[1]);
                const zombieY: number = parseInt(inputs[2]);
                const zombieXNext: number = parseInt(inputs[3]);
                const zombieYNext: number = parseInt(inputs[4]);
                ZZ.push({X: zombieX, Y: zombieY, NX: zombieXNext, NY: zombieYNext})
            }
            console.error(ZZ);

            // Write an action using console.log()
            // To debug: console.error('Debug messages...');

            let go = {x: x, y: y, min: 0}
            let minH = 0
            // min distance to human
            for (let i = 0; i < HH.length; i++) {
                HH[i].a = Math.abs(x - HH[i].X) + Math.abs(y - HH[i].Y)
                if (go.min < HH[i].a) {
                    minH = i
                    go.x = HH[i].X
                    go.y = HH[i].Y
                    go.min = HH[i].a
                }
            }
            console.error('go', minH, go)

            let goZ
            for (let i = 0; i < HH.length; i++) {
                goZ = {x: 0, y: 0, mX: 16000, mY: 9000}
                ZZ.forEach((z, zIndex) => {
                    let nMinX = Math.abs(z.NX - HH[i].X)
                    let nMinY = Math.abs(z.NY - HH[i].Y)
                    if (Math.abs(z.X - HH[i].X) + Math.abs(z.Y - HH[i].Y) > nMinX + nMinY) {
                        if (goZ.mX + goZ.mY >= nMinX + nMinY) {
                            goZ.x = z.NX
                            goZ.y = z.NY
                            goZ.mX = nMinX
                            goZ.mY = nMinY
                            HH[i].min = nMinX + nMinY
                            HH[i].zIndex = zIndex
                        }
                    }
                })
                console.error('HH', HH[i])
            }
            console.error('goZ', goZ);

            HH.sort((a, b) => (a.a - a.min) - (b.a - b.min))
            let z = HH[0].zIndex
            console.log(`${ZZ[z].NX} ${ZZ[z].NY}`)

            // console.log('0 0');     // Your destination coordinates

        }

    }
}
