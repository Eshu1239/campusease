function Activity() {

    const [score, setScore] = React.useState(70);

    return (
        <div className="card p-4 mx-auto" style={{maxWidth:"400px"}}>

            <h3>🌱 Your Campus Activity</h3>

            <h4>{score}%</h4>

            <p>Events Joined: 5</p>
            <p>Clubs Joined: 2</p>

            <button
                className="btn btn-success"
                onClick={() => setScore(score + 5)}
            >
                Join Event +5
            </button>

        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root"))
    .render(<Activity />);