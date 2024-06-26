import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  // this dispatches an action against the redux store no args required 
  const dispatch = useDispatch();

  // we use the useselector to retrive a part of the overrall obj 
  //redux will automatically set up a subscription to the store through this comp when you use useSelector
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)


  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))  //the tookit generates a unique identifier, then the input value as arg will be stored in an extra field named payload: 10 
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>Add 10</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;


// // here we work with class based comps 
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {

//   }

//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind()}>-</button>
//           <button onClick={this.incrementHandler.bind()}>+</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind()}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// // this maps the redux state to props 
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment'}),
//     decrement: () => dispatch({ type: 'decrement'}),
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
