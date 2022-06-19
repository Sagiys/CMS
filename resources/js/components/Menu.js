import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";

function Menu() {

    const {navigation} = usePage().props;

    console.log(window.location)

    return (
        <div className="w-100 px-3 py-4 menu-container">
            <div className="menu-main-site">
                <Link href={"/"}>
                    <span>&lt;</span> Strona Główna
                </Link>
            </div>
            <ul className="menu-labels-list">
                {navigation.map((category) => {
                    return <li key={category.name} className="menu-labels-list-label">
                        {category.name}
                        <ul className="menu-posts-list">
                            {category.posts.map((post) => {
                                return <Link href={`/post/${post.slug}`} key={post.title} className={`menu-posts-list-post ${post.active ? 'menu-posts-list-post-active' : ""} `} as="li">
                                    {post.title}
                                </Link>
                            })}
                        </ul>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Menu;
