import React, { useState } from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';

const CustomToggle = ({ children, eventKey, isActive }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('Accordion toggled!')
  );

  return (
    <button
      type="button"
      className={`accordion-toggle ${isActive ? 'accordion-toggle--active' : ''}`}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const AccordionItem = ({ item, activeKey }) => (
  <Card>
    <Card.Header>
      <CustomToggle eventKey={item.id.toString()} isActive={activeKey === item.id.toString()}>
        {item.title}
      </CustomToggle>
    </Card.Header>
    <Accordion.Collapse eventKey={item.id.toString()}>
      <Card.Body>{item.content}</Card.Body>
    </Accordion.Collapse>
  </Card>
);

const AccordionView = ({ items }) => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <Accordion
      activeKey={activeKey}
      onSelect={(selectedKey) => setActiveKey(selectedKey)}
    >
      {items.map(item => (
        <AccordionItem key={item.id} item={item} activeKey={activeKey} />
      ))}
    </Accordion>
  );
};

export default AccordionView;