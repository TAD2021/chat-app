import prisma from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUser'

const getConversations = async () => {
    const currentUser = await getCurrentUser()

    if(!currentUser?.id){
        return []
    }

    try{
        const conversations = await prisma.conversation.findMany({
            orderBy: {
                lastMessageAt: 'desc'
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include: {
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                },
                users: true
            }
        })

        return conversations
    }catch(err: any){
        return []
    }
}

export default getConversations;