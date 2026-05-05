export type GoogleReviewType ={
  author_name: string
  profile_photo_url?: string
  rating: number
  text: string
  time: number
}


export type SingleReviewGoogleType = {
  author_name: string
  author_url?: string
  language?: string
  profile_photo_url?: string
  rating: number
  relative_time_description?: string
  text: string
  time: number // Unix timestamp
}

export type ReviewsGoogleType = SingleReviewGoogle[]

export type SingleReviewHomestarsType = {
  name: string
  review: string
  rating: number
  date: string
}

export type ReviewsHomestarsType = SingleReviewHomestarsType[]

