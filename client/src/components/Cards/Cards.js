import React from 'react';
import './Cards.css';
import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <div className="ui_container">
                <div className="six wide column">
                    <div className="ui grid">
                        <div className="three column row">
                            <div className="column">
                                <Link to="/first" className="ui link card">
                                    <div className="image">
                                        <img src="https://i.ibb.co/CV6hMX8/Ficus-elastica-2-500x500.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">FICUS ELASTICA RUBY</a>
                                        <div className="description">
                                        
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="column">
                                <Link to="/second" className="ui link card">
                                    <div className="image">
                                        <img src="https://i.ibb.co/8MNvKnD/Calathea-ornata-500x500.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">CALATHEA MEDALLION</a>
                                        <div className="description">
                                        
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="column">
                                <Link to="/third" className="ui link card">
                                    <div className="image">
                                        <img src="https://i.ibb.co/pyw3brk/Pilea-peperomioides-500x500.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">PILEA PEPEROMIOIDES</a>
                                        <div className="description">
                                            
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="three column row">
                            <div className="column">
                                <Link to="/fourth" className="ui link card">
                                    <div className="image">
                                        <img src="https://i.ibb.co/cb2kRy3/Calathea-orbifolia-500x500.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">CALATHEA ORBIFOLIA</a>
                                        <div className="description">
                                            
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="column">
                                <Link to="/fifth" className="ui link card">
                                    <div className="image">
                                        <img src="https://i.ibb.co/3Cgh3JK/Screen-Shot-2020-11-08-at-2-33-27-PM-500x500.png" />
                                    </div>
                                    <div className="content">
                                        <a className="header">MONSTERA ADANONSII</a>
                                        <div className="description">
                                            
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="column">
                                <Link to="/sixth" className="ui link card">
                                    <div className="image">
                                        <img src="https://i.ibb.co/fdjb3q2/Oxalis-triangularis-500x500.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">OXALIS TRIANGULARIS</a>
                                        <div className="description">
                                            
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cards;