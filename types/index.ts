export type TypeItems = {
  id:number
  name:string
  price:number
  isHit:number
  images:string
  onClickAdd?:(items:TypeItems) => void
}

export type TypeItemsList = {
  items:TypeItems[]
  onClickAdd?:(items:TypeItems) => void
}