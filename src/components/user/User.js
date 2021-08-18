import Address from "../address/Address";
import Company from "../company/Company";

export default function User({item, item: {address}, item: {company}}) {

    return (
        <div>
            <h2>id: {item.id}</h2>
            <h2>Name: {item.name}</h2>
            <p>username: {item.username}</p>
            <p>email: {item.email}</p>
            <Address address={address}/>
            <p>phone: {item.phone}</p>
            <p>website: {item.website}</p>
            <Company company={company}/>
        </div>
    )
}