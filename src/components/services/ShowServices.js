import {
    useGetServicesQuery,
    // useUpdateServiceMutation,
    // useDeleteServiceMutation,
    // useAddServiceMutation
} from "../../features/api/apiSlice"
import { useState } from "react"
import CardItem from "../Seller/Card";
const ShowServices = () => {
    // const [newService, setNewService] = useState('')

    const {
        data: services,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetServicesQuery()
    // const [addTodo] = useAddTodoMutation()
    // const [updateTodo] = useUpdateTodoMutation()
    // const [deleteTodo] = useDeleteTodoMutation()

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addTodo({ userId: 1, title: newTodo, completed: false })
    //     setNewTodo('')
    // }

    // const newItemSection =
        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="new-todo">Enter a new todo item</label>
        //     <div className="new-todo">
        //         <input
        //             type="text"
        //             id="new-todo"
        //             value={newTodo}
        //             onChange={(e) => setNewTodo(e.target.value)}
        //             placeholder="Enter new todo"
        //         />
        //     </div>
        //     <button className="submit">
        //         <FontAwesomeIcon icon={faUpload} />
        //     </button>
        // </form>


    let content;
    if (isLoading) {
		console.log(isLoading)
        content = <p>Loading...</p>
    } else if (isSuccess) {
        
        //     return (
        //         // <article key={todo.id}>
        //         //     <div className="todo">
        //         //         <input
        //         //             type="checkbox"
        //         //             checked={todo.completed}
        //         //             id={todo.id}
        //         //             onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        //         //         />
        //         //         <label htmlFor={todo.id}>{todo.title}</label>
        //         //     </div>
        //         //     <button className="trash" onClick={() => deleteTodo({ id: todo.id })}>
        //         //         <FontAwesomeIcon icon={faTrash} />
        //         //     </button>
        //         // </article>
		// 		// <h2>I am working{service._id}</h2>
        //     )
        // })


		content = <div className="grid sm:grid-cols-2 md:grid-cols-5 p-4 mx-8 shadow-lg gap-6">
		{services.data.map(service => {
			console.log(service._id)
			return (
				
					<CardItem key={service._id} Service={service} />
				
			);
		})}
	</div>
    } else if (isError) {
        content = <p>{error}</p>
    }

    return (
        <main>
            <h1 className="text-start text-2xl pl-6">Check out the Trending Gigs </h1>
            {/* {newItemSection} */}
            {content}
        </main>
    )
}
export default ShowServices