import { contents } from "./assets/data/contents";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="grid grid-cols-[80px_1fr] grid-rows-[80px_40px_1fr]">
      <Header />
      <Nav />
      <Tab />
      <main className="w-fulll p-[20px] flex flex-wrap items-start">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </main>
    </div>
  );
}

export default App;
