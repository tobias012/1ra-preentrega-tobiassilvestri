import ItemListContainer from './components/ItemListContainer';
import './App.css';
import NavBar from './components/NavBar';
import Bot from './components/Bot';

export default function App() {
  return (
    <>
      <NavBar />
      <main className="cuerpo-mid mid">
        <ItemListContainer greeting={<h1 className='Titulo'> Tienda ZiZou </h1>} />
        <Bot></Bot>
      </main>
    </>

  );}