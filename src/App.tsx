import React, { useState } from 'react';

import Modal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/Global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
    </>
  );
}

export default App;
