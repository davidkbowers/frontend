import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#21081a' }}>
            <MDBContainer className='p-4'></MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='https://spreadthejam.online/'>
                    SpreadTheJam.online
                </a>
            </div>
        </MDBFooter>
    );
}