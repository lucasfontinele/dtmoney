import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';
import { Input } from '../Input';
import { api } from '../../services/api';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <h2>Cadastrar transação</h2>
      <Container onSubmit={onSubmit}>
        <Input
          placeholder="Nome"
          name="name"
          onChange={event => setTitle(event.target.value)}
        />
        <Input
          placeholder="Valor"
          type="number"
          name="amount"
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <button
            type="button"
            onClick={() => setType('deposit')}
            className={`${type === 'deposit' && 'active deposit'}`}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button
            type="button"
            onClick={() => setType('withdraw')}
            className={`${type === 'withdraw' && 'active withdraw'}`}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <Input
          placeholder="Categoria"
          name="category"
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}