import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Login = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    const handleLogin = async () => {
      if(email && password) {
        const isLogged = await auth.signin(email, password)
        if(isLogged){
            navigate('/')
        } else {
          alert('Não deu amigo')
        }
      }
    }

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    }
   

  return(
    <div>
      <h2>Página Fechada</h2>

      <input 
          type="text" 
          value={email} 
          onChange={handleEmailInput}
          placeholder="Digite seu e-mail"/>

      <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"/>


      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}