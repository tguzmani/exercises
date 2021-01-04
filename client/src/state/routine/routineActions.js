import {
  ERROR_ROUTINE,
  LOADING_ROUTINE,
  CREATE_ROUTINE,
  READ_ROUTINE,
  READ_ROUTINES,
  UPDATE_ROUTINE,
  DELETE_ROUTINE,
} from './routineTypes'

import axios from 'axios'

const config = { headers: { 'Content-Type': 'application/json' } }

export const setLoading = () => dispatch => {
  return dispatch({ type: LOADING_ROUTINE })
}

export const createRoutine = routine => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.post(`api/routine/`, routine, config)
    dispatch({ type: CREATE_ROUTINE, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR_ROUTINE, payload: error.response.data.message })
  }
}

export const readRoutines = () => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.get(`api/routine/all`)
    dispatch({ type: READ_ROUTINES, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR_ROUTINE, payload: error.response.data.message })
  }
}

export const updateRoutine = routine => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.put(`api/routine/${routine._id}`, routine, config)
    dispatch({ type: UPDATE_ROUTINE, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR_ROUTINE, payload: error.response.data.message })
  }
}

export const deleteRoutine = routine => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.delete(`api/task/${routine._id}`)
    dispatch({ type: DELETE_ROUTINE, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR_ROUTINE, payload: error.response.data.message })
  }
}