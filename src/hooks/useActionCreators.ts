import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRepositories } from '../redux'
import { ActionCreators } from '../types/types'

/**
 * Custom hook connecting redux dispatch function with the action creators.
 * @template ActionCreators Describes the structure of the object holding values of all the application action creators.
 * @returns {ActionCreators} Returns connected action creators.
 */
const useActionCreators = (): ActionCreators => bindActionCreators({ fetchRepositories }, useDispatch())

export { useActionCreators }