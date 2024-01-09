
import axios from 'axios'; 

const baseUrl = 'http://192.168.43.29';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const SET_BOOKMARKS = 'SET_BOOKMARKS';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';


const API_ENDPOINT = `${baseUrl}/bookmarks`;

// Add Bookmark
export const addBookmark = (bookmark) => ({
    type: ADD_BOOKMARK,
    payload: bookmark,
});

// Set All Bookmarks
export const setBookmarks = (bookmarks) => ({
    type: SET_BOOKMARKS,
    payload: bookmarks,
});

// Remove Bookmark
export const removeBookmark = (bookmarkId) => ({
    type: REMOVE_BOOKMARK,
    payload: bookmarkId,
});


