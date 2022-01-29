import React, { useState } from 'react';
import { Card, CardHeader, Collapse, CardBody } from 'reactstrap';

    function CustomAccordion() {
    
    const [toggleLevel1, setTogglelevel1] = useState();
    const [toggleLevel2, setTogglelevel2] = useState();


        return (
            <div className="container m-2">
            <div className="row">
                <div className="col">
            <Card>
            <CardHeader onClick={() => setTogglelevel1(0)}><h1>Level 1</h1></CardHeader>
            <Collapse isOpen={toggleLevel1 === 0 ? false: false}></Collapse>
            </Card>
            <Card>
            <CardHeader onClick={() => setTogglelevel1(1)}>
                <h2>Cuckoo</h2>
            </CardHeader>
            <Collapse isOpen={toggleLevel1 === 1 ? true: false}>
            <CardBody>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HCyK4T9a4HY" title="Cuckoo" allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_1Rb5z0WT0g?start=149" title="Comp Cuckoo" allowfullscreen></iframe>
                </div>
            </CardBody>
            </Collapse>
            </Card>
            <Card>
            <CardHeader onClick={() => setTogglelevel1(2)}>
                <h2>Lightly Row</h2>
            </CardHeader>
            <Collapse isOpen={toggleLevel1  === 2 ? true: false}>
            <CardBody>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/C3togj0xFPY" title="Lightly Row" allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_1Rb5z0WT0g?start=177" title="Comp Lightly Row" allowfullscreen></iframe>
                </div>
            </CardBody>
            </Collapse>
            </Card>
            <Card>
            <CardHeader onClick={() => setTogglelevel1(3)}>
                <h2>Go Tell Aunt Rhody</h2>
            </CardHeader>
            <Collapse isOpen={toggleLevel1 === 3 ? true: false}>
            <CardBody>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gVXDyt1Ki9A" title="Go tell Aunt Rhody" allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_1Rb5z0WT0g?start=315" title="Comp Rhody" allowfullscreen></iframe>
                </div>
            </CardBody>
            </Collapse>
            </Card>
            </div>
            <div className="col-6">
            <Card>
            <CardHeader onClick={() => setTogglelevel2(0)}><h1>Level 2</h1></CardHeader>
            <Collapse isOpen={toggleLevel2 === 0 ? false: false}></Collapse>
            </Card>
            <Card>
            <CardHeader onClick={() => setTogglelevel2(1)}>
                <h2>Eccosaise</h2>
            </CardHeader>
            <Collapse isOpen={toggleLevel2 === 1 ? true: false}>
            <CardBody>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gGzKm57Gbk4" title="Eccosaise" allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dLMpkRpHg84?start=5" title="Comp Eccosaise" allowfullscreen></iframe>
                </div>
            </CardBody>
            </Collapse>
            </Card>
            <Card>
            <CardHeader onClick={() => setTogglelevel2(2)}>
                <h2>Short Story</h2>
            </CardHeader>
            <Collapse isOpen={toggleLevel2  === 2 ? true: false}>
            <CardBody>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dwF3ka5QLIg" title="Short Story" allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dLMpkRpHg84?start=51" title="Comp Short Story" allowfullscreen></iframe>
                </div>
            </CardBody>
            </Collapse>
            </Card>
            <Card>
            <CardHeader onClick={() => setTogglelevel2(3)}>
                <h2>Happy Farmer</h2>
            </CardHeader>
            <Collapse isOpen={toggleLevel2  === 3 ? true: false}>
            <CardBody>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/eYSCmpFyhc0" title="Happy Farmer" allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dLMpkRpHg84?start=105" title="Comp Happy Farmer" allowfullscreen></iframe>
                </div>
            </CardBody>
            </Collapse>
            </Card>
            </div>
            </div>
            </div>
        );
    }
    
    export default CustomAccordion;