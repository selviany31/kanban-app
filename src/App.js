import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BoardComponent from "./components/Board/Board";
import Header from "./components/Header";
import { createDataItems, deleteDataItems, getDataTodos, getMultiItems } from "./store/actions/todos";
import { dragItem, dragItemColumn } from "./store/slices/todos";

function App() {
  const dispatch = useDispatch()
  const { todos, items, successCreate } = useSelector((state) => state.todos)
  const [columns, setColumns] = useState(todos);

  const bgColor = ['#F7FEFF', '#FFFCF5', '#FFFAFA', '#F8FBF9']
  const brdColor = ['#01959F', '#FEEABC', '#F5B1B7', '#B8DBCA']
  const txtColor = ['#01959F', '#FA9810', '#E11428', '#43936C']

  const onDragEnd = (result, columns, setColumns, items) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
  
    const itemSelected = items.filter(item => item?.id.toString() === draggableId)?.[0]

    if(source.droppableId !== destination.droppableId) {
      dispatch(dragItem({id: itemSelected?.id, todo_id: destination.droppableId}))
    } else {
      dispatch(dragItemColumn({
        destination: destination.droppableId,
        destinationIndex: destination.index,
        sourceIndex: source.index
      }))
    }

    dispatch(createDataItems({
      id: destination.droppableId,
      data: {
        name: itemSelected?.name,
        progress_percentage: itemSelected?.progress_percentage
      }
    }))

    dispatch(deleteDataItems({
      id: source.droppableId,
      idItem: draggableId
    }))
  };

  useEffect(() => {
    dispatch(getDataTodos())
  },[dispatch])

  useEffect(() => {
    if(successCreate) {
      dispatch(getMultiItems(todos))
    }
  },[dispatch, todos, successCreate])
  
  return (
    <div className="App">
      <Header />
      <Container className="mt-4" fluid>
        <Row>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns, items)}
          >
            {todos?.map((todo, index) => (
              <Col lg={3}>
                <BoardComponent 
                  key={index} 
                  id={todo?.id}
                  title={todo?.title} 
                  desc={todo?.description} 
                  bgColor={bgColor[index]}
                  brdColor={brdColor[index]}
                  txtColor={txtColor[index]}
                />
              </Col>
            ))}
          </DragDropContext>
        </Row>
      </Container>
    </div>
  );
}

export default App;
