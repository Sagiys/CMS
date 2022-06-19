import React, {useEffect, useState} from "react";
import Layout from "../layout/Layout";
import {Link} from "@inertiajs/inertia-react";
import PostTeaser from "../components/PostTeaser";
import {InputText} from "primereact/inputtext";
import {Inertia} from "@inertiajs/inertia";

function MainPage({tags, backend, frontend, other}) {
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
                    <InputText className="w-100" value={search} onChange={(e) => {
                        console.log(e.target.value);
                        setSearch(e.target.value)
                    }} placeholder="Szukaj"/>
                </span>
            </div>
            <div className="post-page-tags pt-3 pb-5">{tags.map((tag) => {
                return <Link href={`/tag/${tag.slug}`} key={tag.slug} as={"span"}>{tag.name}</Link>
            })}</div>
            <div className="posts-teaser-container d-flex w-100 flex-row justify-content-between flex-wrap mt-5">
                <div className="d-flex flex-column align-items-center">
                    <div className="post-teaser-label mb-3">Backend:</div>
                    <PostTeaser post={backend}/>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="post-teaser-label mb-3">Frontend:</div>
                    <PostTeaser post={frontend}/>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="post-teaser-label mb-3">Other:</div>
                    <PostTeaser post={backend}/>
                </div>
            </div>
        </div>
    );
}

MainPage.layout = page => <Layout children={page}/>

export default MainPage;
