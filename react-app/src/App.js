import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderProp from './components/CounterRenderProp';
import ComponentC from './components/ComponentC';
import UserContext, { UserProvider } from './components/userContext';
import PostList from './httpcomponent/PostList';
import PostForm from './httpcomponent/PostForm';
import ClassCounter from './hookComponent/ClassCounter';
import HookCounter from './hookComponent/HookCounter';
import HookCounterTwo from './hookComponent/HookCounterTwo';
import HookCounterThree from './hookComponent/HookCounterThree';
import HookCounterFour from './hookComponent/HookCounterFour';
import ClassCounterOne from './hookComponent/ClassCounterOne';
import HookCounterOne from './hookComponent/HookCounterOne';
import ClassMouse from './hookComponent/ClassMouse';
import HookMouse from './hookComponent/HookMouse';
import MouseContainer from './hookComponent/MouseContainer';
import IntervalClassCounter from './hookComponent/IntervalClassCounter';
import IntervalHookCounter from './hookComponent/IntervalHookCounter';
import DataFetching from './hookComponent/DataFetching';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// useContext() hook
export const ChannelContext = React.createContext()

class App extends Component {
  render() {
    return (
      <div className='App'>

        {/* Hooks */}

        {/* useContext */}
        <UserContext.Provider value="Akriti">
          <ChannelContext.Provider value={'Codevolution'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>

        {/* useEffect */}

        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}


        {/* useState */}

        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}





        {/* Post request */}
        {/* <PostForm /> */}

        {/* Get request */}
        {/* <PostList /> */}

        {/* <UserProvider value="Akriti">
          <ComponentC />
        </UserProvider> */}


        {/* ClickCounterTwo and HoverCounterTwo are Render Props
        The count state and incrementCount method from CounterRenderProp component are passed as
        props to ClickCounterTwo and HoverCounterTwo component

        The ClickCounterTwo and HoverCounterTwo make use of
        passed in props to render actual UI */}

        {/* if render is used
        <CounterRenderProp
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterRenderProp
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}

        {/* if render is not used */}
        {/* <CounterRenderProp>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterRenderProp>
        <CounterRenderProp>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterRenderProp> */}

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User name={(isLoggedIn) => isLoggedIn ? 'Akriti' : 'Guest'} />
        <User render={(isLoggedIn) => isLoggedIn ? 'Akriti' : 'Guest'} /> */}

        {/* <ClickCounter name="Akriti" />
        <HoverCounter /> */}

        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}

        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline />
        <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* Event Handler
        {/* <ClassClick />
        <FunctionClick /> */}

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* Conditional rendering
        <UserGreeting /> */}

        {/* <h1>Functional component</h1>
        <Greet name="Bruce" heroName="Batman">
          <p>This is children prop</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <h1>Class component</h1>
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
        {/* <Hello /> */}
        {/* State */}

        {/* <Message /> */}

        {/* For Destructuring
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" /> */}


        {/* For setState
        <Counter /> */}

      </div>
    );
  }
}

export default App;
