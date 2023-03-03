import { createContext, useContext,useState, useEffect} from 'react'
import {api} from '../services/api'
export const AuthContext = createContext({})

function AuthContextProvider({children}) {
  const [data, setData] = useState({})

  async function signIn({email,password}) {


    try{

      const response = await api.post('/sessions', {email, password}) 
      const {token, user} = response.data
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
        localStorage.setItem("@rocketMovie:user", JSON.stringify(user))
        localStorage.setItem("@rocketMovie:token", token)


        setData({token,user})
      } 
      catch(error) {
        console.log(error); 
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro desconhecido');
        }
      }

  }

  async function logOut() {
  const token = localStorage.removeItem("@rocketMovie:token")
  const user = localStorage.removeItem("@rocketMovie:user")

  setData({})
  }


  async function updateUser({user, avatarFile}) {

    try{

      if(avatarFile) {
       const fileUploadForm = new FormData()
       fileUploadForm.append("avatar", avatarFile)
       
    
       const response = await api.patch('/users/avatar', fileUploadForm)
       
       user.avatar = response.data.avatar
      
      }
      await api.put('/users', user)

      localStorage.setItem("@rocketMovie:user", JSON.stringify(user))

         setData({user, token: data.token})
         alert('Perfil atualizado')


    } catch(error) {
      console.log(error); 
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Erro desconhecido');
      }
    }

  }
  
  useEffect(()=> {
    const token = localStorage.getItem("@rocketMovie:token")
    const user = localStorage.getItem("@rocketMovie:user")

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })

    }
  }, []) 

  return(
    <AuthContext.Provider value = {{signIn, user: data.user ,logOut, updateUser}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {

const context = useContext(AuthContext)
return context
}




export {AuthContextProvider, useAuth  }