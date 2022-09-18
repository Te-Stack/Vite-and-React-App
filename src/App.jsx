import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient()

function App () {
  const [page, setPage] = useState('planets')


  return (
    <QueryClientProvider client={queryClient}>
    <div className='App'>
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
     <div className="content">
        {page === 'planets'? <Planets/> : <People/>}
      </div>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;













// import "./styles.css";
// import { useReducer } from "react";


// export default function App() {
//   const initialState = { title: "freeCodeCamp", count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

  
//   function reducer(state, action) {
//     switch (action.type) {
//       case "change-title":
//         return { ...state, title: "FCC" };
//       case "increment-counter":
//         return { ...state, count: state.count + 1 };
//       default:
//         throw new Error();
//     }
//   }

//   return (
//     <>
//       <div className="App">
//         <h1>{state.title} CodeSandbox</h1>
//         <button onClick={() => dispatch({ type: "change-title" })}>
//           Change Title
//         </button>
//         <button onClick={() => dispatch({ type: "increment-counter" })}>
//           Increment Counter
//         </button>
//       </div>
//       <p style={{ textAlign: "center" }}>{state.count}</p>.
//     </>
//   );
// }

