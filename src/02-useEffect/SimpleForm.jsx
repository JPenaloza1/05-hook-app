import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState( {
        username: "strider",
        email: "Jonathan@outloo.com"
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect( () => {
        // console.log("Use effect changed");
    }, []);

    useEffect( () => {
        // console.log("formState changed");
    }, [formState]);

    useEffect( () => {
        // console.log("email changed");
    }, [email]);



    useEffect( () => {

    })



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username" 
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            {
                ( username === "strider2" )&& <Message/>
            }
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="jonathan@google.com" 
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

        </>
    )
}