import Link from 'next/link'
import React from 'react'

const index = (props: any) => {
  const {href, label} = props
  return (
<<<<<<< HEAD
    <Link href={props.href} className={props.className}>{props.label}</Link>
=======
    <Link href={href}>{label}</Link>
>>>>>>> 6bf2790564ef6e83c8af6b9f3c1b78ffb93f225d
  )
}


export default index

// export const index = () => <div>index</div>

// export const index = () => (
//         <>
//             <div>index</div>
//             <div>index</div>
//         </>
//     )
  

