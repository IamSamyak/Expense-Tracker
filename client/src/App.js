import './App.css';
import Graph from './componets/Graph';
import Form from './componets/Form';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <div className="grid md:grid-cols-2 gap-4">
        {/* chart */}
        <Graph></Graph>
        {/* form */}
        <Form></Form>
      </div>
    </div>
      <footer className="mt-10 bg-slate-800 text-white py-4 rounded">
        &copy; Akash Kamat 2024
      </footer>
  </div>
  
  );
}

export default App;
