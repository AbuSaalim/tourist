import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { loginUser, registerUser, logout } from '../store/authSlice'

const useAuth = () => {
  const dispatch = useDispatch()
  const { user, isAuthenticated, isLoading, error } = useSelector((state) => state.auth)

  const login = useCallback(
    (credentials) => dispatch(loginUser(credentials)),
    [dispatch]
  )

  const register = useCallback(
    (userData) => dispatch(registerUser(userData)),
    [dispatch]
  )

  const logoutUser = useCallback(
    () => dispatch(logout()),
    [dispatch]
  )

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout: logoutUser,
  }
}

export default useAuth
