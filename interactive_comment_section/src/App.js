import './App.css';
import { CommentsList } from './components/CommentsList/CommentsList.js';
import { Wrapper } from './components/Wrapper/Wrapper.js'



function App() {
  return (
    <div className="App">
      <Wrapper>
       <CommentsList />
      </Wrapper>
    </div>
  );
}

export default App;
