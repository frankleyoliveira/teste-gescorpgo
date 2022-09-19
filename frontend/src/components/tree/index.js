import { useEffect, useState } from 'react'
import TreeNode from '../tree-node'
import MapModal from '../map-modal'

export default function Tree() {
  // lista de todos os registros com todos os dados
  const [registers, setRegisters] = useState([])

  // as informações do registro selecionado serão passadas para exibir o mapa corretamente
  const [selectedRegister, setSelectedRegister] = useState({})

  // quando ser true um modal contendo o mapa será aberto
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Busca os registros na API e salva na variável registers
  useEffect(() => {
    fetch('http://localhost:3001')    
    .then(res => res.json())
    .then(data => {
      setRegisters(data)
    })
  }, [])

  // array contendo apenas as keys dos registros
  const allNodes = registers.map(register => register.key)
  
  // filtrando apenas as keys principais (parents)
  const mainNodes = allNodes.filter(register => {
    return !register.includes('-')
  })
  
  // recebe uma key (node) e retorna todos os filhos desta key
  function getChildNodes(node) {
    // transforma a key em um array, separada pelos hífens "-" em cada posição
    const nodeSplit = node.split('-')
    // com isso sabemos que o filho desta key precisa ter uma posição a mais
    const childLength = nodeSplit.length + 1

    // filtra os filhos da key recebida no array allNodes (que contém todas as keys)
    const children = allNodes.filter(key => {         
      const keySplit = key.split('-')

      // descarta todas chaves com tamanho diferente do que queremos
      if (keySplit.length !== childLength) {
        return false
      }

      // se o primeiro item for diferente da key recebida na função já podemos descartar também
      if (keySplit[0] !== nodeSplit[0]) {
        return false
      }

      // por fim testamos se a segunda posição é igual para arrays de tamanho 3
      if (childLength === 3 && keySplit[1] !== nodeSplit[1]) {
        return false
      }

      return true
    })

    return children
  }
  
  function openMap(key) {
    // seleciona o registro cuja informações queremos usar no mapa
    setSelectedRegister(registers.find(register => register.key === key))
    // muda a variável modal para true para o mapa ser aberto
    setIsModalOpen(true)
  }

  return (
    <div>
      {mainNodes.map(node => (
        <TreeNode 
          key={node}
          id={node}
          level={0}
          getChildNodes={getChildNodes}
          openMap={openMap}
        />
      ))}      
      {
        isModalOpen && 
        <MapModal 
          handleClose={() => setIsModalOpen(false)}
          position={selectedRegister.localizacao}
          description={selectedRegister.description}
        />      
      }      
    </div>
  )
}