import './App.css';
import Graph from './componets/Graph';
import Form from './componets/Form';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounder">Expense Tracker</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {/* chart */}
        <Graph></Graph>
        {/* form */}
        <Form></Form>
      </div>
      </div>
    </div>
  );
}

export default App;
