import React, { createContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: string | null
  loading: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        // Giả lập việc kiểm tra tính hợp lệ của người dùng với server
        setUser(storedUser)
      }
      setLoading(false)
    }

    checkUser()
  }, [])

  const login = async (username: string, password: string) => {
    setLoading(true)
    // Giả lập API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (username === 'test' && password === 'password') {
      setUser(username)
      localStorage.setItem('user', username)
      setLoading(false)
      return true
    }
    setLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
