import Link from 'next/link'
import React from 'react'

const index = (props: any) => {
  const {href, label} = props
  return (
    <Link href={href}>{label}</Link>
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
  

