import React, { createContext, useContext } from "react";

const blogInfo = {
    React: {
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae, voluptatum dolorem atque quos mollitia nesciunt est dignissimos aut, aspernatur iure modi natus.",
        author: "Adhithi Ravichandran"
    },
    GraphQL: {
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae, voluptatum dolorem atque quos mollitia nesciunt est dignissimos aut, aspernatur iure modi natus.",
        author: "Adhithi Ravichandran"
    }
};

const contentInfo = {
    Hooks: {
        concept: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae, voluptatum dolorem atque quos mollitia nesciunt est dignissimos aut, aspernatur iure modi natus. ",
        teacher: ""
    },
    customHooks: {
        concept: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae, voluptatum dolorem atque quos mollitia nesciunt est dignissimos aut, aspernatur iure modi natus.",
        teacher: "Sahil Singh"
    }
};

const contentInfoContext = createContext(contentInfo);
const blogInfoContext = createContext(blogInfo);
const ParentComponent = () => {
    return (
        <blogInfoContext.Provider value={blogInfo}>
            <h2>Use Context Example Component</h2>
            <contentInfoContext.Provider value={contentInfo}>
                <BlogDetailComponent />
                <MyOtherBlogInfoComponent />
                <ContentInfoComponent/>
                <MyContentInfoComponent/>
            </contentInfoContext.Provider>
        </blogInfoContext.Provider>
    );
}

const BlogDetailComponent = () => {
    const blogDetails = useContext(blogInfoContext);

    return (
        <div>
            <h3>React Blog Details</h3>
            <p>Topic: {blogDetails.React.post}</p>
            <p>Author: {blogDetails.React.author}</p>
        </div>
    );
}

const MyOtherBlogInfoComponent = () => {
    const blogDetails = useContext(blogInfoContext);

    return (
        <div>
            <h3>GraphQL Blog Details</h3>
            <p>Topic: {blogDetails.GraphQL.post}</p>
            <p>Author: {blogDetails.GraphQL.author}</p>
            
        </div>
        
    );
}

const ContentInfoComponent = () => {
    const InfoDetails = useContext(contentInfoContext);

    return (
        <div>
            <h3>React hooks Details</h3>
            <p>Topic: {InfoDetails.Hooks.concept}</p>
            <p>Teacher: {InfoDetails.Hooks.teacher}</p>
        </div>
    );
}

const MyContentInfoComponent = () => {
    const InfoDetails = useContext(contentInfoContext);

    return (
        <div>
            <h3>React custom hooks Details</h3>
            <p>Topic: {InfoDetails.customHooks.concept}</p>
            <p>Teacher: {InfoDetails.customHooks.teacher}</p>
        </div>
    );
}

export default ParentComponent;