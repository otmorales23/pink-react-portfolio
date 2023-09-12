import React from 'react';
import Quiz from '../../images/coding-quiz.png'
import Scheduler from '../../images/workday-scheduler.png'
import FashionFusion from '../../images/fashion-fusion.png'
import PasswordGenerator from '../../images/password-generator.png'
import NoteTaker from '../../images/pastel-note-taker.png'
import './examples.css'

function Examples() {
    return (
        <div className="examples">
            <h2>Examples of My Work</h2>
            <div className="images">
                <a href="https://otmorales23.github.io/so-you-think-you-can-code/">
                    <img src={Quiz} alt="a pink-themed coding quiz" />
                    <div className="image-container">
                        <div>Coding Quiz</div>
                    </div>
                </a>
                <a href="https://otmorales23.github.io/work-day-scheduler/">
                    <img src={Scheduler} alt="a pink-themed work day scheduler" />
                    <div className="image-container">
                        <div>Work Day Scheduler</div>
                    </div>
                </a>
                <a href="https://fashion-fusion-fdbc9c87836b.herokuapp.com/">
                    <img src={FashionFusion} alt="a screenshot of the homepage of a sample eCommerce webpage" />
                    <div className="image-container">
                        <div>Fashion Fusion - eCommerce Page</div>
                    </div>
                </a>
                <a href="https://otmorales23.github.io/create-a-password/">
                    <img src={PasswordGenerator} alt="a screenshot of a simple JavaScript password generator" />
                    <div className="image-container">
                        <div>Password Generator</div>
                    </div>
                </a>
                <a href="https://pastel-note-taker-fd1adcb5eb12.herokuapp.com/">
                    <img src={NoteTaker} alt="a screenshot of a simple, pink-themed note taker application" />
                    <div className="image-container">
                        <div>Note Taker App</div>
                    </div>
                </a>
            </div>


        </div >
    );
}


export default Examples;