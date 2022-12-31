import { AcGameobject } from "./AcGameObjects";
import { Cell } from "./Cell";

export class Snake extends AcGameobject {
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Cell(info.r, info.c)];    //存放蛇的身体，cells[0]存放蛇头

        this.speed = 5;  //蛇每秒走5个格子
    }

    start() {

    }

    updated_move() {
        this.cells[0].x += this.speed * this.timedelta ;
    }

    updated() {
        // this.updated_move();
        this.render();
    }

    render() {
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        for (const cell of this.cells){
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y * L, L / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
