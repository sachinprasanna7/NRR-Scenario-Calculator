import React from 'react'

function Navbar(props) {

    const handleFirstBattingClick = () => {
        props.setCurrentPage('firstBatting');
    }
    
    const handleSecondBattingClick = () => {
        props.setCurrentPage('secondBatting');
    }

    const handleHomeClick = () => {
        props.setCurrentPage('home');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="\" onClick={handleHomeClick}>NRR-Help</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="\" onClick={handleHomeClick}>Calculator</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Scenarios
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="\battingFirst.js" onClick={handleFirstBattingClick}>Batting First</a></li>
                                    <li><a className="dropdown-item" href="\battingSecond.js" onClick={handleSecondBattingClick}>Batting Second</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
