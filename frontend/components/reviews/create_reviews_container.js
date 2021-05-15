import { connect } from 'react-redux';
import CreateReviews from './create_reviews';

const mapStateToProps = state => ({
    user: state.session.id
});

export default connect(mapStateToProps, null)(CreateReviews);