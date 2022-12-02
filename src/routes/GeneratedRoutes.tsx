import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism.css";
import "../style/App.css";
import Model from "../data/Model";
import TheRoute from "../data/Route";
import Controllers from "../data/Controllers";
import Database from "../data/Database";
import Index from "../data/Index";
import _Dependancies from "../data/_Dependancies";
import ENV from "../data/Env";
import { Routes, Route } from "react-router-dom"
import { _Generated } from '../pages/_Generated'
import HTTP from "../data/HTTP";
import Package from "../data/Package";

export const GeneratedRoutes = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    //read full url
    const url = window.location.href;

    //split url by /
    const urlSplit = url.split("/");

    //get last item in array
    const field1t = urlSplit[urlSplit.length - 5];
    const field2t = urlSplit[urlSplit.length - 4];
    const name = urlSplit[urlSplit.length - 3];
    const Name = name.charAt(0).toUpperCase() + name.slice(1);
    const field1 = urlSplit[urlSplit.length - 2];
    const field2 = urlSplit[urlSplit.length - 1];

    const finalUrl = `${field1t}/${field2t}/${name}/${field1}/${field2}`

    return (
        <Routes>
            <Route path="/*" element={<_Generated finalUrl={finalUrl} />} />
            <Route path="/Model/*" element={<Model name={name} Name={Name} field1={field1} field2={field2} field1t={field1t} field2t={field2t} />} />
            <Route path="/TheRoute/*" element={<TheRoute Name={Name} />} />
            <Route path="/Controllers/*" element={<Controllers name={name} Name={Name} field1={field1} field2={field2} />} />
            <Route path="/Database/*" element={<Database />} />
            <Route path="/Index/*" element={<Index />} />
            <Route path="/Dependancies/*" element={<_Dependancies />} />
            <Route path="/ENV/*" element={<ENV Name={Name} />} />
            <Route path="/HTTP/*" element={<HTTP Name={Name} field1={field1} field2={field2} />} />
            <Route path="/Package/*" element={<Package />} />
        </Routes>
    )
}   