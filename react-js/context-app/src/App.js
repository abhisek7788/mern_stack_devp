
import './App.css';
// import { createContext,useContext, useState} from 'react';
// import ChildA from'./component/ChildA';
import Counter from './Counter';
import Counter1 from './assignment/Counter1'
import Form from './assignment/Form';
import Theme from './assignment/Theme';

//step-1: create context
// const Usercontext=createContext();
// const Themecontext=createContext();

//step-2: wrap all the child inside a provider
//step-3: pass the value
//step-4: consume the value in the respective place

function App() {
  // const[user,setuser]=useState({name:"web"})
  // const[theme,settheme]=useState('light')
  return (
    <div className="App">
      {/* <Usercontext.Provider value={user}>
        <ChildA/>
      </Usercontext.Provider> */}

      {/* <Themecontext.Provider value={{theme,settheme}}>
        <div id='container' style={{backgroundColor:theme==='dark'?'beige':'black'}}>
          <ChildA/>
        </div>
      </Themecontext.Provider> */}
      <Counter/>
      <Counter1/>
      <Form/>
      <Theme/>
    </div>
  );
}
// export {Usercontext};
// export {Themecontext};
export default App;
