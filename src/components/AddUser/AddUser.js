import React from 'react';
import { useForm } from "react-hook-form";
const AddUser = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://pacific-shore-80224.herokuapp.com/addUser', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(result => console.log(result))
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Name" />
                <input {...register("price")} type="number" placeholder="Price" />
                <input {...register("description")} type="text" placeholder="Description" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddUser;