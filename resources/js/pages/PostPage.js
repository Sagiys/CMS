import React from "react";
import Layout from "../layout/Layout";
import ReactMarkdown from "react-markdown";
import {Link} from "@inertiajs/inertia-react";

function PostPage({post}) {
    console.log(post)

    return (
        <div className="d-flex flex-grow-1 flex-column align-content-start">
            <div className="post-page-title py-4">
                <h1>{post.title}</h1>
            </div>
            <div className="post-page-description">{post.description}</div>
            <div className="post-page-tags pt-3 pb-5">{post.tags.map((tag) => {
                return <Link href={`/tag/${tag.slug}`} key={tag.slug} as={"span"}>{tag.name}</Link>
            })}</div>
            <div className="post-page-content">
                <ReactMarkdown>
                    {post.content}
                </ReactMarkdown>
            </div>
            <div className="post-page-author pb-3"><b>Autor</b>: {post.user.first_name} {post.user.last_name}</div>
        </div>
    );
}

PostPage.layout = page => <Layout children={page}/>

export default PostPage;
