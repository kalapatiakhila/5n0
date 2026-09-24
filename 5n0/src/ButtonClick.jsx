function ButtonClick() {
    const handleClick = () => {
        alert("Button was clicked!");
    };
    return (
        <div>
            <h1>Button Click Event</h1>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}
export default ButtonClick;
