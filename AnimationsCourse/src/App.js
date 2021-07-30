import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onClick={() => {
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
          }}
        >
          toggle
        </button>
        <Transition in={this.state.showBlock} mountOnEnter unmountOnExit timeout={500}>
          {(state) => {
            return (
              <div
                style={{
                  backgroundColor: "red",
                  width: 100,
                  height: 100,
                  margin: "auto",
                  transition: "0.3s ease-in-out",
                  opacity: state === "exiting" ? 0 : 1,
                }}
              >
                {state}
              </div>
            );
          }}
        </Transition>
        {this.state.modalIsOpen ? <Modal closed={this.closeModal} /> : null}
        {this.state.modalIsOpen ? <Backdrop /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
