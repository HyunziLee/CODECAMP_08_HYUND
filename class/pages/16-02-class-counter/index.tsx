import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  // counterUp() {
  //   // console.log(this.state.count);
  //               // 🔺 여기 this는 window
  //   this.setState({
  //     count: 1,
  //   });
  // }

  // render() {
  //   return (
  //     <>
  //       <div>{this.state.count}</div>
  //       <button onClick={this.counterUp.bind(this)}>카운트올리기</button>
  //                                         {/* 🔺 bind(this)를 사용하면, ClassCounterPage의 this가 this.counterUp으로 들어감  */}
  //     </>
  //   );
  // }

  counterUp = () => {
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.counterUp}>카운트올리기</button>
        {/* arrow function쓰면 🔺  counterUp을 의미  */}
      </>
    );
  }
}
