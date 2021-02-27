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

// class ShowTime extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       time : 0
//     }
//   }


//   render(){
//     let {color,message,children} = this.props

//     let style = {
//       border : '2px solid ' + color,
//       width : '50%',
//       minWidth : '300px',
//       margin : '20px auto',
//       padding : '20px',
//       textAlign : 'center',
//       backgroundColor : 'black',
//       color
//     }

//     let btnStyle = {
//       border : '2px solid '+color,
//       padding : '10px 20px',
//       fontSize : '20px',
//       backgroundColor: 'black',
//       color
//     }

//     let update = ()=>{
//       this.setState({time:this.state.time+1});
//     }

//     return (<div style={style}>
//       <h1>{this.state.time}</h1>
//       <h2>{message}</h2>
//       {children}
//       <button onClick={update} style={btnStyle}>Add One</button>
//     </div>)
//   }
// }

// function App(){
//   return (<>
//     <ShowTime message="Hello, World!" color="crimson">
//       <p>I am Md Tazri!</p>
//     </ShowTime>

//     <ShowTime message="Hey, World!" color="purple">
//       <p>Do you know me?</p>
//     </ShowTime>

//     <ShowTime message="Hello, Universe!" color="tomato">
//       <p>Can you here me?</p>
//     </ShowTime>
//   </>)
// }

// export default App;


// change state and create clock

// class ShowTime extends React.Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       time : new Date().toLocaleTimeString('bn-BD')
//     }
//   }

//   render(){
//     let {message,color,children} = this.props;

//     let style = {
//       backgroundColor: 'black',
//       color,
//       width: '50%',
//       minWidth : '300px',
//       margin : '20px auto',
//       padding : '20px',
//       border : '3px solid '+color,
//       textAlign: 'center'
//     }

//     setInterval(()=>{
//       this.setState({time : new Date().toLocaleTimeString('bn-BD')});
//     },1000)

//     return (
//     <div style={style}>
//       <h1>{this.state.time}</h1>
//       <h2>{message}</h2>
//       {children}
//     </div>)
//   }
// }

// function App(){
//   return (<>
//     <ShowTime message="Hello, Wolrd!" color="purple">
//       <p>I am Md Tazri!</p>
//     </ShowTime>

//     <ShowTime message="Hey, World!" color="crimson">
//       <p>Do you know me?</p>
//     </ShowTime>

//     <ShowTime message="Hello, Universe!" color="tomato">
//       <p>Can you here me?</p>
//     </ShowTime>
//   </>)
// }

// export default App;

// now more learn about state

// class ShowTime extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       count : 0
//     }
//   }
// }

// it equal to 

// class ShowTime extends React.Component{
//   state = {
//     count : 0
//   }

//   addOne = ()=>{
//     // this.setState({
//     //   count : this.state.count +1
//     // })

//     // console.log(this.state.count);

//     // it update asynchronously

//     // this.setState({
//     //   count : this.state.count + 1
//     // },()=>{
//     //   console.log(this.state.count);
//     // })

//     this.setState((state,props)=>{
//       console.log(">>>> First CallBack <<<<");
//       console.log(state,props);
//       console.log(">>>> End First CallBack <<<<")
//       return {
//         count : state.count + 1
//       }
//     },()=>{
//       console.log("Sectound CallBack " , this.state.count);
//     })

//   }

//   render(){
//     let {
//       message,
//       color,
//       children
//     } = this.props

//     let divStyle = {
//       color,
//       width: '50%',
//       minWidth : '300px',
//       border : '3px solid '+color,
//       padding: '20px',
//       margin: '20px auto',
//       borderRadius : '10px'
//     }

//     return(
//     <div style={divStyle}>
//       <h1>{this.state.count}</h1>
//       <h2>{message}</h2>
//       {children}
//       <button onClick={this.addOne}> Add One </button>
//     </div>)
//   }
// }

// function App(){
//   return(<>
//     <ShowTime message="Hello, World!" color="purple">
//       <p>I am Md Tazri!</p>
//     </ShowTime>

//     <ShowTime message="Hey, Wolrd!" color="crimson">
//       <p>Do you know me?</p>
//     </ShowTime>

//     <ShowTime message="Hey, Universe!" color="tomato">
//       <p>Can you here me?</p>
//     </ShowTime>
//   </>)
// }

// export default App;

// now learn about mount and unmount method.
// it call lifecycle methods

// there are two life cycle methods
// componentDidMount
// componentWillUnmount

// class ShowTime extends React.Component{
//   state = {
//     time : new Date().toLocaleTimeString('bn-BD')
//   }

//   // set timer id
//   timerId = null

//   // component Did mount. this method work when components mount.
//   componentDidMount(){
//     this.timerId = setInterval(()=>{
//       this.tick()
//     },1000)
//   }

//   // components will unmount. this methods unmount the components.
//   componentWillUnmount(){
//     clearInterval(this.timerId);
//   }

//   tick(){
//     this.setState({
//       time: new Date().toLocaleTimeString('bn-BD')
//     })
//   }

//   render(){

//     let {
//       message,
//       color,
//       children
//     } = this.props;

//     let divStyle = {
//       width : '300px',
//       minWidth : '50%',
//       margin : '20px auto',
//       padding : '20px',
//       border : '2px solid ' + color,
//       color,
//       backgroundColor : 'black',
//       textAlign : 'center'
//     }

//     return(
//     <div style={divStyle}>
//       <h1>{this.state.time}</h1>
//       <h2>{message}</h2>
//       {children}
//     </div>)
//   }

// }

// function App(){
//   return (<>
//     <ShowTime message="Hello, World!" color="crimson">
//       <p>I am Md Tazri.</p>
//     </ShowTime>

//     <ShowTime message="Hey, Wolrd!" color="purple">
//       <p>Do you know me?</p>
//     </ShowTime>

//     <ShowTime message="Hey, Universe!" color="tomato">
//       <p>Can you here me?</p>
//     </ShowTime>
//   </>)
// }

// export default App;

// understanding munt and unmunt


// class Com extends React.Component{
//   state = {
//     count : 0
//   }

//   update = ()=>{
//     this.setState(prevState=>{
//       return {
//         count : prevState.count +1
//       }
//     })
//   }

//   // mount components
//   componentDidMount(){
//     this.con = setInterval(()=>this.update(),1000);
//   }

//   // unmount components
//   componentWillUnmount(){
//     clearInterval(this.con);
//   }

//   render(){
//     let divStyle = {
//       border : '2px solid purple',
//       color: 'red',
//       fontSize: '30px',
//       padding: '20px',
//       textAlign : 'center'
//     }
//     return(
//     <div style={divStyle}>
//       <h1>{this.state.count}</h1>
//     </div>)
//   }
// }

// export default function App(){
//   return(
//   <>
//     <Com />
//   </>
//   );
// }

// how to handaling event in react?

// in react we use event in camelCase syntax

// exmple


// class Con extends React.Component{
//   state = {
//     count : 0
//   }

//   update = ()=>{
//     this.setState(prevState=>{
//       return {
//         count : prevState.count + 1
//       }
//     });
//   }

//   render(){
//     let updateTwo = ()=>{
//       this.update();
//       this.update();
//     }

//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={updateTwo}>Add One</button>
//       </div>
//       )
//   }
// }


// let App = ()=>{
//   return (<>
//     <Con />
//   </>)
// }

// export default App;


// how to prvent default in react


// export default function App(){
//   return(<>
//     <a href="#" onClick={e=>{
//       e.preventDefault();
//       console.log("clicked me");
//     }} >Go to</a>
//   </>)
// }

// toggle button in react

// class ToggleButton extends React.Component{
//   state = {
//     status : true
//   }

//   toggle(){
//     this.setState(prevState=>{
//       return {
//         status : !prevState.status
//       }
//     })
//   }

//   render(){
//     let {
//       on = 'On',
//       off = 'Off',
//       message,
//       color = 'black'} = this.props;

//     let divStyle = {
//       color,
//       border: '2px solid '+color,
//       margin: '20px auto',
//       padding: '20px',
//       textAlign:'center',
//       width: '40%',
//       minWidth:'300px'
//     }

//     let btnStyle = {
//       padding: '10px 20px',
//       backgroundColor : color,
//       color : 'white',
//       border: '2px solid transparent'
//     }

//     return(
//     <div style={divStyle}>
//       <h1>{message}</h1>
//       <button style={btnStyle} onClick={()=>this.toggle()}>
//         {this.state.status ? on : off}
//       </button>
//     </div>
//     )
//   }
// }

// export default function App(){
//   return (
//   <>
//     <ToggleButton 
//       on="ok"
//       off="not ok"
//       message="Hello, World!"
//     />

//     <ToggleButton
//       on="ON"
//       off="OFF"
//       message="Whats Up, World!"
//       color="tomato"
//       />
//   </>)
// }

// class ShowThis extends React.Component{
//   handleClick = ()=>{
//     console.log("This is ",this);
//   }

//   render(){
//     return (
//     <button onClick={this.handleClick}>
//       Click Me
//     </button>
//     )
//   }
// }

// export default function App(){
//   return(<>
//     <ShowThis />
//   </>)
// }

export default function App(){
  return <h1>Hello, World!</h1>
}