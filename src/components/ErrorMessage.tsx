import { PropsWithChildren } from "react"

export default function ErrorMessage({ children } : PropsWithChildren) {
  return (
    
      <p className="br-red-600 p-2 text-white font-bold text-sm text-center">{ children }</p> 
    
  )
}
