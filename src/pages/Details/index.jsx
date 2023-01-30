import {Container} from './styles'

import {Header} from '../../components/Header'

import {MovieData} from '../../components/Movie/MovieData.jsx'

export function Details({data, ...rest}) {
  return(
    <Container >
    <Header/>
    <MovieData data={
            {title:'Xerisclayde', 
            rate:'2',
            updated_at:' 22/10/2022 às 8h:00',
            tags: [
              {id:'1',name: 'Ficção Científica'},
              {id:'2',name: 'Terror'},
              {id:'3',name: 'Guerra'}
              ],
              description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          }>
    
    </MovieData>

     



    </Container>
  )
};