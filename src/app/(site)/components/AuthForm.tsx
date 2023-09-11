'use client'

import { useState } from "react"

type Varitant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Varitant>('LOGIN');
    
    return (
        <div>Auth Form!</div>
    )
}

export default AuthForm