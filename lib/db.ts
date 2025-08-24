import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function query(sqlQuery: string, params?: any[]) {
  try {
    const results = await sql(sqlQuery, params)
    return results
  } catch (error) {
    console.error("Database query failed:", error)
    throw error
  }
}

// For compatibility with existing code
export async function getConnection() {
  // Neon handles connections automatically, so we just return the sql function
  return sql
}