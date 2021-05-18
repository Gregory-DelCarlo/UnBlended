import { connect } from 'react-redux';
import CreateReviews from './create_reviews';

const mapStateToProps = (state, ownProps) => ({
    user: state.session.id,
    isOpen: ownProps.isOpen
});

export default connect(mapStateToProps, null)(CreateReviews);