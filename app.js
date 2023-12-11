//iteration-1
const container = document.getElementById('react-container');

// ReactDOM.render("Hello! Welcome to React",container);

// let h1_tag = document.createElement("h1")
// h1_tag.textContent = "Hello! Welcome to my World"
// container.append(h1_tag)

// iteration-2
// function ReactContainer(){

//     let h1_tag1 = React.createElement(
//         'div',
//         {id:"h1-tag"},
//         "Hello!",
//         React.createElement(
//             "div",null,"React is fun"
//             )
//     )
//     return h1_tag1
// }
// ReactDOM.render(ReactContainer() , container)

//iteration-3

class ReactContainer extends React.Component{
    
      render(){
          return React.createElement('div',null,'Heyyy',
          React.createElement('div',null,"Let's rock and roll ")
          );
      }
    
  }
  let reactContainer = React.createElement(ReactContainer)
  ReactDOM.render(reactContainer,container);


