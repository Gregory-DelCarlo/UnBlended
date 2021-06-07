import { connect } from 'react-redux';
import AllReviews from './all_reviews';
import { getDrinks } from '../../actions/whiskey_actions';
import { getDistilleries } from '../../actions/distillery_actions';

const mapStateToProps = state => {
    const {whiskey, distilleries } = state.entities;
    if (Object.keys(whiskey).length !== 0 && Object.keys(distilleries).length !== 0) {
        return ({
            drinks: whiskey,
            distilleries,
            currentUser: state.session.id
        })
    } else {
        return {};
    }
};

const mapDispatchToProps = dispatch => ({
    getDrinks: () => dispatch(getDrinks()),
    getDistilleries: () => dispatch(getDistilleries())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews);