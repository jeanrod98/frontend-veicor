import React from 'react'
import Header from './Header';
import Footer from './Footer';

import { Link } from "react-router-dom";
import {Form} from 'react-bootstrap'

import '../css/adminOpciones.css'

function AdminFacturas() {


    
    return (
        <div className="AdminFacturas">
            <Header/>
            <div className="container contenedor-adminFact">
                
            </div>

            <Footer/>
            
        </div>
    )
}

export default AdminFacturas
