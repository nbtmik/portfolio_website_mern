import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });

    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/user`;//to use in local

    const { data } = await axios.get(link); // issue here(resolved)

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const login = (email,password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/login`;//to use in local

    const { data } = await axios.post(link,{email,password},config); 

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/logout`;//to use in local

    const { data } = await axios.get(link); 

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });

    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/me`;//to use in local

    const { data } = await axios.get(link,{withCredentials:true}); 

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const updateUser = (name,email,password,skills,about) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_USER_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/admin/update`;//to use in local

    const { data } = await axios.put(link,{name,email,password,skills,about},config); 

    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addTimeline = (title, description,date) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/admin/timeline/add`;//to use in local

    const { data } = await axios.post(link,{title, description,date},config); 

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });

    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/admin/timeline/${id}`;//to use in local

    const { data } = await axios.delete(link,{withCredentials:true}); 

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addYoutube = (title, url,image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_YOUTUBE_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/admin/youtube/add`;//to use in local

    const { data } = await axios.post(link,{title, url,image},config); 

    dispatch({
      type: "ADD_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteYoutube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_YOUTUBE_REQUEST",
    });

    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/admin/youtube/${id}`;//to use in local

    const { data } = await axios.delete(link,{withCredentials:true}); 

    dispatch({
      type: "DELETE_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addProject = (title, url,image,description,techStack) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_PROJECT_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/admin/project/add`;//to use in local

    const { data } = await axios.post(link,{title, url,image,description,techStack},config); 

    dispatch({
      type: "ADD_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });

    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/admin/project/${id}`;//to use in local

    const { data } = await axios.delete(link,{withCredentials:true}); 

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const contactUs = (name, email,message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });

    const config = {headers:{"Content-Type":"application/json"}};
    const BASE_URL = "http://localhost:4000";
    let link = `${BASE_URL}/api/v1/contact`;//to use in local

    const { data } = await axios.post(link,{name, email,message},config); 

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: error.response.data.message,
    });
  }
};