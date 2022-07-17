export default function TypeScriptPage () {
  interface IProfile{
    name: string,
    age: number,
    school: string,
    hobby?: string,
  }
  //1. Pick 타입 // 복사
  type IProfile2 = Pick<IProfile, "name" | "age"> 

  //2. Omit 타입 => 특정만 삭제
  type IProfile3 = Omit<IProfile,"school">

  //3. Partial 타입 => 모두 ?추가하는것
  type IProfile4 = Partial<IProfile>

  //4. Required 타입 => 모두 필수 
  type IProfile5 = Required<IProfile>


  //5. Record 타입 => Union 타입(합짐합)
  type zzz = "aaa" | "qqq" | "rrr" 

  let apple:zzz
  apple="aaa"
  type IProfile6 = Record<zzz, IProfile>


  /*
  type vs interface 선언병합 차이
  */
 interface IProfile{
  candy: number
 }
 let profile: IProfile

 
 //type에서는 안됨




  return(
    <div>dsf</div>
  )
}