export default function Profile(props) {
    return (
        <div id="profile-card">
            <img src={props.image} alt="profile photo" />
            <div className="profile-text">
                <h2>{props.title}</h2>
                <p>{props.bio}</p>
            </div>
        </div>
    )
}