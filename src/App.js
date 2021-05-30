import React from 'react';
import { useSelector } from 'react-redux'

function App() {

  const bookmarks = useSelector(store => store.bookmarks)



  return (
    <div>
      Hello, world!
    </div>
  );
}

export default App;
