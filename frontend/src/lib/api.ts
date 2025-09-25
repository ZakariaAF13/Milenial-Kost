export type ApiOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  headers?: Record<string, string>
  body?: any
  // include credentials if your backend uses sessions/cookies
  credentials?: RequestCredentials
}

const baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

async function request<T = any>(path: string, opts: ApiOptions = {}): Promise<T> {
  const url = `${baseURL}${path}`
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    ...opts.headers,
  }

  let body: BodyInit | undefined
  if (opts.body !== undefined) {
    if (opts.headers?.['Content-Type']) {
      body = opts.body
    } else {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(opts.body)
    }
  }

  const res = await fetch(url, {
    method: opts.method || 'GET',
    headers,
    body,
    credentials: opts.credentials,
  })

  const contentType = res.headers.get('content-type') || ''
  const isJSON = contentType.includes('application/json')
  const payload = isJSON ? await res.json() : await res.text()

  if (!res.ok) {
    const message = (payload && (payload.message || payload.error)) || res.statusText
    throw new Error(message)
  }

  return payload as T
}

export const api = {
  get: <T = any>(path: string, opts: ApiOptions = {}) => request<T>(path, { ...opts, method: 'GET' }),
  post: <T = any>(path: string, body?: any, opts: ApiOptions = {}) => request<T>(path, { ...opts, method: 'POST', body }),
  put: <T = any>(path: string, body?: any, opts: ApiOptions = {}) => request<T>(path, { ...opts, method: 'PUT', body }),
  patch: <T = any>(path: string, body?: any, opts: ApiOptions = {}) => request<T>(path, { ...opts, method: 'PATCH', body }),
  delete: <T = any>(path: string, opts: ApiOptions = {}) => request<T>(path, { ...opts, method: 'DELETE' }),
}
