
import './CreatePost.css'
import React, { useState, useParams } from 'react';
import { supabase } from '../client'
const CreatePost = () => {

    const [post, setPost] = useState({title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const createPost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .insert({title: post.title, author: post.author, description: post.description, class: post.class})
            .select();
            window.location = "/";
 
    }


    return (
        <div>
            <form>
                <label for="title">Name </label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} />
            
        
            <label for="author">Race </label>
            <select id="author" name="author" onChange={handleChange}>
               <option value="">Select a Race </option>
                    <option value="Class1"></option>
                    <option value="Demon">Demon</option>
                    <option value="Elf">Elf</option>
                    <option value="Orc">Orc</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Human">Human</option>
                    <option value="Druid">Druid</option>
                    <option value="Empyrean">Empyrean</option>
            </select>
                <br/>
                <br/>
                <label for="description">Description </label><br />
                <input type="text" rows="5" cols="50" id="description" name="description" onChange={handleChange}/>
                <br/>
            <label for="class">Class </label>
            <select id="class" name="class" onChange={handleChange}>
                    <option value="">Select a Class</option>
                    <option value="Wretch">Wretch</option>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Vagabond">Vagabond</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Confessor">Confessor</option>
                </select>
                <br/>

                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost;