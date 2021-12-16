import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { CounterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter);
  const incrementHandler = () => {
    dispatch(CounterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(CounterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(CounterActions.toggle());
  };
  const increaseHandler = () => {
    dispatch(CounterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase By 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// import { Component } from "react";
// import { connect } from "react-redux";
// import classes from "./Counter.module.css";

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){

//   }
//   render(){
//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//               <button onClick={this.incrementHandler.bind(this)}>increment</button>
//               <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//           </main>
//         );
//   }
// }

// const mapStateToProps=(state)=>{
//   return {
//     counter:state.counter
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     increment:()=>dispatch({type:'increment'}),
//     decrement:()=>dispatch({type:'decrement'})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
