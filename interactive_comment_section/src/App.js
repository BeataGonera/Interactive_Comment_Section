import './App.css';
import { CommentBox } from './components/CommentBox/CommentBox.style'
import { Wrapper } from './components/Wrapper/Wrapper.style'
import { CounterContainer } from './components/CounterContainer/CounterContainer.style'
import { CommentTextContainer } from './components/CommentTextContainer/CommentTextContainer.js'
import { Counter } from './components/Counter/Counter.js'



function App() {
  return (
    <div className="App">
      <Wrapper>
        <CommentBox>
          <CounterContainer>
            <Counter />
          </CounterContainer>
          <CommentTextContainer />
        </CommentBox>
      </Wrapper>
    </div>
  );
}

export default App;
