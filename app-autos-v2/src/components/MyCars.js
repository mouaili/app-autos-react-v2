import React, { Component } from 'react';
import Car from './Car';

class MyCars extends Component {
  state = {
    cars: [
      { name: 'Ford', color: 'green' },
      { name: 'Mercedes', color: 'red' },
      { name: 'Peugeot', color: '' },
    ],
  };

  render() {
    console.log(this.state);
    const { title, color } = this.props;

    return (
      <div>
        <h1 style={{ color: `${color}` }}>{title}</h1>

        {this.state.cars &&
          this.state.cars.map((car, index) => {
            return <Car color={car.color}>{car.name}</Car>;
          })}
      </div>
    );
  }
}
export default MyCars;
