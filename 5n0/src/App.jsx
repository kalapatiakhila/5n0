import  Conditional from "./Conditional";
import  ButtonClick from "./ButtonClick";
import Counter1 from "./Counter1";
import Counter from "./Counter";
function App(){
    const message1 = "Hello, Welcome to React.js!";
    const message2 = 'This is a string literal.';
    const message3 = `React makes web development easier.`;
    return (
        <div>
            <Counter/>
            <Counter1/>
            <ButtonClick/>
            <Conditional/>
            <h1>Displaying String Literals</h1>
            <p>{message1}</p>
            <p>{message2}</p>
            <p>{message3}</p>
            <nav>
             <h2>My Navbar</h2>
            </nav>
        </div>
    );
}
export default App;
