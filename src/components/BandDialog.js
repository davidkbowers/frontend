import BandList from "./BandItemList";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import {useState} from "react";

export function BandDialog({bands}) {
    const [scrollableModal, setScrollableModal] = useState(false);

    return (
        <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
            <MDBModalDialog scrollable>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Select Your Bands</MDBModalTitle>
                        <MDBBtn
                            className='btn-close'
                            color='none'
                            onClick={() => setScrollableModal(!scrollableModal)}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <BandList bands={bands} />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                            Close
                        </MDBBtn>
                        <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}
export default BandDialog;

