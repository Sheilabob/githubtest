import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import { Card, CardImg, CardTitle, CardBody, Collapse, CardHeader, Button, Accordion, AccordionItem, AccordionHeader } from 'reactstrap';


function ReactBootstrapAccordion() {

    // const [toggleLevel1, setTogglelevel1] = useState();
    // const [toggleLevel2, setTogglelevel2] = useState();


    return (<div>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

{/* <div>
  <Accordion
    flush
    toggle={function noRefCheck(){}}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionItem accordionId="1">
        <strong>
          This is the first item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="2">
        Accordion Item 2
      </AccordionHeader>
      <AccordionItem accordionId="2">
        <strong>
          This is the second item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="3">
        Accordion Item 3
      </AccordionHeader>
      <AccordionItem accordionId="3">
        <strong>
          This is the third item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
  </Accordion>
</div> */}

{/* <div className="container m-2">
<div className="row">
    <div className="col">
<Card>
<CardHeader onClick={() => setTogglelevel1(0)}><h1>Header</h1></CardHeader>
<Collapse isOpen={toggleLevel1 === 0 ? false: false}></Collapse>
</Card>
<Card>
<CardHeader onClick={() => setTogglelevel1(1)}>
    <h2>Question 1</h2>
</CardHeader>
<Collapse isOpen={toggleLevel1 === 1 ? true: false}>
<CardBody>
<p>Answer to question</p>
</CardBody>
</Collapse>
</Card>
<Card>
<CardHeader onClick={() => setTogglelevel1(2)}>
    <h2>Question 2</h2>
</CardHeader>
<Collapse isOpen={toggleLevel1  === 2 ? true: false}>
<CardBody>
<p>Answer to question</p>
</CardBody>
</Collapse>
</Card>
<Card>
<CardHeader onClick={() => setTogglelevel1(3)}>
    <h2>Question 3</h2>
</CardHeader>
<Collapse isOpen={toggleLevel1 === 3 ? true: false}>
<CardBody>
    <p>Answer to question</p>
</CardBody>
</Collapse>
</Card>
</div>
</div>
</div> */}

    </div>);
  };
  
  export default ReactBootstrapAccordion;