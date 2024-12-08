import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    animationDuration: 1000,
    infinite: false,
  };

  handleItemWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ itemWidth: +event.target.value });
  };

  handleFrameSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ frameSize: +event.target.value });
  };

  handleStep = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ step: +event.target.value });
  };

  handleAnimationDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ animationDuration: +event.target.value });
  };

  handleInfinite = () => {
    this.setState(prevState => ({ infinite: !prevState.infinite }));
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        {/*  {/* eslint-disable-next-line */}

        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <Carousel
          images={this.state.images}
          itemWidth={this.state.itemWidth}
          frameSize={this.state.frameSize}
          step={this.state.step}
          animationDuration={this.state.animationDuration}
          infinite={this.state.infinite}
        />

        <div className="ItemWidth">
          <label className="ItemWidth">{`current item width ${this.state.itemWidth}`}</label>
          <input
            type="number"
            value={this.state.itemWidth}
            onChange={this.handleItemWidth}
            min={75}
            max={189}
          />
        </div>

        <div className="frameSize">
          <label className="frameSize">{`current frame Size is ${this.state.frameSize}`}</label>
          <input
            type="number"
            value={this.state.frameSize}
            onChange={this.handleFrameSize}
            min={1}
            max={images.length}
          />
        </div>

        <div className="step">
          <label className="step">{`current step is ${this.state.step}`}</label>
          <input
            type="number"
            value={this.state.step}
            onChange={this.handleStep}
            min={1}
            max={images.length}
          />
        </div>

        <div className="animationDuration">
          <label>{this.state.animationDuration}</label>
          <input
            type="number"
            value={this.state.animationDuration}
            onChange={this.handleAnimationDuration}
            step={100}
            min={100}
            max={5000}
          />
        </div>

        <div className="infinite">
          <label htmlFor="1">Infinite</label>
          <input
            id="1"
            type="checkbox"
            checked={this.state.infinite}
            onChange={this.handleInfinite}
          />
        </div>
      </div>
    );
  }
}

export default App;
