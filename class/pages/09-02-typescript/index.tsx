export default function TypeScriptPage () {

  
    //타입추론
    let aaa = "안녕하세요"
    aaa=3
 
    //타입명시
    let bbb: string = "ddd"

    //문자타입 (선언과 할당 분리)
    let ccc: string
    ccc="ddd";
    ccc=3


    //숫자타입
    let ddd: number = 10
    ddd="werw"

    //불린
    let eee: boolean = true
    eee = false
    eee = 'false' //js에선 true임 => 자열에 뭐라도 하나 들어가있으면 true기 때문

    //배열
    let fff: number[] = [1,2,3,4,5,"d"]
    let ggg: string[] = ["a","b",10]
    let hhh: (string|number)[] = ["a","b",10]

    //객체
    interface IProfile{
      name: string,
      age: number|string,
      school: string
    }

    const profile: IProfile = {
      name:"dd",
      age: 8,
      school: "ddddd"
    }


    //함수 리턴 타입도 지정 가능
    const add = (n:number,m:number, unit:string):string=>{
      return n+m+unit
    }
    const result = add(1,2,"Ddd")

    //any 타입 => 자바스크립트와 동일
    let qqq: any = 'ddd'
  
  return(
    <div>dsf</div>
  )
}