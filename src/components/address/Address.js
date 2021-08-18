import Geo from '../geo/Geo';
export default function Address({address: {street, city, suite, zipcode, geo}}) {
    return (
        <div>
            <p>Address:</p>
            <i>
                 - street: {street} <br/>
                 - suite: {suite} <br/>
                 - city: {city} <br/>
                 - zipcode: {zipcode};
            </i>
            <Geo geo={geo}/>
        </div>
    );
}