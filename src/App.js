import React from 'react';
/**
 * Now understanding jsx.
 * JSX short of JavaScript XML
 * It is one kind of expression.
 */

//  function App(){
//    return (<>
//      <h2>Hello World!</h2>
//    </>)
//  }

//  export default App;

 /**
  * <h1>Hello World!</h2>
  * it call jsx.
  * and it is one kind of syntactic sugar.
  * now what happen behind the scenes 
  */

  /**
   * <h2>Hello World!</h2>
   * see what happen behind the scense this:-
   * React.createElement('h2',null,'Hello Wolrd!');
   */

   // see it real example

  //  let element = React.createElement('h2',null,'Hello World');
  //  console.log(element);

  //  function App(){
  //    return (<>
  //      {element}
  //    </>)
  //  }

  //  export default App;

  // so now what is reaturn <h2>Hello World</h2>?
  // it reaturn a object like below :-

  /**
   * <h2>Hello Wolrd!</h2>
   * {
   * type : 'h2',
   * props:{
   * children: 'Hello Wolrd!'
   * }
   * }
   */

   // now create complex react element

  //  let element = <h2 style={{textAlign: 'center'}}>Hello, <span style={{color: 'crimson'}}>World!</span></h2>

  //  console.log(element);

  //  function App(){
  //    return (<>
  //      {element}
  //    </>)
  //  }

  //  export default App;

  // do it react create element:-

  // let element = React.createElement('h2',{
  //   style: {
  //     textAlign:'center'
  //   }
  // },'Hello,',React.createElement('span',{
  //   style :{
  //     color: 'crimson',
  //   }
  // },'World!'));

  // console.log(element);

  // function App(){
  //   return (<>
  //     {element}
  //   </>)
  // }

  // export default App;

  /**
   * what type of object return this ?
   */

  //  let element = {
  //    type : 'h2',
  //    props : {
  //      style:{
  //        textAlign : 'center'
  //      },
  //      children : ['Hello, ',{
  //        type : 'span',
  //        props : {
  //          style:{
  //            color: 'crimson'
  //          },
  //          children :'World!'
  //        }
  //      }]
  //    }
  //  };

  // it luck to we have jsx;


  // now understand components:-

  // first know what is components?
  // components is small part of website.

// why use components?
// Because components let you split Ui into independent, reuseable pices and think about each piece in isolation.

/**
 * There are two type of components in react.
 * Functional components.
 * Classs type components.
 * Function and class components both have same additional feature.
 */

 // see functional components:-

//  function ShowTime(){
//    let style = {
//      textAlign : 'center',
//      color: 'purple'
//    }

//    let date = new Date().toLocaleTimeString('bn-BD');

//    return(<div style={style}>
//      <h1>{date}</h1>
//      <h2>Hello World!</h2>
//    </div>)
//  }

// call ShowTime inside the App components
//  function App(){
//    return (<>
//      {ShowTime()}
//    </>)
//  }

// and here use syntactic sugar
// function App(){
//   return(<>
//     <ShowTime />
//   </>)
// }

// both work well

//  export default App;

/**
 * Now going to see class type components...
 */

// class ShowTime extends React.Component{
//   render(){
//     let date = new Date().toLocaleTimeString('bn-BD');

//     let style = {
//       color: 'purple',
//       textAlign: 'center'
//     }

//     return (
//     <div style={style}>
//       <h1>{date}</h1>
//       <h2>Hello, World!</h2>
//     </div>) 
//   }
// }

// function App(){
//   return (<>
//     <ShowTime />
//   </>)
// }

// export default App;

/**
 * step of creating class components:-
 * first create class and extends with React.Components.
 * then create render method inside the class.
 * render method most be return jsx which is render on ui.
 * 
 * Notice that:-
 * Every components name start whith capital letter.
 */

 // now learn about props?
 // what is props?
 // props is costomize attribute which use inside the child components.

 // example of props 

//  function ShowTime(props){
//   let style = {
//     textAlign: 'center',
//     color: 'purple'
//   }

//   let date = new Date().toLocaleTimeString('bn-Bd');
  
//   return (
//     <div style={style}>
//       <h1>{date}</h1>
//       <h2>{props.message}</h2>
//     </div>
//   )
//  }

//  function App(){
//    return(<>
//      <ShowTime message="Hello, World!" />
//      <ShowTime message="I Am Md Tazri!" />
//    </>)
//  }

//  export default App;

// if object destructuring use here then, this code look cool.
// function ShowTime({message,color}){
//   let style = {
//     textAlign : 'center',
//     color
//   }

//   let date = new Date().toLocaleTimeString('bn-BD');

//   return (
//   <div style={style}>
//     <h1>{date}</h1>
//     <h2>{message}</h2>
//   </div>)
// }

// function App(){
//   return (
//   <>
//     <ShowTime message="Hello, World!" color="crimson" />
//     <ShowTime message="I am Md Tazri." color="purple" />
//   </>
//   )
// }

// export default App;


// now see how to use props inside the class components:-

// class ShowTime extends React.Component{
//   render(){
//     let {message,color} = this.props;

//     let style ={
//       textAlign : 'center',
//       color
//     }

//     let date = new Date().toLocaleTimeString('bn-BD');

//     return (<div style={style}>
//       <h1>{date}</h1>
//       <h2>{message}</h2>
//     </div>)
//   }
// }

// function App(){
//   return (<>
//     <ShowTime message="Hello, World!" color="crimson" />
//     <ShowTime message="I am Md Tazri!" color="purple" />
//   </>)
// }

// export default App;

/**
 * In class we find the props insdie the class with build in property.
 * In that case we use this keyword.
 */


 /**
  * Now going to learn about state.
  * 
  * What is state?
  * state store variable which variable can be change.
  * 
  * when change state, then react re render which part change of website.
  * 
  * first thing, react element is immutable. it can not be change.
  * but when state change react automaticly render the element which is change.
  * */

  /**
   * state only use class type components.
   * but we can use state inside the function components use react hook.
   * it is another topic.
   */

   // example of state to create clock.

  //  class ShowTime extends React.Component{
  //    constructor(props){
  //      super(props);
  //      this.state = {
  //        time : new Date().toLocaleTimeString('bn-BD')
  //      }
  //    }

  //    render(){
  //      let {message,color} = this.props;

  //      let style = {
  //        textAlign : 'center',
  //        border: '2px solid ' +color,
  //        color,
  //        padding : '20px',
  //        width : '50%',
  //        margin : '20px auto',
  //        backgroundColor: 'black'
  //      }

  //      return(
  //        <div style={style}>
  //         <h1>{this.state.time}</h1>
  //         <h2>{message}</h2>
  //        </div>
  //      )
  //    }
  //  }

  //  function App(){
  //    return(<>
  //     <ShowTime color="crimson" message="Hello, World!" />
  //     <ShowTime color="purple" message="I am Md Tazri!" />
  //     <ShowTime color="tomato" message="and I am students." />
  //    </>)
  //  }

  //  export default App;

  // now see what happen when change state.

function App(){
  return (<>
    <h1>Hello Wolrd!</h1>
  </>)
}

export default App;