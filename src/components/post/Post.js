export default function Post({item}) {
    return (
        <div>
            <h2>userId: {item.userId}</h2>
            <h2>id: {item.id}</h2>
            <p>title: {item.title}</p>
            <p>body: {item.body}</p>
        </div>
    );
}