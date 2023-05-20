import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter
} from 'mdb-react-ui-kit';
import {useState} from "react";

export function ArticleItem({ article }) {
    const dlgid = "articleDialog" + {this:article.id};
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <div>
        <MDBCard>
            <MDBCardImage src={article.main_image} position='top' alt={article.headline} />
            <MDBCardBody>
                <MDBCardTitle>{article.headline}</MDBCardTitle>
                <MDBCardText>
                    <p>Published: {article.date_published}</p>
                    <p>{article.description}</p>
                </MDBCardText>
                <MDBBtn  onClick={toggleShow}>View Full Article</MDBBtn>
            </MDBCardBody>
        </MDBCard>
            <MDBModal id={dlgid} show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Spread The Jam</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>...
                            <iframe loading="lazy" src={article.url} title={article.id} name="iFrame Name" scrolling="Yes" height="800px"
                                    width="100%" style={{border: 'none'}}></iframe>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}
export default ArticleItem;
