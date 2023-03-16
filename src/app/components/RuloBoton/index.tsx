import Link from 'next/link'
import React from 'react'

const index = (props: any) => {
  return (
    <Link href={props.href} className={props.className}>{props.label}</Link>
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
  
