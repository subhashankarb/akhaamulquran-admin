import config from "../config/env"

const BASE_URL = `${config.apiUrl}/api/auth`

async function logFetch(url: string, options: RequestInit) {
  console.log('[API REQUEST]', options.method, url, options.body)
  const res = await fetch(url, options)
  const data = await res.json()
  console.log('[API RESPONSE]', options.method, url, res.status, data)
  
  if (!res.ok) {
    throw new Error(data.message || 'API Request Failed')
  }
  
  return data
}

export async function loginApi(email: string, password: string) {
  return logFetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
}

export async function getProfileApi(token: string) {
  return logFetch(`${BASE_URL}/me`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
  })
}

// Keeping other methods for completeness as requested
export async function registerApi(data: {
  email: string
  password: string
  firstName: string
  lastName: string
}) {
  return logFetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, role: 'user' }), // Default role if needed
  })
}

export async function verifyOtpApi(email: string, otp: string) {
  return logFetch(`${BASE_URL}/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp }),
  })
}

export async function resendOtpApi(email: string) {
  return logFetch(`${BASE_URL}/resend-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
}