import { format } from "@formkit/tempo"

export const formatDate = (date: string): string =>
  format(new Date(date), "short")

export const formatDateLong = (date: string): string =>
  format(new Date(date), "long")

export const formatDateInput = (date: Date): string =>
  format(date, "YYYY-MM-DD", "en")

export const formatTime = (date: string): string =>
  format(new Date(date), { time: "short" })
