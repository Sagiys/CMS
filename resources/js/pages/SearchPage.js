import React, {useEffect, useState} from "react";
import Layout from "../layout/Layout";
import PostTeaser from "../components/PostTeaser";
import {InputText} from "primereact/inputtext";
import {Inertia} from "@inertiajs/inertia";

function SearchPage({posts}) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                Inertia.visit(`/szukaj?search=${search}`)

            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [search]);

    return (
        <div className="d-flex w-100 flex-column align-items-center flex-wrap">
            <div className="post-page-title py-4 text-center">
                <h1>Wyszukaj w postach:</h1>
                <span className="p-input-icon-left w-100">
                    <i className="pi pi-search"/>
                    <InputText className="w-100" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Szukaj"/>
                </span>
            </div>
            <div className="posts-teaser-container d-flex w-100 flex-row justify-content-between flex-wrap mt-5">
                {posts.length > 0 ? posts.map((post) => {
                    return <PostTeaser post={post}/>
                }) : <div className="w-100 text-center"><h1>Brak postów o podanej frazie wyszukiwania</h1></div>}
            </div>
        </div>
    );
}

SearchPage.layout = page => <Layout children={page}/>

export default SearchPage;
