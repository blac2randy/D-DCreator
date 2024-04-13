import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, title: "", author: "", description: "", class: "" });

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select()
                .eq('id', id)
                .single();

            if (data) setPost(data);
            if (error) console.log(error);
        };

        fetchPost();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

 const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .delete()
          .eq('id', id); 
      
        window.location = "/";
 }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({ title: post.title, author: post.author, description: post.description, class: post.class })
            .eq('id', id);

        window.location = "/";
    };

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Name</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br />

                <label htmlFor="author">Race</label>
                <select id="author" name="author" onChange={handleChange}>
                    <option value="">Select a Race</option>
                    <option value="Demon">Demon</option>
                    <option value="Elf">Elf</option>
                    <option value="Orc">Orc</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Human">Human</option>
                    <option value="Druid">Druid</option>
                    <option value="Empyrean">Empyrean</option>
                </select>
                <br />

                <label htmlFor="description">Description</label><br />
                <input type="text" rows="5" cols="50" id="description" name="description" onChange={handleChange} />
                <br />

                <label htmlFor="class">Class</label>
                <select id="class" name="class" onChange={handleChange}>
                    <option value="">Select a Class</option>
                    <option value="Wretch">Wretch</option>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Vagabond">Vagabond</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Confessor">Confessor</option>
                </select><br />
                <br />

                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    );
};

export default EditPost;