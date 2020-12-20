import axios from 'axios';
import {getDetailsUrl, screenshotsUrl} from '../api';

export const loadDetails = (id) => async (dispatch) => {
    
    dispatch({
        type: "LOADING_DETAIL"
    });
    
    const detailData = await axios.get(getDetailsUrl(id));
    const screenshotData = await axios.get(screenshotsUrl(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data 
        }
    })

};
