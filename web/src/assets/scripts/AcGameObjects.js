const AC_GAME_OBJECTS = [];

export class AcGameobject{
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() {   //只执行一次

    }

    updated() { //每一帧执行一次，除了第一帧之外
        
    }

    on_destroy() {

    }

    destroyed() {
        this.on_destroy(); 
        for (let i in AC_GAME_OBJECTS){
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
        }
           }
    }
}

let last_timestamp; //上一次执行时间
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.updated();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step)