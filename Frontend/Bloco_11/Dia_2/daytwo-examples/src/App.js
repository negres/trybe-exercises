import Greeting from "./Greeting";
import Image from "./Image";

const Title = (props) => {
  return <h1 style={{ color: props.color }}>{props.text}</h1>;
};

// desestruturando
const TitleTwo = ({ color, text }) => {
  return <h1 style={{ color: color }}>{text}</h1>;
};

function App() {
  return (
    <main>
      <Greeting name="Natalia" lastname="Negreiros" />
      <Title color="red" text="My Title colored" />
      <TitleTwo color="blue" text="My TitleTwo colored" />
      <Image
        source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
        alternativeText="Cute cat staring"
      />
    </main>
  );
}

export default App;
