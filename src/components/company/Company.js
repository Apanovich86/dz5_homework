export default function Company({company, company: {name, catchPhrase, bs}}) {
    return (
        <div>
            <p>Company:</p>
            <i>
                - name: {name} <br/> - catchPhrase: {catchPhrase} <br/> - bs: {bs}
            </i>
        </div>
    )
}