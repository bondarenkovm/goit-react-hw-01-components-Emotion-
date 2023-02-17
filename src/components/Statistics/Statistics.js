import PropTypes from 'prop-types';

import { Section, List, Item, Label, Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <h2>{title}</h2>}

      <List>
        {stats.map(({ label, id, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
}
Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
