import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [punks, setPunks] = useState(data)

  return (
    <main>
    <section className="container">
      <h3>{punks.length} Crypto Punks</h3>
      <List punks={punks} />
      <button onClick={() => setPunks([])}>Clear All</button>
    </section>
  </main>
  )
}

export default App;
