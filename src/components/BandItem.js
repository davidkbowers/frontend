import { MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';
export function BandItem({ band }) {
    let imchecked = (band.selected == true)?"checked":"";
    return (
        <MDBListGroupItem>
            <MDBCheckbox {imchecked} inline value={band.id} />
            {band.name}
        </MDBListGroupItem>
    );
}
export default BandItem;
