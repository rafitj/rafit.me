import React, { Component } from "react";
import "../../../assets/styles/home.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const textArray = [
  <p key="t1">
    <span role="img" aria-label="emoji">
      👨‍💻
    </span>{" "}
    SWE Intern at Setter{" "}
    <span role="img" aria-label="emoji">
      👨‍💻
    </span>
  </p>,
  <p key="t2">
    <span role="img" aria-label="emoji">
      ⚽
    </span>{" "}
    Football Fanatic and Madridista{" "}
    <span role="img" aria-label="emoji">
      🏆
    </span>
  </p>,
  <p key="t3">
    <span role="img" aria-label="emoji">
      😍
    </span>{" "}
    Python x Go x TypeScript x C++{" "}
    <span role="img" aria-label="emoji">
      😍
    </span>
  </p>,
  <p key="t4">
    <span role="img" aria-label="emoji">
      🤖
    </span>{" "}
    Distributed Computing & Machine Learning{" "}
    <span role="img" aria-label="emoji">
      🤖
    </span>
  </p>,
  <p key="t5">
    <span role="img" aria-label="emoji">
      🎥
    </span>{" "}
    Movies,{" "}
    <span role="img" aria-label="emoji">
      🎨
    </span>
    Graphic Design and{" "}
    <span role="img" aria-label="emoji">
      🍔
    </span>
    Food
  </p>,
  <p key="t6">
    <span role="img" aria-label="emoji">
      🎯
    </span>{" "}
    Putting Tech in Everyone's Hands{" "}
    <span role="img" aria-label="emoji">
      🎯
    </span>
  </p>,
  <p key="t7">
    <span role="img" aria-label="emoji">
      🎒
    </span>{" "}
    Software Engineering at the University of Waterloo{" "}
    <span role="img" aria-label="emoji">
      🎒
    </span>
  </p>
];
const smallTextArray = [
  <p key="t1">
    <span role="img" aria-label="emoji">
      👨‍💻
    </span>{" "}
    SWE Intern at Setter{" "}
    <span role="img" aria-label="emoji">
      👨‍💻
    </span>
  </p>,
  <p key="t2">
    <span role="img" aria-label="emoji">
      ⚽
    </span>{" "}
    Football Fan ~ Madridista{" "}
    <span role="img" aria-label="emoji">
      🏆
    </span>
  </p>,
  <p key="t3">
    <span role="img" aria-label="emoji">
      😍
    </span>{" "}
    Python x Go x TS x C++{" "}
    <span role="img" aria-label="emoji">
      😍
    </span>
  </p>,
  <p key="t4">
    <span role="img" aria-label="emoji">
      🤖
    </span>{" "}
    Distributed Comp + ML {" "}
    <span role="img" aria-label="emoji">
      🤖
    </span>
  </p>,
  <p key="t5">
    <span role="img" aria-label="emoji">
      🎥
    </span>{" "}
    Film{" "}
    <span role="img" aria-label="emoji">
      🎨
    </span>{" "}
    Design &{" "}
    <span role="img" aria-label="emoji">
      🍔
    </span>
    Food
  </p>,
  <p key="t6">
    <span role="img" aria-label="emoji">
      🎯
    </span>{" "}
    Global Tech{" "}
    <span role="img" aria-label="emoji">
      🎯
    </span>
  </p>,
  <p key="t7">
    <span role="img" aria-label="emoji">
      🎒
    </span>{" "}
    SE at the UWaterloo{" "}
    <span role="img" aria-label="emoji">
      🎒
    </span>
  </p>
];
class HomeText extends Component {
  state = {
    textIdx: 0,
    array: textArray
  };
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions);
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 5000);
  }

  updateDimensions = () => {
    if (window.innerWidth < 650) {
      this.setState({ array: smallTextArray });
    } else {
      this.setState({ array: textArray });
    }
  };
  componentWillUnmount() {
    clearInterval(this.timeout);
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const onClickHandler = () => {
      this.setState({ textIdx: this.state.textIdx + 1 });
    };
    let textThatChanges = this.state.array[
      this.state.textIdx % this.state.array.length
    ];
    return (
      <div className="text-display-home" onClick={onClickHandler}>
          <TransitionGroup>
          <CSSTransition
          timeout = {1000}
            key={this.state.textIdx}
            classNames="messageout"
          >
                    {textThatChanges}
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default HomeText;
