export interface Venue {
  id: string
  name: string
  nameEn: string
  location: string
  thumbnail: string
  heroImage: string
  description: string
  features: string[]
  minAge: number
  dressCode: string
  tablePrice: string
  guestFee: string
  operatingHours: string
  instagram?: string
  gallery?: string[]
  faqs: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface BookingFormData {
  type: 'table' | 'guest'
  date: string
  venue: string
  name: string
  phone: string
  partySize: number
  message?: string
}
