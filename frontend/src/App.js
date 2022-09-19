import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.png'
import Tree from './components/tree'

const Header = styled.header`
  background-color: #FFF;
  padding: 1rem 0;  
`
const LogoImg = styled.img`
  height: 8rem;
  display: block;
  margin: 0 auto;
`

const Container = styled.main`
  padding: 1rem;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <LogoImg src={logo} alt="logo" />
        </Header>
        <Container>
          <Tree />
        </Container>
      </div>
    );
  }
}

export default App;