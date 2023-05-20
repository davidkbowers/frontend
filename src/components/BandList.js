import { MDBListGroup } from 'mdb-react-ui-kit';
import BandItem from "./BandItem";
export function BandList({ bands }) {

    return (
        <MDBListGroup style={{ minWidth: '22rem' }} light>
            {bands.map(band => (
                <BandItem band={band} />
            ))}
        </MDBListGroup>
    );
}
export default BandList;
