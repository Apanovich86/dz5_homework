export default function Geo({geo, geo: {lat, lng}}) {
    return (
        <div>
            <p>Geo:</p>
            <i>
                - lat: {lat} <br/> - lng: {lng}
            </i>
        </div>
    )
}