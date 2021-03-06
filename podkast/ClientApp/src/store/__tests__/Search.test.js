import { actionCreators, requestSearchPodcastsType, 
         receiveSearchPodcastsType, errorSearchPodcastsType, 
         requestPodcastFeedType, errorRequestFeedType,
        receivePodcastFeedType } from '../Search';
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
            body: { results: podcastListResult },
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            { type: requestSearchPodcastsType, searchString },
            { type: receiveSearchPodcastsType, searchString, podcasts: podcastListResult }
        ];

        const store = mockStore({});

        return store.dispatch(actionCreators.requestSearchPodcasts(searchString)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('request search error returns error actions', () => {

        const searchString = 'test search';
        const error = 'error';

        fetchMock.getOnce(`api/Search/${searchString}`,{
            throws: { message: error }
        });

        const expectedActions = [
            { type: requestSearchPodcastsType, searchString },
            { type: errorSearchPodcastsType, error }
        ];

        const store = mockStore({});

        return store.dispatch(actionCreators.requestSearchPodcasts(searchString)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('request feed error returns error actions', () => {

        const error = 'error';
        const podcast = { collectionId: 12 };
        const url = `api/Search/Feed/${podcast.collectionId}`;

        fetchMock.getOnce(url,{
            throws: { message: error }
        });

        const expectedActions = [
            { type: requestPodcastFeedType, podcast },
            { type: errorRequestFeedType, error }
        ];

        const store = mockStore({});

        return store.dispatch(actionCreators.requestGetFeed(podcast)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('request feed returns success actions', () => {

        const error = 'error';
        const podcast = { collectionId: 12 };
        const feed = { test: "feed" };
        const url = `api/Search/Feed/${podcast.collectionId}`;

        fetchMock.getOnce(url,{
            body: feed,
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            { type: requestPodcastFeedType, podcast },
            { type: receivePodcastFeedType, feed }
        ];

        const store = mockStore({});

        return store.dispatch(actionCreators.requestGetFeed(podcast)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


});