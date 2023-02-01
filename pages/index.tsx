import { useEffect } from "react";
import { data } from "@/data"

import { CartList } from "@/components/CartList/CartList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addToFavourite } from "@/redux/favourite/favouriteSlice";
import { TypeItems } from "@/types";

export default function Home() {
  const favourite = useAppSelector((state) => state.favourite.favourite)
  const dispatch = useAppDispatch()

  const onAddToFavourite = (items:TypeItems) => {
    dispatch(addToFavourite(items))
  }

  useEffect(() => {
    const json = JSON.stringify(favourite)
    localStorage.setItem('favourite', json)
  }, [favourite])


  return (
    <div>
      <CartList items={data} onClickAdd={onAddToFavourite}/>
    </div>
  )
}
