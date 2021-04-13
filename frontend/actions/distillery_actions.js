import { 
    fetchDistilleries, fetchDistillery
} from '../util/distillery_utils';


//----------------------ACTION CONSTANTS--------------------
// use these in your reducer to ensure correct case is found


export const RECIEVE_DISTILLERIES = 'RECEIVE_DISTILLERIES';
export const RECEIVE_DISTILLERY = 'RECEIVE_DISTILLERY';

//-----------------------ACTION CREATORS---------------------
// these get sent to your reducer by your action thunk creators to update state

const receiveDistilleries = distilleries => ({
    type: RECIEVE_DISTILLERIES,
    distilleries
});

const receiveDistillery = distillery => ({
    type: RECEIVE_DISTILLERY,
    distillery
});

//----------------------ACTION THUNK CREATORS-----------------
// add these to component containers to get information from the backend into state

export const getDistilleries = () => dispatch => (
    fetchDistilleries()
        .then(distilleries => dispatch(receiveDistilleries(distilleries)))
);

export const getDistillery = distId => dispatch => (
    fetchDistillery(distId) 
        .then(distillery => dispatch(receiveDistillery(distillery)))
);