const Main = ({name, qty, good, increment, deleteItem})=>{
    return(
        <div className="main">
            Welcome to {name} page. We sell {qty} {good} here. <button onClick={increment}>Increment</button> <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default Main;
