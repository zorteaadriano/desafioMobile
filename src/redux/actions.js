import { setUser, setRepos } from './store';
import axios from 'axios';

export const fetchGitHubUser = (username) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    dispatch(setUser(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchGitHubUserRepos = (username) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    dispatch(setRepos(response.data));
  } catch (error) {
    console.error(error);
  }
};