import React from 'react';
import './card.scss';

const Card = () => {
    return (
        <div className="card__wrapper">
            <div className="card__info">
                <span>
                    <i className="fas fa-eye"></i>2350
                </span>
                <span>
                    <i className="fas fa-comment-alt"></i>624
                </span>
                <span>
                    <i className="fas fa-download"></i>1470
                </span>
            </div>
            <div className="card__profile">
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="people"
                />
                <div className="card__profile__text">
                    <h2>Milky Way</h2>
                    <p>
                        by <b>Nasa</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
