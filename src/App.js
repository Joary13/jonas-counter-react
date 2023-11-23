import { useState } from 'react';

function App() {
  return (
    <main>
      <Counter />
    </main>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>{'-'}</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>{'+'}</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>{'-'}</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>{'+'}</button>
      </div>
      <p>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </p>
    </>
  );
}

export default App;
