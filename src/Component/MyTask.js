import React from 'react';
import "../styles/css/materialize.min.css";
import "../styles/css/style.min.css";
import db from './createDatabase';
import "../styles/css/button-center.css";

const todoRef = db.collection("todos");



class MyDay extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    addTodo = (e) => {
        e.preventDefault()

        const ref = todoRef.doc()
        ref.set({
            task: this.state.todo,
            description: this.state.description,
            createdAt: new Date(),
            done: false,
            id: ref.id
        })
            .then(function (docRef) {
                console.log(docRef)
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    deleteTodo = (e) => {
        todoRef.doc(e.target.value).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    handleChange = (e) => {
        const t = e.target
        this.setState({
            [t.name]: t.value
        })
    }

    componentWillMount() {
        todoRef.orderBy('createdAt').onSnapshot((docSnapShot) => {
            let todos = []
            docSnapShot.forEach(doc => { todos.push(doc.data()) })
            this.setState({
                todos,
                loaded: true
            })
        })
    }



    renderTodoList() {
        const ListItem = this.state.todos.map((todo, index) => {
            return (

                <li className="collection-item dismissable" key={index}>
                    <input type="checkbox" id="task1" />
                    <label htmlFor="task1">
                        {todo.task}
                        <br />
                        <span className="pink-text">Description:  </span>{todo.description}


                        <button value={todo.id} className="btn-floating btn-sm btn-danger right button"
                            onClick={this.deleteTodo}>X</button>

                    </label>

                </li>




            )
        })

        return (
            <div className="col s12">
                <ul id="task-card" className="collection with-header">
                    <li className="collection-header cyan">
                        <h4 className="task-card-title">Start Your Day</h4>
                        <p className="task-card-date">Manage Your Work</p>
                    </li>

                    {ListItem}

                </ul>


            </div>


        )
    }



    render() {
        return (

            <div>

                {/* Start Page Loading */}
                {/* <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
    </div> */}
                {/* End Page Loading */}

                {/* //////////////////////////////////////////////////////////////////////////// */}

                {/* START HEADER */}
                <header id="header" className="page-topbar">
                    {/* start header nav*/}
                    <div className="navbar-fixed">
                        <nav className="navbar-color">
                            <div className="nav-wrapper">
                                <ul className="left">
                                    <li>
                                        <h1 className="logo-wrapper logo-content "><img className="logo" src={require("../styles/images/logo.png")} alt="logo"/>
                                             
                                             </h1>
                                             
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                    {/* end header nav*/}
                </header>

                {/* END HEADER */}

                {/* //////////////////////////////////////////////////////////////////////////// */}

                {/* START CONTENT */}


                <section id="content">


                    {/*start container*/}
                    <div className="container">
                        <div className="section">

                            <div className="App">
                                <h1>Ultimate Todo App</h1>
                                <form >
                                    <div className="input-group" >
                                        <input type="text" placeholder="enter Todo Here" onChange={this.handleChange} name="todo" />
                                        <input type="text" placeholder="enter description here" onChange={this.handleChange} name="description" required />
                                        <button className="btn btn-primary" type="submit" onClick={this.addTodo}>Add Todo</button>
                                    </div>
                                </form>
                                {this.renderTodoList()}
                            </div>
                            <div className="divider"></div>

                        </div>
                    </div>
                    {/*end container*/}
                </section>
                {/* END CONTENT */}

                {/* //////////////////////////////////////////////////////////////////////////// */}

                {/* </div> */}
                {/* END WRAPPER */}

                {/* </div> */}
                {/* END MAIN */}



                {/* //////////////////////////////////////////////////////////////////////////// */}

                {/* START FOOTER */}
                <footer className="page-footer">
                    <div className="footer-copyright cyan">
                        <div className="container">

                            <span className="right grey-text text-lighten-4 center-align"> Design and Developed by Eta Team </span>
                        </div>
                    </div>
                </footer>
                {/* END FOOTER */}

            </div>


        );
    }
}


export default MyDay;
