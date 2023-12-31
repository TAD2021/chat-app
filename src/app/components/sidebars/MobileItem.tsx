'use client'

import Link from "next/link"
import clsx from "clsx"
import React from "react"

interface MobileItemsProps {
    href: string,
    icon: any,
    active?: boolean,
    onClick?: () => void
}

const MobileItem: React.FC<MobileItemsProps> = ({
    href,
    icon: Icon,
    active,
    onClick
}) => {
    
    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }

    return (
        <Link
            onClick={onClick}
            href={href}
            className={clsx(`
                flex
                group
                gap-x-3
                text-sm
                leading-6
                font-semibold
                w-full
                justify-center
                p-4
                text-gray-500
                hover:text-black
                hover:bg-gray-100
            `,
                active && 'bg-gray-100 text-black'
            )}
        >
            <Icon className="h-6 w-6"/>
        </Link>
    )
}

export default MobileItem