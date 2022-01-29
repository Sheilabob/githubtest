import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

    function FirstTest() {
    
        return (
            <>
                <Card className="m-1">
                    <div className="container">
                        <div className="row">
                    <div className="col text-left">
                    <CardTitle>
                    <h2>Hello and Welcome!</h2>  
                    </CardTitle>
                    <CardBody>
                        <p>If you are here, I hope it's because you love music! I have been teaching piano lessons since 1996.  I currently teach elementary music at HMK Elementary School in Moab, UT.  Helping students become better musicians and enrich their lives is my passion.  Read more below!</p>
                        <h3>- Ms. Sheila</h3>
                    </CardBody>
                    </div>
                    </div>
                    </div>
                </Card>
            </>
        );
    }
    
    export default FirstTest;