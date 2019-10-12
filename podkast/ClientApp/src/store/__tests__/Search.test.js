import { actionCreators, requestSearchPodcastsType, receiveSearchPodcastsType} from '../Search';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



describe('Search Actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });


    it('request search podcasts returns expected actions', () => {

        const searchString = 'test search';
        const podcastListResult = 'Test result';

        fetchMock.getOnce(`api/Search/${searchString}`,{
            body: { podcasts: podcastListResult },
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            { type: requestSearchPodcastsType, searchString },
            { type: receiveSearchPodcastsType, searchString, podcastListResult }
        ];

        const store = mockStore({});

        return store.dispatch(actionCreators.requestSearchPodcasts(searchString)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});