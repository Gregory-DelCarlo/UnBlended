import React from 'react';
import { Link } from 'react-router-dom';

export default class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.props.getReviews();
    }
}