import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { Assets, NewTransactionModal, Transactions } from './pages';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/assets">Assets</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
            <li>
              <Link to="/transactions/new">open modal</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/assets" element={<Assets />} />
          <Route path="/transactions" element={<Transactions />}>
            <Route path="new" element={<NewTransactionModal />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
