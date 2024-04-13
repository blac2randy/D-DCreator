import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'
const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select();
          
            // set state of posts
            setPosts(data)
          }
            fetchPosts();
          setPosts(props.data);
    }, [props]);
    

    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description} class={post.class}/>
                ) : <h2>{'No Characters Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;