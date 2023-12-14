import React from 'react';
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import useStatus from '../src/hooks/useStatus';  // Замініть 'path-to-' на відповідний шлях
import useConsoleLog from '../src/hooks/useConsoleLog';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useStatus();
  const productList = [
    { id: 1, name: 'Картопля', isSelected: false, comments: [] },
    { id: 2, name: 'Киртопля', isSelected: false, comments: [] },
    { id: 3, name: 'Куртопля', isSelected: false, comments: [] },
  ];

  useConsoleLog(isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
          <Body productList={productList} />
        </div>
      ) : (
        <div>
          <Header isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
        </div>
      )}
    </div>
  );
};

export default App;
