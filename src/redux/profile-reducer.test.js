import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'by', likesCount: 120},
    ]
};

it('length of post should be incremented', () => {
    // 1. test data
    const action = addPostActionCreator('Dima');
    // action
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be corrected', () => {
    // 1 test data
    const action = addPostActionCreator('Dima');
    // 2 action
    const newState = profileReducer(state, action);
    //expectation
    expect(newState.posts[2].message).toBe('Dima');
});

it('after deleting length of messeges should be decrement', () => {
    // 1 test data
    const action = deletePost(1);
    // 2 action
    const newState = profileReducer(state, action);
    // 3 expectation
    expect(newState.posts.length).toBe(2);
});

it('after deleting length should be decrement if id is incorected', () => {
    // 1 test data
    const action = deletePost(10);
    // 2 action 
    const newState = profileReducer(state, action);
    // 3 expectation
    expect(newState.posts.length).toBe(2);
});