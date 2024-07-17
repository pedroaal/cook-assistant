const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string

export const supabaseLoader = (src: string, bucket?: string) =>
  `${SUPABASE_URL}/storage/v1/object/public/${bucket ?? "images"}/${src}`
