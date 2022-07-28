import home from '@/view/home.vue'
console.log(home);

export function a() {
    console.log(
        '1'
    );
}
export class Car { 
    // 字段 
    x:number
    y:number
    div:HTMLDivElement
    // 构造函数 
    constructor(x:number,y:number,div:HTMLDivElement) { 
        this.x = x 
        this.y = y
        this.div = div
    }  
    // 方法 
    left():void { 
       this.x-=10
       this.div.style.left=this.x+'px'
    } 
    right():void { 
       this.x+=10
       this.div.style.left=this.x+'px'
    } 
    top():void { 
       this.y-=10
       this.div.style.top=this.y+'px'
    } 
    down():void { 
       this.y+=10
       this.div.style.top=this.y+'px'
    } 
}
export  function KEY(obj:any){
    window.addEventListener("keydown", function(e) {
           switch (e.key) {
                   case 'ArrowUp':
                           obj.top()
                           break;
           
                   case 'ArrowDown':
                           obj.down()
                           break;
           
                   case 'ArrowRight':
                           obj.right()
                           break;
           
                   case 'ArrowLeft':
                           obj.left()
                           break;
           
                   default:
                           break;
           }
})
}

export function routerPath(a:any,b:number):void{
a.push(`/TWO/${b}`)
}
