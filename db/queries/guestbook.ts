import { desc } from 'drizzle-orm'

import { db } from '~/db'
import { type GuestbookDto, GuestbookHashids } from '~/db/dto/guestbook.dto'
import { guestbook } from '~/db/schema'

export async function fetchGuestbookMessages({
  limit = 200,
}: { limit?: number } = {}) {
  console.log(guestbook)
  let data = []
  try{
     data = await db
    .select({
      id: guestbook.id,
      userId: guestbook.userId,
      userInfo: guestbook.userInfo,
      message: guestbook.message,
      createdAt: guestbook.createdAt,
    })
    .from(guestbook)
    .orderBy(desc(guestbook.createdAt))
    .limit(limit)
  }catch{
     data = [{id:12,
      userId: '122',
      userInfo: {
        firstName: '2326',
        lastName: '88989',
        imageUrl: null
      },
      message: '6666666',
      createdAt: '2'}]
  }
  
  return data.map(
    ({ id, ...rest }) =>
      ({
        ...rest,
        id: GuestbookHashids.encode(id),
      } as GuestbookDto)
  )
}
