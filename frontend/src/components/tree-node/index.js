import { useState } from 'react'
import { FaChevronDown, FaChevronRight, FaMapMarkerAlt, FaTrashAlt, FaEdit } from 'react-icons/fa'
import * as S from './styled'

export default function TreeNode(props) {
  const {id, level, getChildNodes, openMap} = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.Node level={level}>        
        {
          level < 2 &&
          <S.NodeIcon onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </S.NodeIcon>
        }
        <span>{id}</span>        
        {
          level === 2 &&
          <S.GroupIcons>
            <FaMapMarkerAlt onClick={() => openMap(id)} />
            <FaTrashAlt />
            <FaEdit />
          </S.GroupIcons>
        }
      </S.Node>
      {
        isOpen &&   
        getChildNodes(id).map(node => (
          <TreeNode
            key={node}
            id={node}
            level={level + 1}
            getChildNodes={getChildNodes}
            openMap={openMap}
          />
        ))     
      }
    </>
  )
}