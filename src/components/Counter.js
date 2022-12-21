import { Fragment } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)
  const toggle = useSelector((state) => state.toggle)
  const incrementHandler = (value) => {
    dispatch({
      type : 'increment',
      value : value
    })
  }
  const decrementHandler = () => {
    dispatch({
      type : 'decrement'
    })
  }
  const toggleCounterHandler = () => {
    dispatch({
      type : 'toggle'
    })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && (
        <Fragment>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
            <button onClick={incrementHandler.bind(null, 5)}>Increment By 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </Fragment>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
