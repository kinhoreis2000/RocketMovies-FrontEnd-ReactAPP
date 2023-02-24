import { createContext, useContext,useState} from 'react'
import {api} from '../services/api'
export const AuthContext = createContext({})


function AuthContextProvider({children}) {
  const [data, setData] = useState({})
  async function signIn({email,password}) {


    try{
      const response = await api.post('/sessions', {email, password}) 
      const {token, user} = response.data
        api.defaults.headers.authorization = `Bearer ${token}`
        setData({user, token})

      } 
      catch(error) {
        console.log(error); // Mostra o erro no console
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro desconhecido');
        }
      }

  }

  
  console.log('User do sigin:', data.user)


  return(
    <AuthContext.Provider value = {{signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {

const context = useContext(AuthContext)
return context
}




export {AuthContextProvider, useAuth  }