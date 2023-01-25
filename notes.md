### Diferença entre EXPORT DEFAULT e export normal, IMPORT {entre chaves} IMPORT normal
Quando tem export default você pode escolher o nome do import 

- EXPORT DEFAULT IMPORT NORMAL

Em um arquivo theme.js
```javascript
export default {
  COLORS: {
    BACKGROUND_400: "#312E38",
    BACKGROUND_300: "#1C1B1E",
    BACKGROUND_200: "#262529",
    BACKGROUND_100: "#948F99",

    SALMON: "#FF859B",
    
    GRAY_100: "#E5E5E5",
    GRAY_200: "#F4EDE8",
    GRAY_300: "#CAC4CF",
    GREY_400: "#FF002E"
  }
}
```
Neste caso, você pode importar sem chaves e com o nome que quiser 
```javascript
import theme from './theme.js'
```
- EXPORT NORMAL IMPORT ENTRE CHAVES
```javascript
export function Home({title, ...rest}) {
  return(
   
 <Container title = {title}>
        <h1>`Hello world`</h1> 
    </Container>

  )
};
```
Aqui temos que colocar entre chaves com o mesmo nome que você atribuiu a constante ou a função
```javascript
import {Home} from './pages/Home'
```
