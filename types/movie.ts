export interface Movie {
  id: number
  title: string
  year: number
  status: 'watched' | 'unwatched'
  created_at: Date
  updated_at: Date
}