import './App.css'
import TextUpdater from './components/TextUpdater.jsx'
import Button from './components/Button.jsx'
import LoginForm from './components/LoginForm.jsx'
import { Form } from './components/Form.jsx'
import UserCard from './components/UserCard.jsx'

function App() {
  return (
    <>
      <TextUpdater />
      <UserCard name="Suryansh Parashar" email="suryanshparashar2022@vitbhopal.ac.in" />
      <Form />
      <LoginForm />
      <Button />
    </>
  )
}

export default App
