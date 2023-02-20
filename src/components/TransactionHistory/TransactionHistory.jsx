import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css';
import {
  Table,
  HeaderTable,
  StringData,
  DataCell,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderTable>Type</HeaderTable>
          <HeaderTable>Amount</HeaderTable>
          <HeaderTable>Currency</HeaderTable>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <StringData key={id}>
            <DataCell>{type}</DataCell>
            <DataCell>{amount}</DataCell>
            <DataCell>{currency}</DataCell>
          </StringData>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
