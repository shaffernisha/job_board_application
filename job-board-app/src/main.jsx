// main.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
// AUTH CONTEXT WITH LOCAL STORAGE
const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Got all registered users from localStorage
  const getRegisteredUsers = () => {
    const users = localStorage.getItem('jobNestRegisteredUsers')
    return users ? JSON.parse(users) : []
  }

  // Saved registered users to localStorage
  const saveRegisteredUsers = (users) => {
    localStorage.setItem('jobNestRegisteredUsers', JSON.stringify(users))
  }

  // Initialized  default admin user on first load
  const initializeDefaultUsers = () => {
    const existingUsers = getRegisteredUsers()
    
    const adminExists = existingUsers.some(u => u.email.toLowerCase() === 'admin@jobnest.com')
    
    if (!adminExists) {
      const defaultUsers = [
        {
          id: 1,
          name: 'Admin',
          email: 'admin@jobnest.com',
          password: 'rareSHA26@',
          role: 'admin',
          createdAt: new Date().toISOString()
        },
        ...existingUsers
      ]
      saveRegisteredUsers(defaultUsers)
      console.log('Admin user created:', defaultUsers[0])
    }
    
    // Debug: Log all users
    const allUsers = getRegisteredUsers()
    console.log('Registered users in system:', allUsers)
  }

  useEffect(() => {
    // Initialize default users
    initializeDefaultUsers()
    
    // Check for logged in user on mount
    const storedUser = localStorage.getItem('jobNestCurrentUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const register = (name, email, password, role) => {
    const registeredUsers = getRegisteredUsers()
    
    // Check if email already exists
    const existingUser = registeredUsers.find(
      u => u.email.toLowerCase() === email.toLowerCase()
    )

    if (existingUser) {
      return { 
        success: false, 
        error: 'Email already registered. Please login instead.' 
      }
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email: email.toLowerCase(),
      password,
      role,
      createdAt: new Date().toISOString()
    }

    // Add to registered users
    registeredUsers.push(newUser)
    saveRegisteredUsers(registeredUsers)

    // Auto login after registration
    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }

    setUser(userData)
    localStorage.setItem('jobNestCurrentUser', JSON.stringify(userData))

    return { success: true, user: userData }
  }

  const login = (email, password) => {
    console.log('Login attempt with:', { email, password })
    
    const registeredUsers = getRegisteredUsers()
    console.log('Available users:', registeredUsers)
    
    // Find user with matching credentials - exact match
    const foundUser = registeredUsers.find(u => {
      const emailMatch = u.email === email || u.email.toLowerCase() === email.toLowerCase()
      const passwordMatch = u.password === password
      
      console.log(`Checking user ${u.email}:`, { 
        emailMatch, 
        passwordMatch,
        storedPassword: u.password,
        inputPassword: password,
        exactEmailMatch: u.email === email
      })
      
      return emailMatch && passwordMatch
    })

    if (foundUser) {
      console.log('User found, logging in:', foundUser)
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role
      }
      
      setUser(userData)
      localStorage.setItem('jobNestCurrentUser', JSON.stringify(userData))
      localStorage.setItem('userEmail', foundUser.email)
      return { success: true, user: userData }
    }

    console.log('No matching user found')
    return { 
      success: false, 
      error: 'Invalid email or password. Please check your credentials or register first.' 
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('jobNestCurrentUser')
    localStorage.removeItem('userEmail')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// ============================================
// ROOT APPLICATION
// ============================================
const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

// ============================================
// RENDER APP
// ============================================
createRoot(document.getElementById('root')).render(<Root />)