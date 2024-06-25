import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // this dispatches an action against the redux store no args required 
  const dispatch = useDispatch();

  // we use the useselector to retrive a part of the overrall obj 
  //redux will automatically set up a subscription to the store through this comp when you use useSelector
  const counter = useSelector(state => state.counter);


  const incrementHandler = () => {
    dispatch({ type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
