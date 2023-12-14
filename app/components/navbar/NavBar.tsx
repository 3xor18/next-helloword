import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../Index"

const navItems = [
    {path:'/about',text:'About'},
    {path:'/pricing',text:'Pricing'},
    {path:'/contact',text:'Contact'}
]

export const NavBar = () => {
  return (
   <nav className="flex bl-blue-800 bg-opacity-30 p-2 m-2 rounded">
    <Link href={'/'} className="flex items-center">
        <HomeIcon/>
    <span>home</span>
    </Link>
    
    <div className="flex flex-1"></div>

    {
        navItems.map(item=> (
            <ActiveLink key={item.path} path={item.path} text={item.text} />
        ))
    }
    

   </nav>
  )
}
