import React from 'react';
import {Inertia} from "@inertiajs/inertia";

function PostTeaser({post}) {

    const {title, description, slug} = post;

    return (
        <div className="post-teaser-container mb-4" onClick={() => Inertia.get(`/post/${slug}`)}>
            <div className="post-teaser-title">{title}</div>
            <div className="post-teaser-description">{description}{description}{description}{description}</div>
            <div className="w-100 post-teaser-gradient"/>
        </div>
    )
}

export default PostTeaser;
