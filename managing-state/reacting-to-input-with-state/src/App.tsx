import './App.css';
import Form from './Form';

let statuses = ['empty', 'typing', 'submitting', 'error']
function App() {
  return (
    <div className="App">
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </div>
  );
}

export default App;
