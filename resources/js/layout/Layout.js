import React, {useState} from 'react';
import {Head, Link} from "@inertiajs/inertia-react";
import Menu from "../components/Menu";

function Layout({title = "CMS", children}) {

    const [shouldHideMenu, setShouldHideMenu] = useState(true);

    console.log(window.location)

    return (
        <React.Fragment>
            {!shouldHideMenu ? <div className="burger-overlay" onClick={() => setShouldHideMenu(true)}/> : ""}
            <Head title={title}/>
            <div>
                <div className={`vh-100 navigation-container ${!shouldHideMenu ? 'navigation-active' : ""}`}>
                    <Menu/>
                </div>
                <div className="content-container flex-grow-1">
                    <div className="header-container d-flex align-items-center justify-content-lg-end justify-content-between px-4">
                        <div className="burger-button d-flex align-items-center" onClick={() => setShouldHideMenu(false)}>
                            <div/>
                        </div>
                        <div className="links-container d-flex">
                            <div className={`px-3 d-sm-block d-none ${window.location.pathname.startsWith('/tag/backend') ? "links-active" : ""}`}><Link href={"/tag/backend"}>Backend</Link></div>
                            <div className={`px-3 d-sm-block d-none ${window.location.pathname.startsWith('/tag/frontend') ? "links-active" : ""}`}><Link href={"/tag/frontend"}>frontend</Link></div>
                            <div className={`px-3 d-sm-block d-none ${window.location.pathname.startsWith('/tag/other') ? "links-active" : ""}`}><Link href={"/tag/other"}>other</Link></div>
                            <div className={`px-3 ${window.location.pathname.startsWith('/random') ? "links-active" : ""}`}><Link href={"/random"}>Losowy Post</Link></div>
                        </div>
                    </div>
                    <div className="content-inner-container d-flex justify-content-center">
                        <div className="page-container flex-grow-1">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;
