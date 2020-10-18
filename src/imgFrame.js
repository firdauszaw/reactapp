import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'

export default class MasksPage extends React.Component{
    render(){
        return (
            <>
                <MDBContainer className = "mt-5">
                    <MDBRow className="mb-4">
                        <MDBCol md="8">
                            <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}